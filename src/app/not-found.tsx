import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-prose-wide mx-auto py-16 md:py-20 px-6 sm:px-8">
      <section className="mb-8">
        <h1 className="page-title mb-4">404</h1>
        <p className="lead mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link 
          href="/" 
          className="back-link"
        >
          <span className="back-arrow">←</span>
          <span>Back to home</span>
        </Link>
      </section>
    </div>
  );
}
