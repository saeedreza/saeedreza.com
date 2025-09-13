import type { Metadata, Viewport } from "next";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Saeedreza > Personal Website",
  description: "Welcome to my personal website. My name is Saeedreza and I am a Product Engineer & Internet Entrepreneur",
  metadataBase: new URL('https://saeedreza.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saeedreza > Personal Website",
    description: "Welcome to my personal website. My name is Saeedreza and I am a Product Engineer & Internet Entrepreneur",
    url: 'https://saeedreza.com',
    siteName: 'Saeedreza',
    type: 'website',
    images: [
      {
        url: '/img/saeedreza.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@IAmSaeedreza',
    title: 'Saeedreza > Personal Website',
    description: 'Welcome to my personal website. My name is Saeedreza and I am a Product Engineer & Internet Entrepreneur',
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
