import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto">
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-6">404 - Page Not Found</h1>
          <p className="mb-4">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p>
            <Link 
              href="/" 
              className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              ← Back to home
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
