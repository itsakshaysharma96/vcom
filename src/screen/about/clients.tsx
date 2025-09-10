import Image from 'next/image'
import React from 'react'
import LivingRoom from '@/public/about/client.png'
import Arrow from '@/public/about/arrow.png'

const Clients = () => {

  return (
    <section className="w-full bg-white py-12 max-w-7xl mx-auto">
        <div className='text-black text-center mb-12 px-6 space-y-4 max-w-4xl mx-auto'>
          <h5 className='h4 text-[32px] font-bold font-serif'>DESIGNING EXPERIENCES, NOT JUST SPACES</h5>
          <p>We create refined environments that reflect individuality and purpose. From private residences to corporate offices and boutique hotels, every project blends form, function, and timeless elegance. Personalization, sustainability, and attention to detail guide our work.</p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4">

{/* Top Middle Text */}
<div className="flex flex-col justify-center text-white md:py-6 py-12 px-12 bg-[#967A65]">
<p className=" text-xl mb-3 leading-relaxed">
Lorem Ipsum  </p>
  <h3 className=" text-4xl md:text-5xl font-semibold font-serif mb-3">
  Clients Stories
  </h3>


<div className='space-y-4 text-[18px] leading-relaxed gap-12 md:gap-3 grid grid-cols-1 md:grid-cols-2 mt-12 mb-12 md:mt-24 md:mb-8'>
<p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
</div>



  <div className='flex items-center justify-between mt-6 md:w-[60%] md:ml-auto'>
  <div>
  <h3 className="text-2xl font-semibold font-serif ">
  Meher Sra Designs
  </h3>
  <p className=" text-[18px] mb-3 leading-relaxed">
Lorem Ipsum  </p>
  </div>

<Image
                    src={Arrow}
                    alt="arrow"
                    width={30}
                    height={30}
                    className="object-cover"
                  />
  </div>

</div>


              <div className="col-span-1">
                <Image
                    src={LivingRoom}
                    alt="Living room"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
              </div>

          </div>

  </section>
  )
}

export default Clients
