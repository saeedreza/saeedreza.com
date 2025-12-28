export default function Home() {
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
        <section aria-labelledby="about-heading" className="mb-16">
          <h1 id="about-heading" className="sr-only">About Me</h1>
          <div className="text-base leading-relaxed" style={{ color: 'var(--foreground)' }}>
            <p className="mb-6">
              I was a non-technical founder who couldn&apos;t get anyone to build what I wanted. So I learned to build it myself.
            </p>
            
            <p className="mb-6">
              Fifteen years later, I run{' '}
              <a 
                href="https://refact.co" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Refact - Software development agency (opens in new tab)"
              >Refact</a>, where I help non-technical founders build the first version of their products. I also build my own—currently{' '}
              <a 
                href="https://workform.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Workform - AI-powered team collaboration tool (opens in new tab)"
              >Workform</a>, an AI project manager for software teams.
            </p>
            
            <p>
              I write about product development, building software, and what I&apos;m learning along the way.
            </p>
          </div>
        </section>

        <section aria-labelledby="explore-heading" className="pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 id="explore-heading" className="section-title mb-6">Explore</h2>
          <div className="space-y-4">
            <div>
              <a 
                href="/projects" 
                aria-label="View all projects"
              >Click here</a>
              <span className="text-muted"> to see projects I&apos;m working on.</span>
            </div>
            
            <div>
              <a 
                href="/notes" 
                aria-label="View all notes"
              >Click here</a>
              <span className="text-muted"> to read my notes.</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="connect-heading" className="mt-12 pt-10 border-t" style={{ borderColor: 'var(--border)' }}>
          <h2 id="connect-heading" className="section-title mb-6">Connect</h2>
          <div className="space-y-3 text-base">
            <p className="text-muted">
              To work with me,{' '}
              <a 
                href="https://cal.saeedreza.com" 
                aria-label="Schedule a meeting with me (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >schedule a meeting</a>
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
              >X</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
