import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Saeedreza > Projects",
  description: "A collection of my projects.",
};

export default function Projects() {
  return (
    <div className="max-w-2xl mx-auto">
      <section className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-blue-600 hover:underline mb-12 inline-block">← Back</Link>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="mb-8">
          <div className="mb-4">
            <p><a href="https://timeslide.saeedreza.com" className="text-blue-600 hover:underline" target="_blank">Timeslide &#10138;</a></p>
            <p>NYTimes meets TikTok, an experimental concept exploring the future of news media websites. </p>
          </div>
          <div className="mb-4">
            <p><a href="https://workform.ai" className="text-blue-600 hover:underline" target="_blank">Workform &#10138;</a></p>
            <p>A quest to build an AI-first team collaboration and communication platform.</p>
          </div>
          <div className="mb-4">
            <p><a href="https://askauthor.com" className="text-blue-600 hover:underline" target="_blank">Ask Author &#10138;</a></p>
            <p>Talk to your favorite authors.</p>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Notes</h2>
        <div className="mb-8">
          <div className="mb-4">
            <p><a href="notes/analyse-of-5221-n8n-workflows" className="text-blue-600 hover:underline">Analysis of 5221 n8n workflows.</a></p>
            <p>A deep dive into the world of n8n workflows.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 