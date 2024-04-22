import Navbar from '@/components/nav/nav'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: 'Cooper Kozitza',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="text-black dark:text-white dark:bg-neutral-800">
        <Navbar />
        <div className="font-sans" style={{ paddingTop: '5.5rem' }}>
          {children}
        </div>
      </body>
    </html>
  )
}
