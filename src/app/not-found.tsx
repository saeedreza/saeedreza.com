import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4 text-stone-900">404 - Page Not Found</h1>
        <p className="text-lg text-stone-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition-colors"
        >
          ← Back to home
        </Link>
      </section>
    </div>
  );
}
