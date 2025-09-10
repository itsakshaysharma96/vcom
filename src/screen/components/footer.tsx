import Logo from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import instagramImg from "@/public/icons/instagram.png"
import linkedinImg from "@/public/icons/linkedin.png"


export function Footer() {
  return (
    <footer className="w-full px-0 bg-background text-black">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex items-start justify-between gap-12 py-6 px-6 md:px-0">
          <div className="mt-3 mb-8 md:mb-0">
            <Image src={Logo} alt="Meher Sra Designs Logo" width={150} height={50} className="" />
          </div>

          <div className="grid grid-cols-2 gap-8 text-[14px]">
            <div className="space-y-3">
              <Link href="/about-us" className="block hover:underline">
                ABOUT
              </Link>
              <a href="#services" className="block hover:underline">
                OUR SERVICES
              </a>
              <Link href="/portfolio" className="block hover:underline">
                PORTFOLIO
              </Link>
              <Link href="/privacy-policy" className="block hover:underline">
                PRIVACY POLICY
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/#bts" className="block hover:underline">
                #BTS
              </Link>
              <Link href="/contact" className="block hover:underline">
                CONTACT US
              </Link>
              <Link href="/terms-conditions" className="block hover:underline">
                TERMS & CONDITIONS
              </Link>
              <Link href="/legal-policy" className="block hover:underline">
                LEGAL POLICY
              </Link>

            </div>
          </div>

          <div className=" space-x-4 md:mt-0 mt-12">
            <div className="flex space-x-4 ">
              <div className="w-6 h-6 bg-primary-foreground rounded">
              <Link href="https://www.instagram.com/mehersradesigns/" target="_blank">
                <Image src={instagramImg} alt="Instagram" width={24} height={24} className="object-contain" />
                </Link>
            </div>
            <div className="w-6 h-6 bg-primary-foreground rounded">
              <Link href="https://in.linkedin.com/in/meher-rohatgi-62b01b9b" target="_blank">
                <Image src={linkedinImg} alt="LinkedIn" width={24} height={24} className="object-contain" />
                </Link>
            </div>
            </div>
                              <p className="pt-4 text-[14px]">INFO@MEHERSRADESIGNS.COM</p>

          </div>

          <p className="pt-4 text-[14px]">COPYRIGHT &copy; MEHER SRA DESIGNS 2025</p>


        </div>


      </div>

    </footer>
  )
}
