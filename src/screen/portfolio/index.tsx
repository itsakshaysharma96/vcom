import { BannerSlider } from "./banner"
import { Detail } from "./detail"

export function PortfolioMain() {
  return (
    <div className="min-h-screen bg-white">
      <BannerSlider />
      <Detail />
    </div>
  )
}
