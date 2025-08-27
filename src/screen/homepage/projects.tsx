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
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Holiday Home",
      location: "Marina, Dubai",
      image: proj1,
    },
    {
      title: "Law Office",
      location: "Golf Links, New Delhi",
      image: proj2,
    },
    {
      title: "Luxury Apartment",
      location: "Marina, Dubai",
      image:  proj3,
    },
    {
      title: "Holiday Home",
      location: "Panjim, Goa",
      image:  proj4,
    },
    {
      title: "Legal chamber ",
      location: "Golf Links, New Delhi",
      image:  proj5 ,
    },
  ]

  return (
    <section id="portfolio" className="w-full md:px-0 px-6 py-16 bg-white">
      <div className="smax-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <h2 className="font-serif text-2xl lg:text-4xl font-medium text-black tracking-widest  text-center">LATEST PROJECTS</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
        <Carousel className="w-full" plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}>
        <CarouselContent className="">
          {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex-shrink-0 pl-20 ">
            <div key={index} className="group cursor-pointer ">
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover rounded-4xl transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-2xl font-normal text-black mb-1 uppercase">{project.title}</h3>
                <p className="text-black text-lg uppercase">{project.location}</p>
              </div>
            </div>
            </CarouselItem>
          ))}
          </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
