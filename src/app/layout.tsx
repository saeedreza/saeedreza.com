import type { Metadata, Viewport } from "next";
import { Lora, Source_Serif_4 } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: "Saeedreza Abbaspour - Building software for non-technical founders",
    template: "%s | Saeedreza Abbaspour"
  },
  description: "I help non-technical founders build the first version of their products at Refact. Currently building Workform, an AI project manager for software teams.",
  keywords: ["Saeedreza Abbaspour", "Software Designer", "AI Engineer", "Product Development", "Workform", "Refact", "Startup", "Non-technical Founders", "MVP development"],
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
    title: "Saeedreza Abbaspour - Building software for non-technical founders",
    description: "I help non-technical founders build the first version of their products at Refact. Currently building Workform, an AI project manager for software teams.",
    images: [
      {
        url: '/img/saeedreza.png',
        width: 1200,
        height: 630,
        alt: 'Saeedreza Abbaspour - Building software for non-technical founders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@saeedreza',
    creator: '@saeedreza',
    title: 'Saeedreza Abbaspour - Software Designer & AI Engineer',
    description: 'I help non-technical founders build the first version of their products at Refact. Currently building Workform, an AI project manager for software teams.',
    images: ['/img/saeedreza.png'],
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
    <html lang="en" className={`${sourceSerif.variable} ${lora.variable}`}>
      <body className={sourceSerif.className} suppressHydrationWarning={true}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
