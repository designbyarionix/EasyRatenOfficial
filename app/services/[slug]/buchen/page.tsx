import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingForm } from "@/components/booking-form"
import { services, getService, getBookingConfig } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: "Buchen – EasyRaten" }
  return {
    title: `${service.title} buchen – EasyRaten`,
    description: `Konfigurieren Sie Ihren ${service.title} und berechnen Sie Ihren Preis.`,
  }
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  const config = getBookingConfig(slug)
  if (!service || !config) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="Services" />
      <BookingForm service={service} config={config} />
      <SiteFooter />
    </main>
  )
}
