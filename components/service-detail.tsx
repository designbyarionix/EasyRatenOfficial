"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Wrench,
  Zap,
  Truck,
  Home,
  Monitor,
  SprayCan,
  Droplet,
  Star,
  Tag,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service, Testimonial } from "@/lib/services-data"

const categoryIcons: Record<string, typeof Wrench> = {
  Handwerk: Wrench,
  Elektrik: Zap,
  Umzug: Truck,
  "Haus & Garten": Home,
  "IT & Technik": Monitor,
  Reinigung: SprayCan,
  Klempner: Droplet,
}

const tabs = ["Übersicht", "Bewertungen", "Galerie"]

function Stars({ className = "size-5" }: { className?: string }) {
  return (
    <div className="flex items-center">
      {[0, 1, 2, 3].map((i) => (
        <Star key={i} className={`${className} fill-brand text-brand`} />
      ))}
      <span className={`relative ${className}`}>
        <Star className={`absolute ${className} text-brand`} />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className={`${className} fill-brand text-brand`} />
        </span>
      </span>
    </div>
  )
}

export function ServiceDetail({
  service,
  testimonials,
}: {
  service: Service
  testimonials: Testimonial[]
}) {
  const [tab, setTab] = useState("Übersicht")
  const [term, setTerm] = useState("3 Monate")
  const [active, setActive] = useState(0)

  const CategoryIcon = categoryIcons[service.category] ?? Wrench
  const t = testimonials[active]

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-foreground">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Subject image */}
          <div className="relative h-56 sm:h-72 md:h-[420px]">
            <Image
              src={service.img || "/placeholder.svg"}
              alt={service.title}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent md:bg-gradient-to-r" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center gap-5 px-6 pb-8 md:px-4 md:py-10 lg:pr-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-brand/60 px-4 py-2 text-sm font-bold text-brand">
              <CategoryIcon className="size-4" />
              {service.category}
            </span>
            <h1 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-background text-balance hyphens-auto sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Stars />
                <span className="text-lg font-bold text-background">4.8/5</span>
              </div>
              <span className="h-5 w-px bg-background/30" />
              <a
                href="#bewertungen"
                onClick={() => setTab("Bewertungen")}
                className="inline-flex items-center gap-1 text-base font-bold text-brand hover:underline"
              >
                {service.reviewCount} Bewertungen <ChevronRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative lg:grid lg:grid-cols-[1fr_400px] lg:gap-10">
        {/* Main content */}
        <div className="pt-8">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-border">
            {tabs.map((tb) => (
              <button
                key={tb}
                onClick={() => setTab(tb)}
                className={`relative -mb-px pb-3 text-lg font-semibold transition-colors ${
                  tab === tb ? "text-brand" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {tb}
                {tab === tb && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand" />
                )}
              </button>
            ))}
          </div>

          {tab === "Übersicht" && (
            <div className="pt-6">
              <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
                {service.description}
              </p>

              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-brand text-brand-foreground">
                    <CheckCircle2 className="size-5" />
                  </span>
                  <h2 className="font-display text-xl font-bold">Was ist inbegriffen</h2>
                </div>
                <ul className="mt-4 flex flex-col gap-3">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/85">
                      <CheckCircle2 className="size-5 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "Galerie" && (
            <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={service.img || "/placeholder.svg"}
                    alt={`${service.title} Galerie ${i + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Testimonials */}
          <div id="bewertungen" className="mt-12 scroll-mt-24">
            <h2 className="font-display text-2xl font-bold">Das sagen unsere Kunden</h2>
            <div className="mt-5 flex items-center gap-4 rounded-2xl bg-card p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-full">
                <Image src={t.avatar || "/placeholder.svg"} alt={t.name} fill className="object-cover" sizes="64px" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-pretty italic text-foreground/80">{`"${t.quote}"`}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <Stars className="size-4" />
                  <span className="font-bold">{t.name}</span>
                  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                    Verifizierte Bewertung <BadgeCheck className="size-4 text-brand" />
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <button
                  onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                  aria-label="Vorherige Bewertung"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
                  aria-label="Nächste Bewertung"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Booking card */}
        <div className="lg:-mt-24">
          <div className="sticky top-24 mt-8 rounded-3xl bg-card p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border/60 lg:mt-0">
            <div className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-3 text-foreground/70">
                <Tag className="size-5 text-brand" />
                Preis:
              </span>
              <span className="font-display text-xl font-extrabold text-brand">
                ab €{service.price}
                <span className="text-base font-bold">/Monat</span>
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="flex items-center gap-3 text-foreground/70">
                <Clock className="size-5 text-brand" />
                Verfügbar:
              </span>
              <span className="font-semibold text-foreground">{service.availability}</span>
            </div>

            <div className="my-5 h-px bg-border" />

            <h3 className="font-display text-lg font-bold">Laufzeit wählen</h3>
            <div className="relative mt-3">
              <select
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-base font-medium text-foreground outline-none transition-colors focus:border-brand"
              >
                <option>3 Monate</option>
                <option>6 Monate</option>
                <option>12 Monate</option>
                <option>24 Monate</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-foreground/50" />
            </div>

            <Button
              asChild
              className="mt-5 h-14 w-full rounded-xl bg-brand text-lg font-bold text-brand-foreground hover:bg-brand/90"
            >
              <Link href={`/services/${service.slug}/buchen?term=${encodeURIComponent(term)}`}>Buchen</Link>
            </Button>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-brand" />
              Sicher buchen – keine versteckten Kosten
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
