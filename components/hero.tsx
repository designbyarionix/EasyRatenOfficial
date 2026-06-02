import Image from "next/image"
import { ArrowRight, ChevronRight, ShieldCheck, CalendarDays, BadgeCheck, PieChart, Search, CalendarCheck, CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"

const trust = [
  { icon: ShieldCheck, title: "Sicher & vertrauenswürdig", desc: "SSL-verschlüsselt" },
  { icon: CalendarDays, title: "Flexible Raten", desc: "Schon ab 3 Monaten" },
  { icon: BadgeCheck, title: "Transparente Preise", desc: "Keine versteckten Kosten" },
]

const steps = [
  { icon: Search, label: "1. Service wählen" },
  { icon: CalendarCheck, label: "2. Laufzeit wählen" },
  { icon: CircleCheck, label: "3. Raten genießen" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <h1 className="font-display text-[1.65rem] font-extrabold uppercase leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-[2.75rem] xl:text-6xl">
            Dienstleistungen in Raten.
            <br />
            <span className="text-brand">Einfach</span> bezahlen.
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Wählen Sie aus hunderten von Services und zahlen Sie flexibel in monatlichen Raten.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-14 rounded-xl bg-brand px-7 text-base font-semibold text-brand-foreground hover:bg-brand/90"
            >
              Services entdecken <ArrowRight className="size-5" />
            </Button>
            <a
              href="#so-funktioniert-es"
              className="group inline-flex items-center gap-1.5 px-2 text-base font-semibold text-foreground"
            >
              Wie es funktioniert
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trust.map((t) => (
              <div key={t.title} className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
                  <t.icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight text-foreground">{t.title}</p>
                  <p className="text-xs text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex min-h-[440px] items-center justify-center sm:min-h-[500px] lg:min-h-[620px]">
          {/* orange blob */}
          <div className="absolute right-0 top-1/2 -z-0 size-[340px] -translate-y-1/2 translate-x-6 rounded-[46%_54%_60%_40%/52%_48%_52%_48%] bg-brand/90 sm:size-[420px] sm:translate-x-10 lg:size-[480px]" />

          {/* worker image */}
          <div className="absolute bottom-0 left-0 z-10 h-full w-[55%] overflow-hidden sm:w-[60%]">
            <Image
              src="/images/handyman.png"
              alt="Freundlicher Handwerker hält einen Karton"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover object-top"
            />
          </div>

          {/* phone */}
          <div className="relative z-20 ml-auto">
            <PhoneMockup />
          </div>

          {/* Ratenübersicht floating card */}
          <div className="absolute bottom-4 left-0 z-30 w-44 rounded-2xl bg-card p-3.5 shadow-[0_18px_45px_-15px_rgba(0,0,0,0.3)] sm:bottom-16 sm:left-4 sm:w-52 sm:p-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-brand sm:size-9">
                <PieChart className="size-4" />
              </span>
              <p className="text-xs font-medium text-muted-foreground">Ihre Ratenübersicht</p>
            </div>
            <p className="mt-3 font-display text-xl font-extrabold text-foreground sm:text-2xl">
              €149,00 <span className="text-sm font-medium text-muted-foreground">/ Monat</span>
            </p>
            <p className="text-xs text-muted-foreground">2 aktive Ratenverträge</p>
            <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand">
              Details ansehen <ChevronRight className="size-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 3-step bar */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm md:flex-row md:items-center md:gap-8">
          <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
              <ShieldCheck className="size-5" />
            </span>
            <p className="text-sm font-bold leading-tight text-foreground">
              In nur 3 Schritten
              <br />
              zu Ihrem Wunsch-Service
            </p>
          </div>
          <div className="hidden h-10 w-px bg-border md:block" />
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-full bg-muted text-brand">
                  <s.icon className="size-4" />
                </span>
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
