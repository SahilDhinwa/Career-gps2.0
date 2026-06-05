import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from '../components/ThemeProvider'

// 1. Configure the Heading Font (Syne)
const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

// 2. Configure the Body Font (DM Sans)
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

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
      {/* 3. Inject the font variables and apply the default body font */}
      <body className={`${syne.variable} ${dmSans.variable} font-body antialiased`}>
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
