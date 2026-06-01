import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Compass } from "lucide-react";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Career GPS | First Job India",
    description: "India's first structured career guidance platform for students.",
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
          return (
              <html lang="en">
                    <body className={`${syne.variable} ${dmSans.variable} font-body bg-background text-foreground min-h-screen flex flex-col`}>
                            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-surfaceBorder px-8 py-4 flex justify-between items-center">
                                      <Link href="/" className="flex items-center gap-2 text-primary font-heading font-bold text-xl tracking-tight">
                                                  <Compass className="w-6 h-6" />
                                                              <div>
                                                                            Career GPS <span className="text-sm font-body text-gray-500 font-normal ml-2">by Employability Index</span>
                                                                                        </div>
                                                                                                  </Link>
                                                                                                            <Link href="/login" className="text-sm font-bold border border-surfaceBorder px-4 py-2 hover:bg-surface transition-colors">
                                                                                                                        Login
                                                                                                                                  </Link>
                                                                                                                                          </header>
                                                                                                                                                  <main className="flex-grow">{children}</main>
                                                                                                                                                        </body>
                                                                                                                                                            </html>
                                                                                                                                                              );
                                                                                                                                                              }
                                                                                                                                                              
