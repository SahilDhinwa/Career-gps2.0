import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar' // Import our new smart component

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
        
        {/* Inject the smart, auth-aware navigation bar here */}
        <Navbar />

        <main className="min-h-screen bg-background">
          {children}
        </main>
        
      </body>
    </html>
  )
}
