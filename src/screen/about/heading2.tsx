import Link from 'next/link'
import React from 'react'


const Heading = () => {

  return (
    <section className="w-full bg-white py-12 max-w-7xl mx-auto">
        <div className='text-black text-center mb-12 px-6 space-y-3 max-w-4xl mx-auto'>
          <h5 className='h4 text-[36px] font-bold font-serif'>Ready to Begin Your Project?</h5>
          <p className='text-[20px] tracking-wider'>Let&#39;s talk about timelines, scope and your vision— <br/>
          then we&#39;ll handle the rest.</p>
          <Link href="/#contactUs" className="btn-sophie md:text-[14px] mt-5 text-center inline-flex rounded-none md:px-12 px-6 mx-auto md:mx-0 py-4 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
          DISCUSS MY PROJECT
          </Link>
        </div>


  </section>
  )
}

export default Heading
