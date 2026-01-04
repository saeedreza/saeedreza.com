import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

interface NoteInfo {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
}

function extractTitleAndDate(filePath: string, slug: string): { title?: string; date?: string; coverImage?: string } {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    let title = '';
    let date = '';
    let coverImage: string | undefined;
    
    const metadataMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (metadataMatch) {
      title = metadataMatch[1];
    }
    
    const publishedDateMatch = content.match(/publishedDate\s*=\s*['"]([^'"]+)['"]/);
    if (publishedDateMatch) {
      date = publishedDateMatch[1];
    } else {
      const dateTimeMatch = content.match(/dateTime="([^"]+)"/);
      if (dateTimeMatch) {
        date = dateTimeMatch[1];
      }
    }
    
    // Check for cover image
    const coverPath = path.join(process.cwd(), 'public', 'img', `${slug}-cover.png`);
    if (fs.existsSync(coverPath)) {
      coverImage = `/img/${slug}-cover.png`;
    }
    
    return { title, date, coverImage };
  } catch {
    return {};
  }
}

function getAllNotes(): NoteInfo[] {
  const notesDir = path.join(process.cwd(), 'src', 'app', 'notes');
  const notes: NoteInfo[] = [];
  
  try {
    const items = fs.readdirSync(notesDir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory() && item.name !== '[slug]') {
        const slug = item.name;
        const pagePath = path.join(notesDir, slug, 'page.tsx');
        
        if (fs.existsSync(pagePath)) {
          const { title, date: extractedDate, coverImage } = extractTitleAndDate(pagePath, slug);
          
          let date = extractedDate;
          if (!date) {
            const stats = fs.statSync(pagePath);
            date = stats.mtime.toISOString().split('T')[0];
          }
          
          notes.push({
            slug,
            title: title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            date: date || '',
            coverImage
          });
        }
      }
    }
    
    return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

interface ArticleNavProps {
  currentSlug: string;
}

export default function ArticleNav({ currentSlug }: ArticleNavProps) {
  const notes = getAllNotes();
  const currentIndex = notes.findIndex(note => note.slug === currentSlug);
  
  if (currentIndex === -1) return null;
  
  const prevNote = currentIndex < notes.length - 1 ? notes[currentIndex + 1] : null;
  const nextNote = currentIndex > 0 ? notes[currentIndex - 1] : null;
  
  if (!prevNote && !nextNote) return null;
  
  return (
    <nav className="article-nav mt-16 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="flex justify-between gap-4 sm:gap-8">
        <div className="flex-1 min-w-0">
          {prevNote && (
            <Link 
              href={`/notes/${prevNote.slug}`}
              className="article-nav-link group block"
            >
              <span className="article-nav-label">Previous</span>
              {prevNote.coverImage && (
                <div className="article-nav-image mt-2 mb-2 overflow-hidden rounded-sm">
                  <Image
                    src={prevNote.coverImage}
                    alt=""
                    width={280}
                    height={157}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <span className="article-nav-title group-hover:text-[var(--accent)]">{prevNote.title}</span>
            </Link>
          )}
        </div>
        <div className="flex-1 min-w-0 text-right">
          {nextNote && (
            <Link 
              href={`/notes/${nextNote.slug}`}
              className="article-nav-link group block"
            >
              <span className="article-nav-label">Next</span>
              {nextNote.coverImage && (
                <div className="article-nav-image mt-2 mb-2 overflow-hidden rounded-sm">
                  <Image
                    src={nextNote.coverImage}
                    alt=""
                    width={280}
                    height={157}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
              <span className="article-nav-title group-hover:text-[var(--accent)]">{nextNote.title}</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

