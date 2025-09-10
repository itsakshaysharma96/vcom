import { BannerSlider } from "./banner"
import Clients from "./clients"
import Description from "./description"
import Gallery from "./gallery"
import Slider from "./slider"

export function AboutMain() {
  return (
    <div className="min-h-screen bg-white">
      <BannerSlider />
      <Description />
      <Slider />
      <Gallery />
      <Clients />
    </div>
  )
}
