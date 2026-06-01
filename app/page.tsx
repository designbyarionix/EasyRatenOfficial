import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { WhyEasyRaten } from "@/components/why-easyraten"
import { Testimonials } from "@/components/testimonials"
import { Security } from "@/components/security"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyEasyRaten />
        <Testimonials />
        <Security />
      </main>
      <SiteFooter />
    </div>
  )
}
