import Image from "next/image"
import Banner3 from '@/public/services/banner.png'
import Link from "next/link"


export function BannerSlider() {


  return (
    <section id="hero" className="w-full md:pb-0">
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-1 items-center relative">
          <Image
            src={Banner3}
            alt="terms conditions Banner"
            width={1200}
            height={400}
            className="w-full h-[700px] object-cover md:block hidden"
          />
          <Image
            src={Banner3}
            alt="terms conditions Banner Mobile"
            width={600}
            height={400}
            className="w-full h-[70vh] object-cover md:hidden block"
          />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-6 text-center">

          <h1 className="text-white font-serif leading-[1.3] tracking-widest font-bold text-2xl md:text-5xl">
          Full‑service interior design, <br />
          thoughtfully delivered from concept to completion.
          </h1>
            <p className="text-white/90 font-medium text-[14px] md:text-[19px] tracking-widest mt-4 leading-[1.5] max-w-7xl ">At Meher Sra Designs, form and function meet quiet luxury. We plan, curate, source, and install—so your home is cohesive, effortless, and entirely you.</p>
          <Link href="/contact" className="btn-sophie md:text-lg mt-12 text-center flex rounded-none md:px-12 px-6 mx-auto md:mx-0 py-3 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
            Take A Look
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}
