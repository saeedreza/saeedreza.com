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
      
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="about-heading" className="mb-12">
            <h1 id="about-heading" className="sr-only">About Me</h1>
            <div className="text-stone-700 text-lg leading-relaxed">
              <p className="mb-4">
                I was a non-technical founder who couldn&apos;t get anyone to build what I wanted. So I learned to build it myself.
              </p>
              
              <p className="mb-4">
                Fifteen years later, I run <a 
                  href="https://refact.co" 
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Refact - Software development agency (opens in new tab)"
                >Refact</a>, where I help non-technical founders build the first version of their products. I also build my own—currently <a 
                  href="https://workform.ai" 
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" 
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

          <section aria-labelledby="projects-heading" className="mt-12">
            <h2 id="projects-heading" className="sr-only">Projects</h2>
            <p className="text-stone-700 text-lg">
              <a href="/projects" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" aria-label="View all projects">
                Projects
              </a> — Things I&apos;ve built
            </p>
          </section>
          
          <section aria-labelledby="notes-heading" className="mt-4">
            <h2 id="notes-heading" className="sr-only">Notes</h2>
            <p className="text-stone-700 text-lg">
              <a href="/notes" className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" aria-label="View all notes">
                Notes
              </a> — Things I&apos;m thinking about
            </p>
          </section>

          <section aria-labelledby="connect-heading" className="mt-12">
            <h2 id="connect-heading" className="text-xl font-bold text-stone-900 mb-4">Let&apos;s Connect</h2>
            <p className="mb-3 text-stone-600">
              To work with me, <a 
                href="https://cal.saeedreza.com" 
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                aria-label="Schedule a meeting with me (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >schedule a meeting</a>
            </p>
            <p className="text-stone-600">
              Find me on <a 
                href="https://linkedin.com/in/saeedreza" 
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn (opens in new tab)"
              >LinkedIn</a> and <a 
                href="https://x.com/IAmSaeedreza" 
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow me on X (opens in new tab)"
              >X</a>
            </p>
          </section>
      </div>
    </>
  );
}
