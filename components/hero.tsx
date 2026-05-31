import Image from "next/image"
import { ArrowRight, Play, Zap, CalendarClock, ShieldCheck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: Zap, title: "Schnell & einfach", desc: "In wenigen Minuten" },
  { icon: CalendarClock, title: "Flexible Raten", desc: "Ab 15 € / Monat" },
  { icon: ShieldCheck, title: "Sicher & transparent", desc: "Keine versteckten Kosten" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute right-0 top-0 -z-10 hidden h-full w-1/2 rounded-bl-[40%] bg-accent lg:block" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Dienstleistungen in <span className="text-brand">Raten zahlen</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bezahlen Sie professionelle Dienstleistungen flexibel und fair in monatlichen Raten – einfach, schnell und
            100% online.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 rounded-xl bg-brand px-6 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Jetzt starten <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-xl px-6 text-base font-semibold"
            >
              So funktioniert es <Play className="size-4 fill-current" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                  <f.icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex items-center justify-center lg:mt-0">
          <Image
            src="/images/hero-family.png"
            alt="Glückliche Familie schaut gemeinsam auf ein Smartphone"
            width={640}
            height={520}
            priority
            className="w-full max-w-lg rounded-3xl object-cover shadow-sm"
          />

          <div className="absolute -bottom-6 right-2 w-44 rounded-2xl border border-border bg-card p-4 shadow-xl sm:right-6 sm:w-52">
            <p className="text-xs text-muted-foreground">Ihre monatliche Rate</p>
            <p className="font-display text-4xl font-extrabold text-brand">
              30<span className="ml-1 align-top text-sm font-semibold text-foreground">EUR</span>
            </p>
            <p className="-mt-1 text-xs font-medium text-muted-foreground">/ Monat</p>
            <ul className="mt-3 space-y-1.5">
              {["Schnelle Genehmigung", "Flexible Laufzeiten", "Jederzeit kündbar"].map((t) => (
                <li key={t} className="flex items-center gap-1.5 text-[11px] font-medium text-foreground">
                  <Check className="size-3 text-brand" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
