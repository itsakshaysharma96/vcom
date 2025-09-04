"use client"
import Image from "next/image"
import React, { useState } from "react"
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= slides.length - 2 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? slides.length - 3 : prev - 1
    )
  }

  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Slide wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-2"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={slide.image.src}
                    alt={slide.image.alt || slide.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-lg md:text-xl font-semibold mb-3">
                        {slide.title}
                      </h3>
                      {slide.buttonText && (
                        <Button
                          asChild
                          variant="outline"
                          className="bg-transparent border-white text-white hover:bg-white hover:text-black"
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
          <div className="flex justify-center mt-6 space-x-2">
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSlider
