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
    description: 'NYTimes meets TikTok',
    status: 'Live'
  },
  {
    name: 'Ask Author',
    url: 'https://askauthor.com',
    description: 'Talk to your favorite authors.',
    status: 'Live'
  },
  {
    name: 'Workform',
    url: 'https://workform.ai',
    description: 'An AI project manager for software teams.',
    status: 'In Development'
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
          aria-label="Go back to homepage"
        >
          ← Back to home
        </Link>
      </div>
      
      <section aria-labelledby="projects-heading" className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-stone-900">Projects</h1>
      </section>

      <section aria-labelledby="projects-list" className="mt-12">
        <h2 id="projects-list" className="sr-only">All Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <article key={project.name}>
              <h3 className="text-xl font-semibold mb-1">
                <a 
                  href={project.url}
                  className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} project (opens in new tab)`}
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-stone-600">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
