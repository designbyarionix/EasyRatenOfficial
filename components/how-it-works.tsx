import { Search, Calendar, Check, Truck, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Service wählen",
    desc: "Finden Sie den perfekten Service für Ihre Bedürfnisse",
  },
  {
    icon: Calendar,
    title: "Laufzeit wählen",
    desc: "Bestimmen Sie Ihre bevorzugte Zahlungsrate",
  },
  {
    icon: Check,
    title: "Raten genießen",
    desc: "Zahlen Sie flexibel in monatlichen Raten",
  },
]

const benefits = ["Flexible Zahlung", "Keine versteckten Kosten", "Sofort buchen"]

export function HowItWorks() {
  return (
    <section id="so-funktioniert-es" className="bg-accent/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Wie es funktioniert</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            In 3 einfachen Schritten
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-14 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-4">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-4 md:gap-3">
              <div className="flex items-center gap-4">
                <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-background text-brand shadow-sm ring-1 ring-border">
                  <step.icon className="size-8" strokeWidth={2.5} />
                </span>
                <div className="max-w-[12rem]">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden items-center md:flex" aria-hidden="true">
                  <span className="h-0.5 w-10 bg-brand" />
                  <span className="-ml-1.5 size-3 rounded-full bg-brand" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison card */}
        <div className="relative mx-auto mt-16 max-w-5xl rounded-3xl bg-background p-3 shadow-xl ring-1 ring-border sm:p-4">
          <div className="grid grid-cols-1 items-stretch gap-3 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr]">
            {/* Option A */}
            <div className="flex flex-col items-center rounded-2xl bg-muted/70 px-6 py-8 text-center">
              <span className="rounded-md bg-foreground/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Option A
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">Gesamtzahlung</h3>
              <p className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">€600</p>
              <div className="my-5 h-px w-full bg-border" />
              <p className="text-sm text-muted-foreground">Einmalige Zahlung</p>
            </div>

            {/* VS badge */}
            <div className="z-10 flex items-center justify-center lg:-mx-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-background text-sm font-extrabold shadow-md ring-1 ring-border">
                VS.
              </span>
            </div>

            {/* Middle example panel */}
            <div className="overflow-hidden rounded-2xl ring-1 ring-border">
              <div className="flex items-center justify-center gap-2 bg-brand px-4 py-3 text-brand-foreground">
                <Truck className="size-5" />
                <span className="font-display text-sm font-bold uppercase tracking-wide">Beispiel: Umzug für €600</span>
              </div>
              <div className="flex flex-col gap-4 px-6 py-8">
                {benefits.map((b, idx) => (
                  <div key={b}>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                        <Check className="size-5" strokeWidth={3} />
                      </span>
                      <span className="font-display font-bold">{b}</span>
                    </div>
                    {idx < benefits.length - 1 && <div className="mt-4 h-px w-full bg-border" />}
                  </div>
                ))}
              </div>
            </div>

            {/* VS badge */}
            <div className="z-10 flex items-center justify-center lg:-mx-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-background text-sm font-extrabold shadow-md ring-1 ring-border">
                VS.
              </span>
            </div>

            {/* Option B */}
            <div className="flex flex-col items-center rounded-2xl bg-accent/60 px-6 py-8 text-center">
              <span className="rounded-md bg-brand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                Option B
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">In Raten</h3>
              <p className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand sm:text-5xl">
                12 x €50
                <span className="text-lg align-baseline">/Monat</span>
              </p>
              <div className="my-5 h-px w-full bg-brand/20" />
              <p className="text-sm text-muted-foreground">12 monatliche Raten</p>
            </div>
          </div>

          {/* Footer strip */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl bg-accent/50 px-6 py-5 text-center">
            <ShieldCheck className="size-5 text-brand" />
            <span className="font-display font-bold">100% Transparent.</span>
            <span className="text-sm text-muted-foreground">
              Keine versteckten Gebühren. Keine Anzahlung. Volle Flexibilität.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
