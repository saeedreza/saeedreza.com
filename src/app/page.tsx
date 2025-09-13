export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saeedreza Abbaspour",
    "url": "https://saeedreza.com",
    "image": "https://saeedreza.com/img/saeedreza.jpg",
    "jobTitle": "Product Engineer & AI Developer",
    "description": "Software product designer and developer transitioning into AI engineering",
    "sameAs": [
      "https://linkedin.com/in/saeedreza",
      "https://x.com/saeedreza",
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
        "url": "https://refact.io"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <div className="max-w-2xl mx-auto">
        <main id="main-content" className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-6">Hello World!</h1>
          
          <section aria-labelledby="about-heading" className="mb-8">
            <h2 id="about-heading" className="sr-only">About Me</h2>
            <div className="mb-4">
              <p className="mb-4">
                Hi, I&apos;m Saeedreza (pronounced Sa-eed Re-za). I&apos;m a software product designer and developer transitioning into AI engineering. Right now, I&apos;m building <a 
                  href="https://workform.ai" 
                  className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Workform - AI agents and team collaboration platform (opens in new tab)"
                >Workform &#10138;</a>, a project focused on AI agents and rethinking how teams collaborate and communicate in AI era.
              </p>
              
              <p className="mb-4">
                I also run <a 
                  href="https://refact.io" 
                  className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Refact - Software development agency (opens in new tab)"
                >Refact &#10138;</a>, a software development agency that builds scalable software products for tech and media companies.
              </p>

              <p className="mb-4">
                List of the active <a 
                  href="/projects" 
                  className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="View my projects"
                >projects</a> I work on in my spare time.
              </p>
            </div>
          </section>
          
          <section aria-labelledby="connect-heading" className="mt-8">
            <h2 id="connect-heading" className="text-lg font-semibold mb-4">Let&apos;s Connect</h2>
            <p className="mb-4">
              To hire me for a project, click <a 
                href="https://cal.saeedreza.com" 
                className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Schedule a meeting with me (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >here &#10138;</a> to schedule a meeting.
            </p>
            <p className="mb-4">
              You can also find me on <a 
                href="https://linkedin.com/in/saeedreza" 
                className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn (opens in new tab)"
              >LinkedIn &#10138;</a> and <a 
                href="https://x.com/saeedreza" 
                className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow me on X (opens in new tab)"
              >X &#10138;</a>.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
