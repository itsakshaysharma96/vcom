"use client"

import Image from "next/image"
import Logo from "@/public/logo-new.png"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full px-6 py-4 bg-background">
      <div className="max-w-7xl mx-auto relative">
        {/* Mobile header row */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            <Image src={Logo} alt="logo" width={20} height={20} className="inline-block md:w-[70px] w-[50px] object-contain" />
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-50 active:bg-gray-100"
          >
            {/* Hamburger icon */}
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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center justify-center space-x-8 gap-20">
          <Link href="/about-us" className="text-[16px] font-medium text-black hover:text-primary transition-colors">
            ABOUT
          </Link>
          <a href="#services" className="text-[16px] font-medium text-black hover:text-primary transition-colors">
            OUR SERVICES
          </a>

          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            <Image src={Logo} alt="logo" width={20} height={20} className="inline-block mx-auto md:w-[70px] w-[50px] object-contain" />
          </Link>
          <Link href="/portfolio" className="text-[16px] font-medium text-black hover:text-primary transition-colors">
            PORTFOLIO
          </Link>
          <Link href="/contact" className=" uppercase text-[16px] font-medium text-black hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile dropdown */}
        {isOpen ? (
          <div className="absolute right-0 top-full mt-3 w-56 rounded-md border border-gray-200 bg-white shadow-lg md:hidden z-50">
            <div className="py-2">
              <a
                href="#about"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </a>
              <Link
                href="/portfolio"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
