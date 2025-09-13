export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saeedreza Abbaspour",
    "url": "https://saeedreza.com",
    "image": "https://saeedreza.com/img/saeedreza.jpg",
    "jobTitle": "Software Designer & AI Engineer",
    "description": "Software product designer and AI engineering",
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
    ],
    "hasCreated": [
      {
        "@type": "SoftwareApplication",
        "name": "Workform",
        "url": "https://workform.ai",
        "description": "AI-first team collaboration and communication platform"
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
      
      <div className="max-w-2xl mx-auto">
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-6">Hello World!</h1>
          
          <section aria-labelledby="about-heading" className="mb-8">
            <h2 id="about-heading" className="sr-only">About Me</h2>
            <div className="mb-4">
              <p className="mb-4">
                Hi, I&apos;m Saeedreza (pronounced Sa-eed Re-za). I&apos;m a software product designer and developer transitioning into AI engineering. Currently, I&apos;m building <a 
                  href="https://workform.ai" 
                  className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Workform - AI agents and team collaboration platform (opens in new tab)"
                >Workform &#10138;</a>, where I’m exploring AI agents and building an AI-first platform for team collaboration.
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
              
            </div>
          </section>

          <section aria-labelledby="projects-heading" className="mt-12">
            <h2 id="projects-heading" className="text-lg font-semibold mb-6">Projects</h2>
            <div className="space-y-4">
              <article className="">
                <h3 className="font-medium mb-2">
                  <a 
                    href="https://timeslide.saeedreza.com" 
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Timeslide project (opens in new tab)"
                  >
                    Timeslide &#10138;
                  </a>
                </h3>
                <p className="text-sm text-gray-700">NYTimes meets TikTok, an experimental concept exploring the future of news media websites.</p>
              </article>
              
              <article className="">
                <h3 className="font-medium mb-2">
                  <a 
                    href="https://workform.ai" 
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Workform project (opens in new tab)"
                  >
                    Workform &#10138;
                  </a>
                </h3>
                <p className="text-sm text-gray-700">A quest to build an AI-first team collaboration and communication platform.</p>
              </article>
              
              <article className="">
                <h3 className="font-medium mb-2">
                  <a 
                    href="https://askauthor.com" 
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Ask Author project (opens in new tab)"
                  >
                    Ask Author &#10138;
                  </a>
                </h3>
                <p className="text-sm text-gray-700">Talk to your favorite authors.</p>
              </article>
            </div>
          </section>
          
          <section aria-labelledby="notes-heading" className="mt-12">
            <h2 id="notes-heading" className="text-lg font-semibold mb-6">Notes</h2>
            <div className="space-y-4">
              <article className="">
                <h3 className="mb-2">
                  <a 
                    href="/notes/analyse-of-5221-n8n-workflows" 
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Read analysis of n8n workflows"
                  >
                    Analysis of 5221 n8n workflows
                  </a>
                </h3>
                <p className="text-sm text-gray-700">A deep dive into the world of n8n workflows.</p>
              </article>
            </div>
          </section>

          <section aria-labelledby="connect-heading" className="mt-16">
            <h2 id="connect-heading" className="text-lg font-semibold mb-4">Let&apos;s Connect</h2>
            <p className="mb-4 text-sm">
              To hire me for a project, click <a 
                href="https://cal.saeedreza.com" 
                className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Schedule a meeting with me (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
              >here &#10138;</a> to schedule a meeting.
            </p>
            <p className="mb-4 text-sm">
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
