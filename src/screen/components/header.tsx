"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Logo from "@/public/logo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-4 md:px-6 py-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Vcom Technologies Logo"
              width={120}
              height={70}
              className="object-contain w-auto h-12 md:h-16"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/what-we-do"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              What we do
            </Link>
            {/* <Link
              href="/industries"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/our-approach"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Our approach
            </Link>
            <Link
              href="/who-we-are"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Who we are
            </Link> */}
            <Link
              href="/our-partners"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Our partners
            </Link>
            <Link
              href="/insights"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Insights
            </Link>
            <Link
              href="/career"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Career
            </Link>
            <Link
              href="/contact-us"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/support"
              className="text-[18px] font-medium text-black hover:text-[#6bebb3] transition-colors"
            >
              Support Us
            </Link>
          </nav>

          {/* Search Icon & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded-md border border-gray-200 hover:bg-gray-50 active:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/what-we-do"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                What we do
              </Link>
              <Link
                href="/industries"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/our-approach"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Our approach
              </Link>
              <Link
                href="/who-we-are"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Who we are
              </Link>
              <Link
                href="/our-partners"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Our partners
              </Link>
              <Link
                href="/insights"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Insights
              </Link>
              <Link
                href="/career"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Career
              </Link>
              <Link
                href="/contact-us"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/support"
                className="block px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-[#6bebb3] transition-colors rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Support Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
