import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Saeedreza > Notes",
  description: "My notes on life, work, and everything in between.",
};

export default function Blog() {
  return (
    <div>
      <Link href="/" className="text-blue-600 hover:underline mb-12 inline-block">← Back</Link>
      <h2 className="text-2xl font-semibold mb-8">Notes</h2>
      <p>coming soon...</p>
    </div>
  );
} 