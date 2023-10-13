import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/provider/Providers'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e-commerce',
  description:
    'e-commerce: proyect created with Nextjs Redux Toolkit Tailwind CSS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
