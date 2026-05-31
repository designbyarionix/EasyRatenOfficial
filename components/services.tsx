import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  { title: "Umzug", desc: "Stressfrei umziehen", price: "20", img: "/images/service-umzug.png" },
  { title: "Klempner", desc: "Schnelle Hilfe bei Problemen", price: "15", img: "/images/service-klempner.png" },
  { title: "Reifenwechsel", desc: "Sicher unterwegs", price: "15", img: "/images/service-reifen.png" },
  { title: "Renovierung", desc: "Verschönern Sie Ihr Zuhause", price: "30", img: "/images/service-renovierung.png" },
]

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Beliebte Dienstleistungen</h2>
        <p className="mt-3 text-muted-foreground">Wählen Sie aus zahlreichen Services und zahlen Sie bequem in Raten.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-36 items-center justify-center rounded-xl bg-muted/40 p-4">
              <Image
                src={s.img || "/placeholder.svg"}
                alt={s.title}
                width={200}
                height={140}
                className="h-full w-auto object-contain"
              />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                ab{" "}
                <span className="font-display text-xl font-extrabold text-brand">{s.price} €</span>{" "}
                / Monat
              </p>
              <span className="flex size-9 items-center justify-center rounded-full border border-border text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <ArrowRight className="size-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
