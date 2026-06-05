import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'

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
    // suppressHydrationWarning is REQUIRED for next-themes to work perfectly
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          {/* The Global Navigation Bar */}
          <Navbar />
          
          {/* The Dynamic Page Content */}
          <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
