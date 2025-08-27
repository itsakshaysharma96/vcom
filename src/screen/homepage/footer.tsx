import Logo from "@/public/logo.png"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full px-0 bg-background text-black">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-start justify-between gap-12 py-8 px-6 md:px-0">
          <div className="">
            <Image src={Logo} alt="Meher Sra Designs Logo" width={150} height={50} className="" />
          </div>

          <div className="grid grid-cols-2 gap-8 text-lg">
            <div className="space-y-2">
              <a href="#about" className="block hover:underline">
                ABOUT
              </a>
              <a href="#services" className="block hover:underline">
                OUR SERVICES
              </a>
              <a href="#portfolio" className="block hover:underline">
                PORTFOLIO
              </a>
              <a href="#" className="block hover:underline">
                PRIVACY POLICY
              </a>
            </div>
            <div className="space-y-2">
              <a href="#bts" className="block hover:underline">
                #BTS
              </a>
              <a href="#contact" className="block hover:underline">
                CONTACT US
              </a>
              <a href="#" className="block hover:underline">
                TERMS & CONDITIONS
              </a>
            </div>
          </div>

          <div className=" space-x-4 md:mt-0 mt-12">
            <div className="flex space-x-4 ">
              <div className="w-6 h-6 bg-primary-foreground rounded">
              <Instagram/>
            </div>
            <div className="w-6 h-6 bg-primary-foreground rounded">
              <Linkedin />
            </div>
            </div>
                              <p className="pt-4">INFO@MEHERSRADESIGNS.COM</p>

          </div>

          <p className="pt-4">COPYRIGHT &copy; MEHER SRA DESIGNS 2025</p>


        </div>


      </div>

    </footer>
  )
}
