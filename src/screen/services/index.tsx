import { BannerSlider } from "./banner"
import Cards from "./cards"
import HeadingTwo from "./heading2"
import OurIconProcess from "./iconprocess"
import OurProcess from "./process"


export function ServicesMain() {
  return (
    <div className="min-h-screen bg-white">
      <BannerSlider />
      <Cards />
      <OurProcess />
      <OurIconProcess />
      <HeadingTwo />

    </div>
  )
}
