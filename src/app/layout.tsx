import { type Metadata } from 'next'
import { Google_Sans_Flex, Playfair_Display } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Ceepii',
    default: 'Ceepii - Travel Booking Next.js & Tailwind CSS template',
  },
  description:
    'Ceepii is a premium Next.js template for building modern booking platforms like Airbnb and Booking.com, combining high-end UI with a scalable frontend to help you launch faster.',
}

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  variable: '--font-sans',
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
        googleSansFlex.variable,
        'h-full scroll-smooth bg-white font-sans antialiased',
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
