"use client"
import Image from "next/image"
import React, { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export type ProjectSlide = {
  title: string
  image: { src: string; alt?: string }
  buttonText?: string
  buttonLink?: string
}

export type ProjectSliderBlock = {
  type: "project-slider"
  title?: string
  slides: ProjectSlide[]
}

type Props = {
  block: ProjectSliderBlock
}

const ProjectSlider: React.FC<Props> = ({ block }) => {
  const { slides } = block
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, slides.length - visibleCount)
    const next = Math.max(0, Math.min(index, maxIndex))
    setCurrentIndex(next)
  }

  const nextSlide = useCallback(() => {
    const maxIndex = Math.max(0, slides.length - visibleCount)
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1))
  }, [slides.length, visibleCount])

  const prevSlide = useCallback(() => {
    const maxIndex = Math.max(0, slides.length - visibleCount)
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1))
  }, [slides.length, visibleCount])

  // Determine visible items based on breakpoint (1 on mobile, 3 on md+)
  useEffect(() => {
    const compute = () => {
      if (typeof window === "undefined") return
      const isMdUp = window.matchMedia("(min-width: 768px)").matches
      setVisibleCount(isMdUp ? 3 : 1)
    }
    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [])

  // Autoplay
  useEffect(() => {
    const id = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(id)
  }, [visibleCount, nextSlide])

  return (
    <section className="w-full md:px-0 px-6 md:py-32 py-16 bg-gray-50">
      <div className=" mx-auto">
        <div className="relative overflow-hidden">
          {/* Slide wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="basis-full md:basis-1/3 flex-shrink-0 px-2"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt || slide.title}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-[25px] md:text-[32px] font-serif font-medium mb-3">
                        {slide.title}
                      </h3>
                      {slide.buttonText && (
                        <Button
                          asChild
                          variant="outline"
                          className="text-[13px] mt-4 text-center flex rounded-none md:px-4 tracking-wider py-4 bg-primary text-primary-foreground hover:bg-primary/90
               before:w-[1rem] before:border-[.5px] before:border-primary-foreground
               after:w-[1rem] after:border-[.5px] after:border-primary-foreground uppercase"
                        >
                          <a href={slide.buttonLink || "#"}>{slide.buttonText}</a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            aria-label="Next project"
          >
            ›
          </button>

          {/* Dots indicator */}
          {/* <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: slides.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default ProjectSlider
