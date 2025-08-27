import { Button } from "@/components/ui/button"
import UdcImage from "@/public/homepage/udc.png"
import Image from "next/image"

export function UdcSection() {
  return (
    <section id="about" className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 items-center relative">
          <Image src={UdcImage} alt="About Meher Sra Designs" className="w-full h-[600px] rounded-2xl" />
          <div className="absolute rounded-2xl inset-0 bg-black/20 flex flex-col items-center justify-center px-6">
            <h4 className="text-white font-serif leading-[1.6] tracking-widest font-semibold text-center text-2xl md:text-5xl">Meher Sra Designs x UDC Homes</h4>
            <p className="text-white font-medium md:text-3xl text-base tracking-wider text-center">All india Design 2025</p>
          <Button variant="outline" className="text-lg mt-24 text-center flex rounded-none px-12 py-6 bg-primary tracking-wider text-primary-foreground hover:bg-primary/90
               before:w-[2rem] before:border-[.5px] before:border-primary-foreground
               after:w-[2rem] after:border-[.5px] after:border-primary-foreground">
             VIEW THE SHOWCASE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}