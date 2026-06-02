import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ZahlungForm } from "@/components/zahlung-form"
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
  if (!service) return { title: "Zahlungsmethode – EasyRaten" }
  return {
    title: `${service.title} – Zahlungsmethode bestätigen – EasyRaten`,
    description: `Wählen Sie Ihre Zahlungsmethode für ${service.title}.`,
  }
}

export default async function ZahlungPage({
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

  const monthsNum = months ? Number(months) : 3
  const totalNum = total ? Number(total) : config.basePrice * monthsNum
  const monthlyNum = monthly ? Number(monthly) : totalNum / monthsNum

  return (
    <main className="min-h-screen bg-background">
      <ZahlungForm service={service} monthly={monthlyNum} months={monthsNum} total={totalNum} />
    </main>
  )
}
