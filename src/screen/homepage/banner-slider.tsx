"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Banner1 from "@/public/banner/1.png"
import Banner2 from "@/public/banner/2.png"
import Banner3 from "@/public/banner/3.png"
import Banner4 from "@/public/banner/4.png"
import Banner5 from "@/public/banner/5.png"
import Image from "next/image"


const banners = [
  {
    id: 1,
    title: "Luxury Living Spaces",
    subtitle: "Crafting timeless interiors with modern elegance",
    image: Banner1,
    cta: "Explore Our Work",
  },
  {
    id: 2,
    title: "Boutique Workspaces",
    subtitle: "Designing productive environments that inspire creativity",
    image: Banner2,
    cta: "View Projects",
  },
  {
    id: 3,
    title: "Holiday Retreats",
    subtitle: "Creating serene spaces for rest and rejuvenation",
    image: Banner3,
    cta: "Discover More",
  },
  {
    id: 4,
    title: "Modern Kitchens",
    subtitle: "Innovative designs for culinary enthusiasts",
    image: Banner4,
    cta: "See Our Designs",
  },
  {
    id: 5,
    title: "Elegant Bathrooms",
    subtitle: "Transforming everyday spaces into luxurious retreats",
    image: Banner5,
    cta: "Explore Options",
  },
]

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button> */}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / banners.length) * 100}%`,
          }}
        />
      </div> */}
    </section>
  )
}
