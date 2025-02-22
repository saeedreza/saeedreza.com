import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
        <p className="mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
} 