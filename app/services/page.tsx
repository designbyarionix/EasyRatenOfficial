import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllServices } from "@/components/all-services"

export const metadata: Metadata = {
  title: "Alle Services – EasyRaten",
  description:
    "Entdecken Sie alle professionellen Dienstleistungen von EasyRaten und zahlen Sie bequem in monatlichen Raten.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="Services" />
      <AllServices />
      <SiteFooter />
    </main>
  )
}
