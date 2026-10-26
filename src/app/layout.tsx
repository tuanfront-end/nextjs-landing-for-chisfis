import { type Metadata, type Viewport } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import { siteDescription, siteTitle, siteUrl } from '@/constant'
import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Chisfis',
    default: siteTitle,
  },
  description: siteDescription,
  applicationName: 'Chisfis',
  keywords: [
    'booking template',
    'travel booking template',
    'Next.js template',
    'HTML template',
    'Tailwind CSS template',
    'hotel booking',
    'car rental',
    'real estate',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Chisfis',
    title: siteTitle,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
