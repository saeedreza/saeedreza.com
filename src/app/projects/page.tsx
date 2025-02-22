import { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Saeedreza > Projects",
  description: "A collection of my projects.",
};

export default function Projects() {
  return (
    <div>
      <Link href="/" className="text-blue-600 hover:underline mb-12 inline-block">← Back</Link>
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      <ul className="custom-list space-y-2">
        <li><a href="https://timeslide.saeedreza.com" className="text-blue-600 hover:underline" target="_blank">Timeslide</a> - NYTimes meets TikTok. </li>
        <li>Daily Brief (coming soon)</li>
      </ul>
    </div>
  );
} 