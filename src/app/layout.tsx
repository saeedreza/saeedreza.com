import type { Metadata, Viewport } from "next";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Saeedreza Abbaspour - Product Engineer & AI Developer",
    template: "%s | Saeedreza Abbaspour"
  },
  description: "Software product designer and developer transitioning into AI engineering. Building Workform.ai and running Refact.io. Exploring the future of AI agents and team collaboration.",
  keywords: ["Saeedreza Abbaspour", "Product Engineer", "AI Developer", "Software Designer", "Workform", "Refact", "AI Engineering", "Product Development"],
  authors: [{ name: "Saeedreza Abbaspour", url: "https://saeedreza.com" }],
  creator: "Saeedreza Abbaspour",
  publisher: "Saeedreza Abbaspour",
  metadataBase: new URL('https://saeedreza.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saeedreza.com',
    siteName: 'Saeedreza Abbaspour',
    title: "Saeedreza Abbaspour - Product Engineer & AI Developer",
    description: "Software product designer and developer transitioning into AI engineering. Building Workform.ai and running Refact.io.",
    images: [
      {
        url: '/img/saeedreza.jpg',
        width: 1200,
        height: 630,
        alt: 'Saeedreza Abbaspour - Product Engineer & AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saeedreza',
    creator: '@saeedreza',
    title: 'Saeedreza Abbaspour - Product Engineer & AI Developer',
    description: 'Software product designer and developer transitioning into AI engineering. Building Workform.ai and running Refact.io.',
    images: ['/img/saeedreza.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
