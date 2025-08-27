import Image from "next/image"
import Logo from "@/public/logo-new.png"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full px-6 py-4 bg-background">
      <div className="max-w-7xl mx-auto">


        <nav className=" md:flex items-center justify-center space-x-8 gap-20">
          <a href="#about" className="hidden md:block text-[16px] font-medium text-black hover:text-primary transition-colors">
            ABOUT
          </a>
          <a href="#services" className="hidden md:block text-[16px] font-medium text-black hover:text-primary transition-colors">
            OUR SERVICES
          </a>

          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            <Image src={Logo} alt="logo" width={20} height={20} className="inline-block mx-auto md:w-[70px] w-[50px] object-contain" />
          </Link>
          <a href="#portfolio" className="hidden md:block text-[16px] font-medium text-black hover:text-primary transition-colors">
            PORTFOLIO
          </a>
          <a href="#bts" className="hidden md:block text-[16px] font-medium text-black hover:text-primary transition-colors">
            #BTS
          </a>

        </nav>

      </div>
    </header>
  )
}
