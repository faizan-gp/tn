// app/layout.tsx

import type { Metadata } from 'next';
import { montserrat, poppins, inter, playfair } from './fonts'
import './globals.css';
import Header from '@/components/layout/Header';


// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://tandoorinook.com'),
  title: {
    default: 'Tandoori Nook',
    template: '%s | Tandoori Nook',
  },
  description: 'Authentic Halal Food in Webster, TX — shawarma, burgers, fries & more.',
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Tandoori Nook',
    url: 'https://tandoorinook.com',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#f5f0e4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}