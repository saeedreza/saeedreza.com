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

// Function to extract metadata from a note's page.tsx file
function extractMetadataFromFile(filePath: string): { title?: string; description?: string; date?: string } {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title from metadata export or h1 tag
    let title = '';
    let description = '';
    let date = '';
    
    // Try to extract from metadata export first
    const metadataMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
    if (metadataMatch) {
      title = metadataMatch[1]
        .replace(/&ldquo;/g, '"')
        .replace(/&rdquo;/g, '"')
        .replace(/&amp;/g, '&');
    } else {
      // Try to find h1 with complex content including <br /> and <span>
      let h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      if (!h1Match) {
        // Simpler h1 pattern
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
    
    // Try to extract description from metadata export
    const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch) {
      description = descMatch[1];
    } else {
      // Try to find description in JSX - look for subtitle patterns
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
    
    // Try to extract date from dateTime attribute
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

// Function to get all notes from the filesystem
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
          
          // Use extracted date if available, otherwise use file modification date
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
    
    // Sort by date (newest first)
    return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading notes directory:', error);
    return [];
  }
}

export default function NotesPage() {
  const articles = getAllNotes();

  return (
    <div className="max-w-2xl mx-auto">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
            aria-label="Go back to homepage"
          >
            ← Back to home
          </Link>
        </div>
        
        <section aria-labelledby="notes-heading" className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Notes</h1>
          <p className="mb-4">
            Long-form thoughts on building businesses, software startups, product development, and technology trends.
          </p>
        </section>

        <section aria-labelledby="articles-list" className="mt-12">
          <h2 id="articles-list" className="sr-only">All Notes</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <article key={article.slug}>
                <h3 className="mb-1">
                  <Link 
                    href={`/notes/${article.slug}`}
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Read ${article.title}`}
                  >
                    {article.title}
                  </Link>
                </h3>
                {article.description && (
                  <p className="text-gray-700">{article.description}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{article.date}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
