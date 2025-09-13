'use client';

import { usePathname } from 'next/navigation';
import { Analytics } from "@vercel/analytics/react";
import type { LayoutType } from '../../types/layout';

// Define which pages should use custom layout
const getLayoutType = (pathname: string): LayoutType => {
  // You can add more sophisticated logic here
  const customPages = ['/link', '/ai-workflow'];
  return customPages.includes(pathname) ? 'custom' : 'basic';
};

// Layout configurations
const LAYOUTS = {
  basic: ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-mono flex flex-col">
      <header className="py-8 px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-4">
        </nav>
      </header>

      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-600">
        © {new Date().getFullYear()} Saeedreza Abbaspour
      </footer>
    </div>
  ),
  custom: ({ children }: { children: React.ReactNode }) => <>{children}</>,
};

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const layoutType = getLayoutType(pathname);
  const LayoutComponent = LAYOUTS[layoutType];

  return (
    <>
      <LayoutComponent>{children}</LayoutComponent>
      <Analytics />
    </>
  );
}
