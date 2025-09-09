import { Button } from "@/components/ui/button"
import UdcImage from "@/public/homepage/udc.png"
import UdcImageMobile from "@/public/homepage/udc-mobile.png"

import Image from "next/image"
import Link from "next/link"

export function UdcSection() {
  return (
    <section id="about" className="w-full px-6 md:py-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center relative">
          <Image src={UdcImage} alt="About Meher Sra Designs" className="w-full h-[500px] rounded-2xl md:block hidden" />
          <Image src={UdcImageMobile} alt="About Meher Sra Designs" className="w-full object-cover rounded-2xl md:hidden block" />
          <div className="absolute rounded-2xl inset-0 bg-black/20 flex flex-col items-center justify-center px-6">
            <h4 className="text-white font-serif leading-[1.6] md:tracking-widest font-semibold text-center text-3xl md:text-5xl">Meher Sra Designs x UDC Homes</h4>
            <p className="text-white font-medium md:text-3xl text-base tracking-wider text-center">At India Design 2025</p>
          <Link href="/udc-homes">
            <Button variant="outline" className="btn-sophie md:text-lg mt-12 text-center flex rounded-none md:px-12 px-6 mx-auto md:mx-0 py-6 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90">
               VIEW THE SHOWCASE
              </Button>
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}