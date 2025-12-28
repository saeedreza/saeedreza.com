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
      
      <section aria-labelledby="projects-heading" className="mb-12">
        <h1 className="page-title">Projects</h1>
      </section>

      <section aria-labelledby="projects-list">
        <h2 id="projects-list" className="sr-only">All Projects</h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <article key={project.name}>
              <a 
                href={project.url}
                className="article-card"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} project (opens in new tab)`}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
