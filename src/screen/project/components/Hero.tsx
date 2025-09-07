import Image from 'next/image'
import React from 'react'

type HeroAction = {
  label: string
  href: string
  variant?: 'default' | 'ghost' | 'outline' | 'link'
}

export type HeroBlock = {
  type: 'hero'
  eyebrow?: string
  title: string
  subtitle?: string
  image?: { src: string; alt?: string }
  actions?: HeroAction[]
}

type Props = {
  block: HeroBlock
}

const Hero: React.FC<Props> = ({ block }) => {
  const { title, subtitle, image } = block
  return (
    <section id="hero" className="w-full pb-16">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center relative">
          {image?.src ? (
            <Image
              src={image.src}
              alt={image.alt || title}
              width={1920}
              height={900}
              className="w-full h-[320px] md:h-[600px] object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">
            {/* {eyebrow ? (
              <p className="text-white/90 tracking-widest uppercase text-xs md:text-sm mb-2">{eyebrow}</p>
            ) : null} */}
            <h1 className="text-white font-serif leading-[1.3] tracking-wide font-semibold text-4xl md:text-7xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="text-white/90 font-medium md:text-2xl text-xl tracking-wide mt-2 max-w-3xl">{subtitle}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


