import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Icon1 from '@/public/services/a1.png'
import Icon2 from '@/public/services/a2.png'
import Icon3 from '@/public/services/a3.png'
import Icon4 from '@/public/services/a4.png'

type CardItem = {
  title: string
  description: string
  icon: StaticImageData
  count?: string
  list?: string[]
}

const Cards = () => {

  const cards: CardItem[] = [
    {
      count: '01',
      title: "Interior Architecture & Design ",
      description: "Complete space planning and tailored interior solutions that balance form and function, creating cohesive environments around your lifestyle and needs.",
      icon: Icon1,
      list: [
        "Spatial layouts & interior architecture detailing",
        "Lighting & ceiling plans",
        "Concept development to technical drawings",
        "Design management & site coordination",
      ]
    },
    {
      count: '02',
      title: "FF&E Design",
      description: "Bespoke furniture, finishes, and accessories curated to reflect your aesthetic—adding depth, character, and timeless elegance to every space.",
      icon: Icon2,
      list: [
        "Custom furniture & upholstery design",
        "Fabrics, finishes & material palettes",
        "Artwork, lighting & décor curation",
        "Styling & final accessorising",
      ]
    },
    {
      count: '03',
      title: "Procurement",
      description: "End‑to‑end sourcing of premium materials and furnishings from trusted global partners—managed with precision for quality, timeliness, and design alignment.",
      icon: Icon3,
      list: [
        "Vendor liaison & negotiations",
        "Order placement, tracking & QC",
        "Global sourcing & sample management",
        "Logistics & delivery coordination",
      ]
    },
    {
      count: '04',
      title: "Styling & Installation",
      description: "This is where your vision comes to life. From the largest structural element to the smallest accessory, our team oversees every step to ensure each piece is thoughtfully placed, styled, and finished with precision.",
      icon: Icon4,
      list: [
        "On-site coordination",
        "Furniture & fixture installation",
        "Final styling & accessorizing",
        "Smooth handover of a fully, functional space",
      ]
    },
  ]

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {cards.map((process) => (
          <div key={process.title} className="md:mt-12 bg-[#EFE3DB] rounded-none relative">
            <Image
              src={process.icon}
              alt={process.title}
              width={80}
              height={80}
              className="w-full md:h-[400px] object-cover mb-10"
            />
            <p className='text-black text-[23px] relative mb-6 md:px-8 px-5 after:w-20 after:bg-black after:h-[1px] after:block after:right-0 after:left-[76px] after:top-5 after:absolute'>{process.count}</p>
            <h3 className="text-2xl md:text-[28px] font-serif font-semibold text-black leading-[1.3] tracking-wider md:px-8 px-5">{process.title}</h3>
            <p className="text-[17px] text-black mt-2 font-light leading-[1.8] tracking-wider md:px-8 px-5">{process.description}</p>

            {process.list && (
              <ul className="list-disc list-inside mt-8 mb-10 md:px-8 px-5">
                {process.list.map((item, index) => (
                  <li key={index} className="md:text-[18px] text-black leading-[1.8] tracking-wider">{item}</li>
                ))}
              </ul>
            )}
          </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Cards
