import type { Metadata } from 'next'
import { Syne, DM_Sans, Kalam } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'
import { AuthProvider } from '../context/AuthContext'

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

// 3. Configure the Handwritten Font (Kalam - supports Hindi/Devanagari)
const kalam = Kalam({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'devanagari'],
  variable: '--font-kalam',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Veblen Good | Global Scholarships & Roadmaps',
  description: 'Your step-by-step roadmap to a better future. Unlock fully funded global scholarships.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} ${kalam.variable} font-body antialiased`}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
