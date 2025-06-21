import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Chisfis',
    default: 'Chisfis - Online booking Next.js & Tailwind CSS template',
  },
  description:
    'Chisfis | Online Booking Next.js template – A responsive Next.js template designed for online booking, listing, real estate, and booking systems for accommodations, tours, travel experiences, cruises, car rentals, and travel agencies. Chisfis is built with the latest Next.js 15 (app directory), TypeScript, and Tailwind CSS 4.',
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
        'dark h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body>{children}</body>
    </html>
  )
}
