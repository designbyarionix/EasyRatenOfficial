"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Home,
  Wrench,
  Monitor,
  SprayCan,
  Truck,
  Droplet,
  Zap,
  ChevronRight,
  Star,
  LayoutGrid,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { label: "Alle Services", icon: LayoutGrid },
  { label: "Haus & Garten", icon: Home },
  { label: "Handwerk", icon: Wrench },
  { label: "IT & Technik", icon: Monitor },
  { label: "Reinigung", icon: SprayCan },
  { label: "Umzug", icon: Truck },
  { label: "Klempner", icon: Droplet },
  { label: "Elektrik", icon: Zap },
]

const services = [
  { title: "Klempnerarbeiten", category: "Klempner", price: "35", img: "/images/svc-klempner.png" },
  { title: "Elektroinstallation", category: "Elektrik", price: "35", img: "/images/svc-elektrik.png" },
  { title: "Reifenwechsel", category: "Handwerk", price: "35", img: "/images/svc-reifen.png" },
  { title: "Umzug", category: "Umzug", price: "35", img: "/images/svc-umzug.png" },
  { title: "Küchenmontage", category: "Handwerk", price: "35", img: "/images/svc-kueche.png" },
  { title: "Badezimmerrenovierung", category: "Handwerk", price: "35", img: "/images/svc-bad.png" },
  { title: "Gartenpflege", category: "Haus & Garten", price: "35", img: "/images/svc-garten.png" },
  { title: "Malerarbeiten", category: "Haus & Garten", price: "35", img: "/images/svc-maler.png" },
  { title: "Reinigungsservice", category: "Reinigung", price: "35", img: "/images/svc-reinigung.png" },
  { title: "IT-Support", category: "IT & Technik", price: "35", img: "/images/svc-it.png" },
  { title: "Möbelaufbau", category: "Handwerk", price: "35", img: "/images/svc-moebel.png" },
  { title: "Hausgeräte Reparatur", category: "IT & Technik", price: "35", img: "/images/svc-geraete.png" },
]

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[0, 1, 2, 3].map((i) => (
          <Star key={i} className="size-4 fill-brand text-brand" />
        ))}
        <span className="relative size-4">
          <Star className="absolute size-4 text-brand" />
          <span className="absolute inset-0 w-1/2 overflow-hidden">
            <Star className="size-4 fill-brand text-brand" />
          </span>
        </span>
      </div>
      <span className="text-sm font-medium text-muted-foreground">4.8/5</span>
    </div>
  )
}

export function AllServices() {
  const [active, setActive] = useState("Alle Services")

  const filtered =
    active === "Alle Services" ? services : services.filter((s) => s.category === active)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-[88px] lg:self-start">
          {/* Mobile: horizontal scroll chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = cat.label === active
              return (
                <button
                  key={cat.label}
                  onClick={() => setActive(cat.label)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-brand text-brand-foreground"
                      : "bg-secondary text-foreground/80 hover:bg-accent"
                  }`}
                >
                  <Icon className="size-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Desktop: vertical list */}
          <nav className="hidden flex-col lg:flex">
            {categories.map((cat) => {
              const Icon = cat.icon
              const isActive = cat.label === active
              return (
                <button
                  key={cat.label}
                  onClick={() => setActive(cat.label)}
                  className={`flex items-center justify-between gap-3 border-b border-border/70 px-4 py-4 text-left transition-colors ${
                    isActive ? "rounded-xl border-transparent bg-accent" : "hover:bg-secondary"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className={`size-5 ${isActive ? "text-brand" : "text-foreground/60"}`} />
                    <span
                      className={`text-base font-semibold ${isActive ? "text-brand" : "text-foreground/85"}`}
                    >
                      {cat.label}
                    </span>
                  </span>
                  <ChevronRight className={`size-4 ${isActive ? "text-brand" : "text-foreground/40"}`} />
                </button>
              )
            })}
          </nav>
        </aside>

        {/* Main */}
        <div className="mt-8 lg:mt-0">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Alle Services
          </h1>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={s.img || "/placeholder.svg"}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-balance">{s.title}</h2>
                  <div className="mt-2">
                    <StarRating />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="font-display text-base font-extrabold text-brand">
                      ab €{s.price}
                      <span className="text-sm font-bold">/Monat</span>
                    </p>
                    <Button
                      variant="outline"
                      className="h-10 rounded-xl border-border px-5 font-semibold text-foreground hover:border-brand hover:bg-brand hover:text-brand-foreground"
                    >
                      Buchen
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              Keine Services in dieser Kategorie.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
