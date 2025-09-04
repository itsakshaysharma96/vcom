"use client"
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'

export type SliderSlide = {
  title?: string
  description?: string
  image: { src: string; alt?: string }
}

export type SliderBlock = {
  type: 'slider'
  autoplay?: boolean
  intervalMs?: number
  slides: SliderSlide[]
}

type Props = {
  block: SliderBlock
}

const Slider: React.FC<Props> = ({ block }) => {
  const { slides, autoplay = true, intervalMs = 3500 } = block
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = slides.length

  useEffect(() => {
    if (!autoplay || total <= 1) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % total)
    }, intervalMs)
    return () => clearInterval(id)
  }, [autoplay, intervalMs, total])

  const goTo = (index: number) => setCurrentIndex((index + total) % total)

  const current = useMemo(() => slides[currentIndex], [slides, currentIndex])

  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            key={currentIndex}
            src={current.image.src}
            alt={current.image.alt || current.title || 'Slide'}
            width={1920}
            height={900}
            className="w-full h-[420px] md:h-[520px] object-cover"
          />
          {(current.title || current.description) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-4 md:p-6 text-white">
                {current.title ? (
                  <h3 className="text-xl md:text-2xl font-semibold">{current.title}</h3>
                ) : null}
                {current.description ? (
                  <p className="text-white/90 text-sm md:text-base">{current.description}</p>
                ) : null}
              </div>
            </div>
          )}

          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              aria-label="Previous"
              onClick={() => goTo(currentIndex - 1)}
              className="bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={() => goTo(currentIndex + 1)}
              className="bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 grid place-items-center"
            >
              ›
            </button>
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white w-6' : 'bg-white/60 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider


