import { Hero } from "./hero"
import { Services } from "./services"
import { CeoInsights } from "./ceo-insights"
import { IndustryExpertise } from "./industry-expertise"
import { SuccessStories } from "./success-stories"
import { Partners } from "./partners"
import { Insights } from "./insights"
import { TabSection } from "./tab-section"

export function Homepage() {
  return (
    <div className="min-h-screen bg-white pt-10">
      <Hero />
      <Services />
      <CeoInsights />
      <TabSection />

      <IndustryExpertise />
      <SuccessStories />
      <Partners />
      <Insights />
    </div>
  )
}
