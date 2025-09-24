"use client"

import { Button } from "@/components/ui/button"
import AboutImage from "@/public/homepage/about.png"
import Image from "next/image"
import { useInView } from "@/lib/useInView"
import Link from "next/link"

export function Hero() {
  const { ref, isInView } = useInView<HTMLImageElement>()

  return (
    <section id="about" className="w-full px-6 md:bg-gradient-to-r from-white to-background from-50% to-50% pt-16 md:mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end">
          <div>
            <div className="md:pr-16">
              <Image
                ref={ref}
                src={AboutImage}
                alt="About Meher Sra Designs"
                className={`hero-image w-full h-auto ${isInView ? 'in-view' : ''}`}
              />
            </div>
          </div>

          <div className="space-y-6 md:px-16 md:pb-16 md:mt-0 mt-8 text-center md:text-left">
            <div>
              {/* <p className=" text-xl lg:text-xl text-black mb-6">THE COMPANY</p> */}
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-black mb-6 tracking-wide lg:tracking-widest leading-[1.4]">
                ABOUT MEHER
                <br />
                and THE TEAM
              </h2>
            </div>

            <div className="space-y-4 text-black leading-relaxed text-[14px]">
              <p>
              Meher Sra Designs is a New Delhi - based interior design studio led by Meher Sra Rohatgi - an interior designer with a global perspective and a deeply personal approach.
              </p>
              <p>
                Rooted in craftsmanship, emotion, and collaboration, the studio creates refined, timeless interiors that
                are tailored to how people truly live.
              </p>
              <p>
                Whether it&apos;s a city apartment, a holiday home, or a boutique workspace, Meher&apos;s design language balances
                classical restraint with modern nuance always guided by the soul of the space and the story of its
                inhabitants.
              </p>
            </div>

            <Link href="/about-us" className="btn-sophie md:text-lg mt-12 text-center inline-flex rounded-none md:px-12 px-6 mx-auto md:mx-0 py-3 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
             READ MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}