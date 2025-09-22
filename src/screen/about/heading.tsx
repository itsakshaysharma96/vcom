import React from 'react'
import SIgn from '@/public/about/sign.png'
import Image from 'next/image'

const Heading = () => {

  return (
    <section className="w-full bg-white pt-12 max-w-7xl mx-auto">
        <div className='text-black text-center mb-12 px-6 space-y-4 max-w-4xl mx-auto'>
          <h5 className='h4 text-[32px] font-bold font-serif'>DESIGNING EXPERIENCES, NOT JUST SPACES</h5>
          <p>We create refined environments that reflect individuality and purpose. From private residences to corporate offices and boutique hotels, every project blends form, function, and timeless elegance. Personalization, sustainability, and attention to detail guide our work.</p>
          <Image src={SIgn} alt="signature" className='mx-auto mt-6 w- h-auto'/>
        </div>


  </section>
  )
}

export default Heading
