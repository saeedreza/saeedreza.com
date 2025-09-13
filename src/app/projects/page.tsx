import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Saeedreza > Projects",
  description: "A collection of my projects.",
};

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-12 inline-block">← Back</Link>
      <h2 className="font-semibold mb-4">Projects</h2>
      <ul className="custom-list mb-8">
        <li className="mb-2"><a href="https://timeslide.saeedreza.com" className="text-blue-600 hover:underline" target="_blank">Timeslide</a> - NYTimes meets TikTok, an experimental concept exploring the future of news media websites. </li>
        <li className="mb-2"><a href="https://workform.ai" className="text-blue-600 hover:underline" target="_blank">Workform</a> - A quest to build an AI-first team collaboration and communication platform.</li>
        <li className="mb-2"><a href="https://askauthor.com" className="text-blue-600 hover:underline" target="_blank">Ask Author</a> - Talk to your favorite authors.</li>
      </ul>
      <h2 className="font-semibold mb-4">Data Deep Dives</h2>
      <ul className="custom-list mb-8">
        <li className="mb-2"><a href="projects/analyse-of-5221-n8n-workflows" className="text-blue-600 hover:underline">Analyse of 5221 n8n workflows</a> - A deep dive into the world of n8n workflows.</li>
      </ul>
    </div>
  );
} 