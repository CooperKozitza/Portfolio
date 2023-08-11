import Navbar from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

const helvetica = localFont({
  src: [{
    path: '../fonts/helveticaneue.woff'
  }],
  variable: '--font-helvetica',
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-roboto',
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
    <html lang="en" className={`${roboto.variable} ${helvetica.variable}`}>
      <body className="text-white bg-neutral-800">
        <Navbar />
        <div className="pt-20 font-sans px-4 ">
          {children}
        </div>
      </body>
    </html>
  )
}
