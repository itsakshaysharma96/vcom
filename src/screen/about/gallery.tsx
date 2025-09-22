import Image from 'next/image'
import React from 'react'
import C1 from '@/public/about/c1.png'
import C2 from '@/public/about/c2.png'
import C3 from '@/public/about/c3.png'
import C4 from '@/public/about/c4.png'
import C5 from '@/public/about/c5.png'

const Gallery = () => {

  return (
    <section className="w-full bg-white pb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4">
              <div className="col-span-1">
                <Image
                    src={C1}
                    alt="Living room"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
              </div>
              <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto">

{/* Top Middle Text */}
<div className="flex flex-col justify-center text-black text-center px-6 py-9 bg-[#EFE3DB]">
  <h3 className="text-xl font-semibold mb-3">
  Bespoke Furniture &
  Artisanal Craftsmanship
  </h3>
  <p className=" text-sm leading-relaxed">
  Custom-designed furniture and unique handcrafted elements that transform interiors into exclusive, refined statements of style.
  </p>
</div>
<div className="">
  <Image
    src={C2}
    alt="Living room"
    width={600}
    height={400}
    className="w-full h-full object-cover"
  />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto">
<div className="">
                      <Image
                        src={C3}
                        alt="Living room"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Top Middle Text */}
                    <div className="flex flex-col justify-center text-black text-center px-6 py-9 bg-[#EFE3DB]">
                      <h3 className="text-xl font-semibold mb-3">
                      Tailored
                      Interior Solutions
                      </h3>
                      <p className=" text-sm leading-relaxed">
                      Every detail is thoughtfully designed to reflect personal taste, elevate functionality, and embody timeless elegance.
                      </p>
                    </div>

                </div>
              </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 px-4">

              <div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 mx-auto">
<div className="">
                      <Image
                        src={C4}
                        alt="Living room"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Top Middle Text */}
                    <div className="flex flex-col justify-center text-black text-center px-6 py-9 bg-[#EFE3DB]">
                      <h3 className="text-xl font-semibold mb-3">
                      Innovative Space Concepts
                      </h3>
                      <p className=" text-sm leading-relaxed">
                      Creative layouts and intelligent use of materials that inspire harmonious, functional environments—whether residential, commercial, or hospitality.                      </p>
                    </div>

                </div>
              </div>
              <div className="col-span-1">
                <Image
                    src={C5}
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

export default Gallery
