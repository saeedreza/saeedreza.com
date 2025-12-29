import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const projects = [
  {
    name: 'Workform',
    url: 'https://workform.ai',
    description: 'An AI project manager for software teams.',
  },
  {
    name: 'Timeslide',
    url: 'https://timeslide.saeedreza.com',
    description: 'NYTimes meets TikTok.',
  },
  {
    name: 'Ask Author',
    url: 'https://askauthor.com',
    description: 'Talk to your favorite authors.',
  },
];

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

export default function Home() {
  const notes = getAllNotes();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saeedreza Abbaspour",
    "url": "https://saeedreza.com",
    "image": "https://saeedreza.com/img/saeedreza.png",
    "jobTitle": "Software Designer & AI Engineer",
    "description": "Software product designer and AI engineering",
    "sameAs": [
      "https://linkedin.com/in/saeedreza",
      "https://x.com/IAmSaeedreza",
      "https://github.com/saeedreza"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Workform",
        "url": "https://workform.ai"
      },
      {
        "@type": "Organization", 
        "name": "Refact",
        "url": "https://refact.co"
      }
    ],
    "hasCreated": [
      {
        "@type": "SoftwareApplication",
        "name": "Workform",
        "url": "https://workform.ai",
        "description": "AI project manager for software teams"
      },
      {
        "@type": "WebApplication",
        "name": "Timeslide",
        "url": "https://timeslide.saeedreza.com",
        "description": "NYTimes meets TikTok, exploring the future of news media websites"
      },
      {
        "@type": "WebApplication",
        "name": "Ask Author",
        "url": "https://askauthor.com",
        "description": "Talk to your favorite authors"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-prose-wide mx-auto py-16 md:py-20 px-6 sm:px-8">
        {/* About */}
        <section aria-labelledby="about-heading" className="mb-16">
          <h1 id="about-heading" className="sr-only">About Me</h1>
          <div className="text-base leading-relaxed" style={{ color: 'var(--foreground)' }}>
            <p className="mb-6">
              Nobody would build what I wanted. So I learned to build it myself. Fifteen years and over 100 projects later, I speak both languages. I still remember what it felt like not to.
            </p>
            
            <p className="mb-6">
              I run{' '}
              <a 
                href="https://refact.co" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Refact - Software development agency (opens in new tab)"
              >Refact</a>, where I work with non-technical founders to build the first version of their product.
            </p>

            <p className="mb-6">
              I also build my own products. Currently:{' '}
              <a 
                href="https://workform.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Workform - AI project manager (opens in new tab)"
              >Workform</a>, an AI project manager for software teams.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section aria-labelledby="projects-heading" className="pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 id="projects-heading" className="section-title mb-6">Projects</h2>
          <div className="space-y-3 text-base">
            {projects.map((project) => (
              <p key={project.name} className="text-muted">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} (opens in new tab)`}
                >{project.name}</a>
                {' '}— {project.description}
              </p>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section aria-labelledby="notes-heading" className="mt-12 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 id="notes-heading" className="section-title mb-6">Notes</h2>
          <div className="space-y-3 text-base">
            {notes.map((note) => (
              <p key={note.slug} className="text-muted">
                <Link 
                  href={`/notes/${note.slug}`}
                  aria-label={`Read ${note.title}`}
                >{note.title}</Link>
              </p>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section aria-labelledby="connect-heading" className="mt-12 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 id="connect-heading" className="section-title mb-6">Connect</h2>
          <div className="space-y-3 text-base">
            <p className="text-muted">
              If you&apos;re building something and feel stuck,{' '}
              <a 
                href="https://cal.saeedreza.com" 
                aria-label="Schedule a meeting with me (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >let&apos;s talk</a>.
            </p>
            <p className="text-muted">
              Find me on{' '}
              <a 
                href="https://linkedin.com/in/saeedreza" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn (opens in new tab)"
              >LinkedIn</a>
              {' '}and{' '}
              <a 
                href="https://x.com/IAmSaeedreza" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow me on X (opens in new tab)"
              >X</a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
