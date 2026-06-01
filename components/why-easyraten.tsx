import { ShieldCheck, CalendarDays, BadgeCheck, Zap, Phone, Wallet, ArrowRight } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Sicher & Vertrauenswürdig",
    description: "SSL-verschlüsselt",
  },
  {
    icon: CalendarDays,
    title: "Flexible Raten",
    description: "Schon ab 3 Monaten",
  },
  {
    icon: BadgeCheck,
    title: "Transparente Preise",
    description: "Keine versteckten Kosten",
  },
  {
    icon: Zap,
    title: "Schnelle Buchung",
    description: "In wenigen Minuten",
  },
  {
    icon: Phone,
    title: "Kundensupport",
    description: "24/7 erreichbar",
  },
  {
    icon: Wallet,
    title: "Keine Anzahlung",
    description: "Sofort starten",
  },
]

export function WhyEasyRaten() {
  return (
    <section id="ueber-uns">
      {/* Feature grid */}
      <div className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Warum EasyRaten?
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex size-16 shrink-0 items-center justify-center rounded-xl text-brand">
                    <Icon className="size-10" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight text-foreground text-balance">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Dark CTA band */}
      <div className="relative overflow-hidden bg-ink text-ink-foreground">
        {/* subtle orange diagonal accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 opacity-60"
          style={{
            background:
              "linear-gradient(115deg, transparent 55%, color-mix(in oklch, var(--brand) 70%, transparent) 56%, transparent 58%), linear-gradient(115deg, transparent 62%, color-mix(in oklch, var(--brand) 35%, transparent) 63%, transparent 66%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-0 h-2/3 w-1/3 opacity-40"
          style={{
            background:
              "linear-gradient(115deg, transparent 60%, color-mix(in oklch, var(--brand) 50%, transparent) 61%, transparent 64%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Bereit für flexible Zahlungen?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/70 text-pretty sm:text-lg">
            Buchen Sie noch heute Ihren Service und zahlen Sie in komfortablen monatlichen Raten.
          </p>
          <div className="mt-9">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-brand px-9 py-4 font-display text-base font-bold uppercase tracking-wide text-brand-foreground shadow-lg shadow-brand/20 transition-colors hover:bg-brand/90"
            >
              Jetzt starten
              <ArrowRight className="size-5" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
