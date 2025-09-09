'use client'
import proj1 from "@/public/homepage/project/dubai.png"
import proj2 from "@/public/homepage/project/law.png"
import proj3 from "@/public/homepage/project/luxury.png"
import proj4 from "@/public/homepage/project/panjim.png"
import proj5 from "@/public/homepage/project/legal.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Projects() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const snapList = api.scrollSnapList()

    const applyScale = () => {
      const progress = api.scrollProgress()
      type EmblaWithRoot = CarouselApi & { rootNode?: () => HTMLElement }
      const apiWithRoot = api as unknown as EmblaWithRoot
      const root = apiWithRoot.rootNode ? apiWithRoot.rootNode() : null
      const allSlides: HTMLElement[] = root
        ? Array.from(root.querySelectorAll('[data-slot="carousel-item"]'))
        : (api.slideNodes() as unknown as HTMLElement[])

      const totalSnaps = snapList.length
      allSlides.forEach((slide, idx) => {
        const snap = snapList[idx % totalSnaps]
        // Handle loop wrapping for better scaling
        const diffs = [
          Math.abs(snap - progress),
          Math.abs(snap - (progress - 1)),
          Math.abs(snap - (progress + 1)),
        ]
        const diff = Math.min(...diffs)
        const scale = Math.max(0.8, 1 - diff * 0.4)
        slide.style.transform = `scale(${scale.toFixed(3)})`
        slide.style.transition = "transform 300ms ease-out"
        slide.style.willChange = "transform"
      })
    }

    applyScale()
    api.on("scroll", applyScale)
    api.on("reInit", applyScale)

    return () => {
      api.off("scroll", applyScale)
      api.off("reInit", applyScale)
    }
  }, [api])
  const projects = [
    {
      title: "Holiday Home",
      location: "Marina, Dubai",
      image: proj1,
      link: "/holiday-home-marina"
    },
    {
      title: "Law Office",
      location: "Golf Links, New Delhi",
      image: proj2,
      link: "/law-office"
    },
    {
      title: "Luxury Apartment",
      location: "Marina, Dubai",
      image:  proj3,
      link: "/luxury-apartment"
    },
    {
      title: "Holiday Home",
      location: "Panjim, Goa",
      image:  proj4,
      link: "/holiday-home-panaji"
    },
    {
      title: "Legal chamber ",
      location: "Golf Links, New Delhi",
      image:  proj5 ,
      link: "/legal-chamber"
    },
    {
      title: "Holiday Home",
      location: "Marina, Dubai",
      image: proj1,
      link: "/holiday-home-marina"
    },
    {
      title: "Law Office",
      location: "Golf Links, New Delhi",
      image: proj2,
      link: "/law-office"
    },
    {
      title: "Luxury Apartment",
      location: "Marina, Dubai",
      image:  proj3,
      link: "/luxury-apartment"
    },
    {
      title: "Holiday Home",
      location: "Panjim, Goa",
      image:  proj4,
      link: "/holiday-home-panaji"
    },
    {
      title: "Legal chamber ",
      location: "Golf Links, New Delhi",
      image:  proj5 ,
      link: "/legal-chamber"
    },
    {
      title: "Holiday Home",
      location: "Marina, Dubai",
      image: proj1,
      link: "/holiday-home-marina"
    },
    {
      title: "Law Office",
      location: "Golf Links, New Delhi",
      image: proj2,
      link: "/law-office"
    },
    {
      title: "Luxury Apartment",
      location: "Marina, Dubai",
      image:  proj3,
      link: "/luxury-apartment"
    },
    {
      title: "Holiday Home",
      location: "Panjim, Goa",
      image:  proj4,
      link: "/holiday-home-panaji"
    },
    {
      title: "Legal chamber ",
      location: "Golf Links, New Delhi",
      image:  proj5 ,
      link: "/legal-chamber"
    },
    {
      title: "Holiday Home",
      location: "Marina, Dubai",
      image: proj1,
      link: "/holiday-home-marina"
    },
    {
      title: "Law Office",
      location: "Golf Links, New Delhi",
      image: proj2,
      link: "/law-office"
    },
    {
      title: "Luxury Apartment",
      location: "Marina, Dubai",
      image:  proj3,
      link: "/luxury-apartment"
    },
    {
      title: "Holiday Home",
      location: "Panjim, Goa",
      image:  proj4,
      link: "/holiday-home-panaji"
    },
    {
      title: "Legal chamber ",
      location: "Golf Links, New Delhi",
      image:  proj5 ,
      link: "/legal-chamber"
    },
  ]

  return (
    <section id="portfolio" className="w-full md:px-0 px-6 md:py-16 py-10 bg-white">
      <div className="smax-w-7xl mx-auto">
        <div className="flex items-center justify-center md:mb-12 mb-6">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-black tracking-widest  text-center">LATEST PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
        <Carousel className="w-full" setApi={setApi} opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: false
        }} plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
              }),
            ]}>
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
                        <CarouselItem key={index} className={"pl-4 basis-[100%] sm:basis-[80%] md:basis-[60%] lg:basis-[50%] flex-shrink-0 transition-transform duration-300"}>
            <div className="group cursor-pointer ">
              <Link href={project.link} className="" aria-label={`View details of ${project.title}`}>
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full md:h-[500px] h-[300px] object-cover rounded-4xl transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-black mb-1 uppercase">{project.title}</h3>
                <p className="text-black text-lg uppercase">{project.location}</p>
              </div>
              </Link>
            </div>
            </CarouselItem>
          ))}
          {/* Duplicate first slide for seamless loop */}
          <CarouselItem className={"pl-4 basis-[100%] sm:basis-[80%] md:basis-[60%] lg:basis-[50%] flex-shrink-0 transition-transform duration-300"}>
            <div className="group cursor-pointer ">
              <Link href={projects[0].link} className="" aria-label={`View details of ${projects[0].title}`}>
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full md:h-[500px] h-[300px] object-cover rounded-4xl transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-normal text-black mb-1 uppercase">{projects[0].title}</h3>
                <p className="text-black text-lg uppercase">{projects[0].location}</p>
              </div>
              </Link>
            </div>
            </CarouselItem>
          </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
