import type { Metadata } from "next";
import { Syne, DM_Sans, Kalam } from 'next/font/google';
import './globals.css';

import AnalyticsTracker from '../components/AnalyticsTracker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeProvider } from '../components/ThemeProvider';
import { AuthProvider } from '../context/AuthContext';
import BatcaveBackground from '../components/BatcaveBackground';

import { Cinzel } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "ATREYA Med",
  description: "Clinical Ayurveda & BAMS Dissection Studio",
  verification: {
    // Paste the code from the Google "HTML Tag" option here
    google: "google5d6579aa2a41b08f.html", 
  },
};

// 1. Configure the Heading Font (Syne)
const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

// 2. Configure the Body Font (DM Sans)
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// 3. Configure the Handwritten Font (Kalam)
const kalam = Kalam({
  weight: ['300', '400', '700'],
  subsets: ['latin', 'devanagari'],
  variable: '--font-kalam',
  display: 'swap',
});

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
          themes={['light', 'dark', 'batman']}
        >
          <BatcaveBackground /> 
          
          <AuthProvider>
            <AnalyticsTracker />
            <Navbar />
            <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
              {children}
            </main>
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
