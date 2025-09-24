"use client"
import Image from "next/image"
import React from "react"

import Banner1 from "@/public/about/s1.png"
import Banner2 from "@/public/about/s2.png"
import Banner3 from "@/public/about/s3.png"
import Banner4 from "@/public/about/s4.png"
import Banner5 from "@/public/about/s5.png"
import Banner6 from "@/public/about/s6.png"

import MobileBanner1 from "@/public/banner/m1.png"
import MobileBanner2 from "@/public/banner/m2.png"
import MobileBanner3 from "@/public/banner/m3.png"
import MobileBanner4 from "@/public/banner/m4.png"
import MobileBanner5 from "@/public/banner/m5.png"

const Slider = () => {
  const slides = [
    { src: Banner1, alt: "Project 1", mobile: MobileBanner1 },
    { src: Banner2, alt: "Project 2", mobile: MobileBanner2 },
    { src: Banner3, alt: "Project 3", mobile: MobileBanner3 },
    { src: Banner4, alt: "Project 4", mobile: MobileBanner4 },
    { src: Banner5, alt: "Project 5", mobile: MobileBanner5 },
    { src: Banner6, alt: "Project 6", mobile: MobileBanner5 },

  ]

  return (
    <section className="w-full pb-16 md:pb-16">
      <div className="overflow-hidden">
        {/* Animated track */}
        <div className="flex animate-marquees items-center -ml-25">
          {[...slides, ...slides].map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[350px] px-4"
            >
              <div className="relative rounded-none overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={600}
                  height={400}
                  className="w-full h-[400px] md:h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
