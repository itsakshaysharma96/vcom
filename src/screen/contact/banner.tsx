import Image from "next/image"
import Banner5 from "@/public/banner/a5.png"
import Banner5Mobile from "@/public/banner/m3.png"


export function BannerSlider() {


  return (
    <section id="hero" className="w-full md:pb-10">
    <div className="mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-1 items-center relative">
          <Image
            src={Banner5}
            alt="Contact Banner"
            width={1200}
            height={400}
            className="w-full h-[400px] md:h-[400px] object-cover md:block hidden"
          />
          <Image
            src={Banner5Mobile}
            alt="Contact Banner Mobile"
            width={600}
            height={400}
            className="w-full h-[70vh] object-cover md:hidden block"
          />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-6 text-center">

          <h1 className="text-white font-serif leading-[1.3] tracking-wide font-semibold text-4xl md:text-7xl">
            Contact us
          </h1>
          {/* {subtitle ? (
            <p className="text-white/90 font-medium md:text-2xl text-xl tracking-wide mt-2 max-w-3xl">{subtitle}</p>
          ) : null} */}
        </div>
      </div>
    </div>
  </section>
  )
}
