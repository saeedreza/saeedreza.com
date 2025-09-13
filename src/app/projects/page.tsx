import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my active projects and technical writings.",
  keywords: ["Workform", "Ask Author", "Saeedreza"],
  openGraph: {
    title: "Projects - Saeedreza Abbaspour",
    description: "A collection of my active projects including and technical writings.",
    url: 'https://saeedreza.com/projects',
  },
};

export default function Projects() {
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects by Saeedreza Abbaspour",
    "description": "A collection of active projects and writings",
    "url": "https://saeedreza.com/projects",
    "author": {
      "@type": "Person",
      "name": "Saeedreza Abbaspour"
    },
    "hasPart": [
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
      />
      
      <div className="max-w-2xl mx-auto">
        <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Go back to homepage"
            >
              ← Back
            </Link>
          </nav>
          
          <h1 className="text-2xl font-bold mb-8">Projects</h1>
          
          <section aria-labelledby="active-projects-heading" className="mb-12">
            <h2 id="active-projects-heading" className="text-xl font-semibold mb-6">Active Projects</h2>
            <div className="space-y-6">
              <article className="border-l-4 border-blue-500 pl-4">
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
                <p className="text-gray-700">NYTimes meets TikTok, an experimental concept exploring the future of news media websites.</p>
              </article>
              
              <article className="border-l-4 border-green-500 pl-4">
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
                <p className="text-gray-700">A quest to build an AI-first team collaboration and communication platform.</p>
              </article>
              
              <article className="border-l-4 border-purple-500 pl-4">
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
                <p className="text-gray-700">Talk to your favorite authors.</p>
              </article>
            </div>
          </section>
          
          <section aria-labelledby="notes-heading">
            <h2 id="notes-heading" className="text-xl font-semibold mb-6">Technical Writings</h2>
            <div className="space-y-4">
              <article className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">
                  <a 
                    href="/notes/analyse-of-5221-n8n-workflows" 
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Read analysis of n8n workflows"
                  >
                    Analysis of 5221 n8n workflows
                  </a>
                </h3>
                <p className="text-gray-700">A deep dive into the world of n8n workflows.</p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </>
  );
} 