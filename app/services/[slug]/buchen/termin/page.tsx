import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TerminForm } from "@/components/termin-form"
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
  if (!service) return { title: "Termin wählen – EasyRaten" }
  return {
    title: `${service.title} buchen – Termin wählen – EasyRaten`,
    description: `Wählen Sie ein verfügbares Datum und eine Uhrzeit für Ihren ${service.title}.`,
  }
}

export default async function TerminPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ monthly?: string; months?: string; total?: string }>
}) {
  const { slug } = await params
  const { monthly, months, total } = await searchParams
  const service = getService(slug)
  const config = getBookingConfig(slug)
  if (!service || !config) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="Services" />
      <TerminForm
        service={service}
        config={config}
        monthly={monthly ? Number(monthly) : config.basePrice}
        months={months ? Number(months) : 3}
        total={total ? Number(total) : config.basePrice * 3}
      />
      <SiteFooter />
    </main>
  )
}
