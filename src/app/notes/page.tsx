import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes - Saeedreza Abbaspour',
  description: 'Long-form thoughts and writings',
};

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notes</h1>
          <p className="text-gray-600">Long-form thoughts and writings</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="max-w-none">
          {/* Placeholder content - you can replace this with your blog posts */}
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Welcome to Notes
            </h2>
            <p className="text-gray-600 mb-8">
              This is your space for long-form writing and deep thoughts.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 text-left">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Getting Started
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Add your blog posts here</li>
                <li>• Use markdown for rich formatting</li>
                <li>• Organize by categories or tags</li>
                <li>• Share your insights with the world</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Saeedreza Abbaspour
        </div>
      </footer>
    </div>
  );
}
