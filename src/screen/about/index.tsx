import { BannerSlider } from "./banner"
import Heading from "./heading"
import HeadingTwo from "./heading2"

import Description from "./description"
import Gallery from "./gallery"
import Slider from "./slider"

export function AboutMain() {
  return (
    <div className="min-h-screen bg-white">
      <BannerSlider />
      <Description />
      <Slider />
      <Heading />
      <Gallery />
      <HeadingTwo />

    </div>
  )
}
