import { Analytics } from "@vercel/analytics/react";

// Unified layout for all pages
export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 flex flex-col">
      <main className="flex-1">
        {children}
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-500">
        © 2025 Saeedreza Abbaspour
      </footer>
      
      <Analytics />
    </div>
  );
}
