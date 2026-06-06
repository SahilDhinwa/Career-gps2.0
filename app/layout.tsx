import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'
import { AuthProvider } from '../context/AuthContext' // NEW: Import the Brain

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
          {/* NEW: Wrap the App in the AuthProvider */}
          <AuthProvider>
            {/* The Global Navigation Bar */}
            <Navbar />
            
            {/* The Dynamic Page Content */}
            <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
              {children}
            </main>
            {/* NEW: Place the Footer here so it renders at the bottom of the screen */}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
