import { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Long-form thoughts and writings on AI, product development, and technology trends by Saeedreza Abbaspour.',
  keywords: ['blog', 'notes', 'AI', 'product development', 'technology', 'long-form writing', 'thoughts'],
  openGraph: {
    title: 'Notes - Saeedreza Abbaspour',
    description: 'Long-form thoughts and writings on AI, product development, and technology trends.',
    url: 'https://saeedreza.com/notes',
  },
};

interface NoteMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
}

function extractMetadataFromFile(filePath: string): { title?: string; description?: string; date?: string } {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    let title = '';
    let description = '';
    let date = '';
    
    const metadataMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (metadataMatch) {
      title = metadataMatch[1]
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&amp;/g, '&');
    } else {
      let h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      if (!h1Match) {
        h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      }
      if (h1Match) {
        title = h1Match[1]
          .replace(/<br\s*\/?>/g, ' ')
          .replace(/<span[^>]*>([^<]*)<\/span>/g, '$1')
          .replace(/\s+/g, ' ')
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"')
          .replace(/&amp;/g, '&')
          .trim();
      }
    }
    
    const descMatch = content.match(/description:\s*'((?:[^'\\]|\\.)*)'/);
    if (descMatch) {
      description = descMatch[1].replace(/\\'/g, "'").replace(/\\"/g, '"');
    } else {
      const pMatch = content.match(/<p[^>]*className="[^"]*text-xl[^"]*"[^>]*>([^<]+)<\/p>/);
      if (pMatch) {
        description = pMatch[1]
          .replace(/\s+/g, ' ')
          .replace(/&ldquo;/g, '"')
          .replace(/&rdquo;/g, '"')
          .replace(/&amp;/g, '&')
          .trim();
        if (description.length > 150) {
          description = description.substring(0, 150) + '...';
        }
      }
    }
    
    const dateMatch = content.match(/dateTime="([^"]+)"/);
    if (dateMatch) {
      date = dateMatch[1];
    }
    
    return { title, description, date };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return {};
  }
}

function getAllNotes(): NoteMetadata[] {
  const notesDir = path.join(process.cwd(), 'src', 'app', 'notes');
  const notes: NoteMetadata[] = [];
  
  try {
    const items = fs.readdirSync(notesDir, { withFileTypes: true });
    
    for (const item of items) {
      if (item.isDirectory() && item.name !== '[slug]') {
        const slug = item.name;
        const pagePath = path.join(notesDir, slug, 'page.tsx');
        
        if (fs.existsSync(pagePath)) {
          const { title, description, date: extractedDate } = extractMetadataFromFile(pagePath);
          
          let date = extractedDate;
          if (!date) {
            const stats = fs.statSync(pagePath);
            date = stats.mtime.toISOString().split('T')[0];
          }
          
          notes.push({
            slug,
            title: title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            description: description || '',
            date
          });
        }
      }
    }
    
    return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading notes directory:', error);
    return [];
  }
}

export default function NotesPage() {
  const articles = getAllNotes();

  return (
    <div className="max-w-prose-wide mx-auto py-16 md:py-20 px-6 sm:px-8">
      <div className="mb-12">
        <Link
          href="/"
          className="back-link"
          aria-label="Go back to homepage"
        >
          <span className="back-arrow">←</span>
          <span>Back to home</span>
        </Link>
      </div>
      
      <section aria-labelledby="notes-heading" className="mb-12">
        <h1 className="page-title">Notes</h1>
      </section>

      <section aria-labelledby="articles-list">
        <h2 id="articles-list" className="sr-only">All Notes</h2>
        <div className="space-y-10">
          {articles.map((article) => (
            <article key={article.slug}>
              <Link 
                href={`/notes/${article.slug}`}
                className="article-card"
                aria-label={`Read ${article.title}`}
              >
                <h3>{article.title}</h3>
                {article.description && (
                  <p>{article.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
