import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pratham Patel',
  description: 'Full Stack Developer Portfolio',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  themeColor: '#1F2937',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Pratham Patel</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1F2937" />
      </head>
      <body className={inter.className}>
        <AnimatedBackground />
        <CustomCursor />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}