import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceDetail } from "@/components/service-detail"
import { services, getService, testimonials } from "@/lib/services-data"

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
  if (!service) return { title: "Service – EasyRaten" }
  return {
    title: `${service.title} – EasyRaten`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="Services" />
      <ServiceDetail service={service} testimonials={testimonials} />
      <SiteFooter />
    </main>
  )
}
