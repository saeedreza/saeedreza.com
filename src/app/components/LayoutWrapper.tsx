import { Analytics } from "@vercel/analytics/react";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="flex-1">
        {children}
      </main>

      <footer 
        className="py-4 px-6 sm:px-8 text-center"
        style={{ borderColor: 'var(--border)', color: 'var(--text-subtle)' }}
      >
        <p className="text-sm">
          © 2025 Saeedreza Abbaspour
        </p>
      </footer>
      
      <Analytics />
    </div>
  );
}
