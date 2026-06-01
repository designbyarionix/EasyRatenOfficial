import Image from "next/image"
import { Truck, Droplet, Disc3, Sprout, Zap, SprayCan } from "lucide-react"

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

                <div className="mt-6 grid grid-cols-2 items-start">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Gesamtpreis</p>
                    <p className="mt-1 font-display text-3xl font-extrabold text-brand">€{s.total}</p>
                  </div>
                  <div className="border-l border-border pl-4 text-center">
                    <p className="text-sm text-muted-foreground">Oder zahlen Sie in</p>
                    <p className="mt-1 font-display text-2xl font-extrabold text-brand">
                      €{s.monthly}
                      <span className="text-base font-bold">/Monat</span>
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">(12 Monate)</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
