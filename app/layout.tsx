import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Career GPS',
  description: 'Your Roadmap to a Better Future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-primary shadow-md px-6 md:px-10 py-4 flex justify-between items-center">
          
          {/* Cream Text explicitly hardcoded for visibility */}
          <Link href="/" className="text-xs md:text-sm text-[#FBFBF9] hover:text-white transition-colors font-medium tracking-wide">
            by Employability Index
          </Link>
          
          {/* Functional Login and Sign Up buttons */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              href="/login" 
              className="text-white hover:text-success font-medium text-sm md:text-base transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/login" 
              className="bg-[#FBFBF9] text-primary px-5 py-2 text-sm md:text-base font-bold hover:bg-gray-200 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
          
        </header>

        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}
