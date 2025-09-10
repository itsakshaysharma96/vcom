import React from 'react'


const Description = () => {

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl md:text-[32px] font-serif font-bold text-black leading-[1.5]">
            Architecture. <br/>
Interior. <br/>
Design.
            </h2>
          </div>
          <div className='mt-6 md:mt-0'>
            <p className="text-[18px] text-black md:text-right leading-[2]">
            We craft timeless spaces that reflect individuality and purpose.<br/>
            Our expertise spans luxury residences, corporate offices, and boutique hospitality.<br/>
            Precision, innovation, and elegance define every project we deliver.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Description
