"use client"

import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import proj1 from "@/public/homepage/project/dubai.png"
import proj2 from "@/public/homepage/project/law.png"
import proj3 from "@/public/homepage/project/luxury.png"
import proj4 from "@/public/homepage/project/panjim.png"
import proj5 from "@/public/homepage/project/legal.png"
import proj6 from "@/public/homepage/project/udc.png"


type PortfolioItem = {
  title: string
  location: string
  image: StaticImageData
  link: string
}

export function Detail() {
  const projects: PortfolioItem[] = [
    { title: "Holiday Home", location: "Marina, Dubai", image: proj1, link: "/holiday-home-marina" },
    { title: "Law Office", location: "Golf Links, New Delhi", image: proj2, link: "/law-office" },
    { title: "Luxury Apartment", location: "Marina, Dubai", image: proj3, link: "/luxury-apartment" },
    { title: "Holiday Home", location: "Panjim, Goa", image: proj4, link: "/holiday-home-panaji" },
    { title: "Legal chamber", location: "Golf Links, New Delhi", image: proj5, link: "/legal-chamber" },
    { title: "Meher Sra Designs × UDC Homes", location: "At India Design 2025", image: proj6, link: "/udc-homes" },
  ]

  return (
    <section id="portfolio" className="w-full px-6 md:py-32 py-16">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex items-center justify-center md:mb-12 mb-6">
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-black tracking-widest text-center">RECENT PROJECTS</h2>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16">
          {projects.map((project, idx) => (
            <Link key={idx} href={project.link} aria-label={`View details of ${project.title}`} className="group block">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={idx < 2}
                />

                {/* Hover overlay with border lines */}
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white tracking-[0.25em] text-xs md:text-sm uppercase relative px-6 py-3">
                    View Project
                    {/* Border lines */}
                    <span className="absolute left-0 top-0 h-px w-0 bg-white group-hover:w-full transition-[width] duration-300 ease-out" />
                    <span className="absolute right-0 bottom-0 h-px w-0 bg-white group-hover:w-full transition-[width] duration-300 ease-out" />
                    <span className="absolute left-0 top-0 w-px h-0 bg-white group-hover:h-full transition-[height] duration-300 ease-out" />
                    <span className="absolute right-0 bottom-0 w-px h-0 bg-white group-hover:h-full transition-[height] duration-300 ease-out" />
                  </span>
                </div>
              </div>
              <div className="mt-3 text-center">
                <h3 className="font-serif text-xl md:text-2xl font-normal text-black uppercase">{project.title}</h3>
                <p className="text-black/80 text-sm md:text-base uppercase">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
