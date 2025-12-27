import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Software projects, experiments, and products built by Saeedreza Abbaspour.',
  keywords: ['projects', 'software', 'AI', 'product development', 'experiments', 'Workform', 'Timeslide'],
  openGraph: {
    title: 'Projects - Saeedreza Abbaspour',
    description: 'Software projects, experiments, and products built by Saeedreza Abbaspour.',
    url: 'https://saeedreza.com/projects',
  },
};

// Simple projects registry - add new projects here
const projects = [
  {
    name: 'Timeslide',
    url: 'https://timeslide.saeedreza.com',
    description: 'NYTimes meets TikTok, an experimental concept exploring the future of news media websites.',
    status: 'Live'
  },
  {
    name: 'Workform',
    url: 'https://workform.ai',
    description: 'A quest to build an AI-first team collaboration and communication platform.',
    status: 'In Development'
  },
  {
    name: 'Ask Author',
    url: 'https://askauthor.com',
    description: 'Talk to your favorite authors.',
    status: 'Live'
  }
];

export default function ProjectsPage() {
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
        
        <section aria-labelledby="projects-heading" className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Projects</h1>
          <p className="mb-4">
            Software projects, experiments, and products, exploring AI, media, and team collaboration.
          </p>
        </section>

        <section aria-labelledby="projects-list" className="mt-12">
          <h2 id="projects-list" className="sr-only">All Projects</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <article key={project.name}>
                <h3 className="mb-1">
                  <a 
                    href={project.url}
                    className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} project (opens in new tab)`}
                  >
                    {project.name} &#10138;
                  </a>
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
