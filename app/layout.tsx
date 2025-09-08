import type React from "react"
import type { Metadata } from "next"
import { Vollkorn, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/src/screen/components/header"
import { Footer } from "@/src/screen/components/footer"

const vollkorn = Vollkorn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vollkorn",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Meher Sra Designs - Interior Design Studio",
  description: "New Delhi-based interior design studio creating refined, timeless interiors",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${vollkorn.variable} ${inter.variable} antialiased`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
