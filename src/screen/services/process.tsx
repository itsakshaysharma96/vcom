import React from 'react'


type ProcessItem = {
  title: string
  description: string
  count: string
}

const OurProcess = () => {

  const process: ProcessItem[] = [
    { title: "Discovery & Consultation", description: "We begin by understanding your lifestyle, requirements, and design aspirations, laying the foundation for a space that truly reflects you.", count: '01' },
    { title: "Concept & Design Development", description: "Ideas take shape through mood boards, layouts, and design concepts that capture both function and aesthetic.", count: '02' },
    { title: "Detailing & Approvals", description: "Concepts are refined into technical drawings and material selections, ensuring clarity before execution begins.", count: '03' },
    { title: "Procurement & Coordination", description: "Sourcing, logistics, and vendor management are handled with precision to align every element with the design vision.", count: '04' },
    { title: "Installation & Styling", description: "With careful oversight, every piece is placed, styled, and finished to bring the complete vision to life.", count: '05' },
  ]

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-[38px] font-serif font-bold tracking-wider text-black leading-[1.5]">
            Our Process
            </h2>
          </div>
          <div className='mt-6 md:mt-0'>
            <p className="md:text-[22px] text-black md:text-right leading-[1.8] tracking-wider">
            A clear, five‑step journey that keeps your project moving <br /> smoothly while preserving design integrity at every stage.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-8'>
          {process.map((process) => (
          <div key={process.count} className="md:mt-12 border border-[#967A65] rounded-xl p-5">
            <p className='text-black text-[23px] mb-6'>{process.count}</p>
            <h3 className="text-2xl md:text-[25px] font-serif font-semibold text-black leading-[1.3] tracking-wider">{process.title}</h3>
            <p className="text-[17px] text-black mt-6 leading-[1.8] tracking-wider">{process.description}</p>
          </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurProcess
