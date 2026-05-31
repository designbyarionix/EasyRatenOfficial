"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "Dank EasyRaten konnten wir unseren Umzug stressfrei finanzieren. Super einfacher Prozess und faire Konditionen!",
    name: "Lisa M.",
    role: "Umzug",
    avatar: "/images/avatar-lisa.png",
  },
  {
    quote: "Der Klempner musste sofort kommen. Mit EasyRaten war die Zahlung kein Problem. Jederzeit wieder!",
    name: "Thomas K.",
    role: "Klempner",
    avatar: "/images/avatar-thomas.png",
  },
  {
    quote: "Die Renovierung unseres Wohnzimmers war überfällig. Jetzt zahlen wir bequem in monatlichen Raten. Top!",
    name: "Julia S.",
    role: "Renovierung",
    avatar: "/images/avatar-julia.png",
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const count = testimonials.length

  const prev = () => setActive((a) => (a - 1 + count) % count)
  const next = () => setActive((a) => (a + 1) % count)

  return (
    <section id="ueber-uns" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Das sagen unsere Kunden
      </h2>

      <div className="relative mt-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`rounded-2xl border border-border bg-card p-6 transition-opacity ${
                i === active ? "opacity-100" : "opacity-100 md:opacity-60"
              } ${i === active ? "block" : "hidden md:block"}`}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{`„${t.quote}"`}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Vorheriges"
          className="absolute -left-2 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-accent md:flex lg:-left-5"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Nächstes"
          className="absolute -right-2 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-accent md:flex lg:-right-5"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Gehe zu Bewertung ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-brand" : "w-2 bg-border"}`}
          />
        ))}
      </div>
    </section>
  )
}
