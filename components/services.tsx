import Image from "next/image"
import { Truck, Droplet, Disc3, Sprout, Zap, SprayCan, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Umzug",
    icon: Truck,
    total: "600",
    monthly: "50",
    img: "/images/svc-umzug.png",
  },
  {
    title: "Klempner",
    icon: Droplet,
    total: "400",
    monthly: "35",
    img: "/images/svc-klempner.png",
  },
  {
    title: "Reifenwechsel",
    icon: Disc3,
    total: "200",
    monthly: "20",
    img: "/images/svc-reifen.png",
  },
  {
    title: "Gartenbau",
    icon: Sprout,
    total: "300",
    monthly: "25",
    img: "/images/svc-garten.png",
  },
  {
    title: "Elektrik",
    icon: Zap,
    total: "500",
    monthly: "45",
    img: "/images/svc-elektrik.png",
  },
  {
    title: "Reinigung",
    icon: SprayCan,
    total: "150",
    monthly: "15",
    img: "/images/svc-reinigung.png",
  },
]

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl lg:text-6xl">
          Unsere Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
          Wählen Sie aus einer großen Auswahl an professionellen Dienstleistungen
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = s.icon
          return (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl bg-card shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={s.img || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-2">
                  <span className="text-sm text-muted-foreground">Gesamtpreis</span>
                  <span className="font-display text-2xl font-extrabold text-foreground">€{s.total}</span>
                </div>

                <a
                  href="#"
                  className="mt-4 flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-3 font-display text-lg font-extrabold text-brand-foreground shadow-sm transition-colors hover:bg-brand/90"
                >
                  €{s.monthly}
                  <span className="text-sm font-bold">/Monat</span>
                </a>
                <p className="mt-2 text-center text-xs text-muted-foreground">Oder zahlen Sie in 12 Monaten</p>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-display text-base font-bold text-background transition-colors hover:bg-foreground/90"
        >
          Alle Services anzeigen
          <ArrowRight className="size-5" />
        </a>
      </div>
    </section>
  )
}
