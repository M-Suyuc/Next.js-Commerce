import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'
import { Providers } from '@/provider/Providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Suspense } from 'react'
import { FilterProvider } from '@/context/filters'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'e-commerce',
  description:
    'e-commerce: proyect created with Nextjs Redux Toolkit Tailwind CSS'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <FilterProvider>
            <Suspense>{children}</Suspense>
          </FilterProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
