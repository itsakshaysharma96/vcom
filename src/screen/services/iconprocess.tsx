import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Icon1 from '@/public/services/i1.png'
import Icon2 from '@/public/services/i2.png'
import Icon3 from '@/public/services/i3.png'
import Icon4 from '@/public/services/i4.png'

type ProcessItem = {
  title: string
  description: string
  icon: StaticImageData
}

const OurIconProcess = () => {

  const process: ProcessItem[] = [
    { title: "End-to-End Expertise ", description: "From architecture to accessories.", icon: Icon1 },
    { title: "Bespoke solutions", description: "Every detail is tailored to you.", icon: Icon2 },
    { title: "Trusted Network", description: "Access to the finest global suppliers.", icon: Icon3 },
    { title: "Seamless Execution", description: "Precision management at every stage.", icon: Icon4 },
  ]

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          {process.map((process) => (
          <div key={process.title} className="mt-12 bg-[#EFE3DB] rounded-xl pb-8 px-5 text-center relative">
            <Image
              src={process.icon}
              alt={process.title}
              width={80}
              height={80}
              className="absolute left-1/2 transform -translate-x-1/2 -mt-10"
            />
            <h3 className="text-2xl pt-18 md:text-[23px] font-serif font-semibold text-black leading-[1.3] tracking-wider">{process.title}</h3>
            <p className="text-[17px] text-black mt-4 leading-[1.8] tracking-wider">{process.description}</p>
          </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurIconProcess
