import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Career GPS | Global Scholarships & Roadmaps',
  description: 'Your step-by-step roadmap to a better future. Unlock fully funded global scholarships.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The Global Navigation Bar */}
        <Navbar />
        
        {/* The Dynamic Page Content */}
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}
