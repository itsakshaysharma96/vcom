import { Hero } from "./hero"
import { BannerSlider } from "./banner-slider"
import { Services } from "./services"
import { Projects } from "./projects"
import { Contact } from "./contact"
import { InstagramSection } from "./instagramSection"
import { UdcSection } from "./udc"

export function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      <BannerSlider />

      <Hero />
      <Services />
      <Projects />
      <UdcSection />
      <InstagramSection />
      <Contact />
    </div>
  )
}
