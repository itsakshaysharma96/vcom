import type React from "react"
import type { Metadata } from "next"
import { Vollkorn, Barlow } from "next/font/google"
import "./globals.css"

const vollkorn = Vollkorn({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vollkorn",
})

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-barlow",
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
    <html lang="en" className={`${vollkorn.variable} ${barlow.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
