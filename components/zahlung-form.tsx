"use client"

import { Wrench, CheckCircle2, ArrowRight, Tag, CalendarDays, TrendingUp, Lock, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingStepper } from "@/components/booking-stepper"
import type { Service } from "@/lib/services-data"

function euro(value: number) {
  return value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const klarnaBenefits = [
  "Flexible Laufzeiten (3, 6, 12 Monate)",
  "Sofortige Genehmigung",
  "Transparent & sicher",
  "Über 90 Millionen Kunden weltweit",
  "TÜV-zertifiziert",
]

const trustBadges = [
  { Icon: Lock, title: "SSL-verschlüsselt", desc: "Ihre Daten werden sicher übertragen" },
  { Icon: ShieldCheck, title: "PCI-DSS zertifiziert", desc: "Höchste Sicherheitsstandards" },
  { Icon: ShieldCheck, title: "Ihre Daten sind sicher", desc: "Wir schützen Ihre Privatsphäre" },
]

export function ZahlungForm({
  service,
  monthly,
  months,
  total,
}: {
  service: Service
  monthly: number
  months: number
  total: number
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/70 bg-background">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center">
            <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              Easy<span className="text-brand">Raten</span>
            </span>
          </a>
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <ShieldCheck className="size-5 text-brand" />
            <span>Sicher &amp; vertrauenswürdig</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-extrabold text-balance sm:text-5xl">Zahlungsmethode bestätigen</h1>

        {/* Horizontal stepper */}
        <div className="mt-8">
          <BookingStepper current={4} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Klarna card */}
          <section className="rounded-3xl bg-card p-8 text-center shadow-[0_2px_24px_rgba(0,0,0,0.06)] ring-1 ring-brand/20 sm:p-10">
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-xl bg-[#ffb3c7] px-8 py-4">
                <span className="font-display text-4xl font-extrabold tracking-tight text-black">Klarna.</span>
              </span>
            </div>

            <h2 className="mt-8 font-display text-2xl font-extrabold text-balance sm:text-3xl">
              Zahle mit Klarna – Jetzt kaufen, später bezahlen
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Mit Klarna zahlst du flexibel in Raten. Wähle deine Laufzeit und zahle monatlich – ganz ohne versteckte
              Gebühren.
            </p>

            <div className="my-8 h-px bg-border" />

            <ul className="mx-auto flex max-w-sm flex-col gap-4 text-left">
              {klarnaBenefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <Button className="mt-8 h-14 w-full rounded-xl bg-brand text-lg font-bold text-brand-foreground hover:bg-brand/90">
              Mit Klarna fortfahren
              <ArrowRight className="size-5" />
            </Button>
          </section>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl bg-card p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border/60">
              <h2 className="font-display text-xl font-bold">Bestellübersicht</h2>

              <dl className="mt-6 flex flex-col gap-5">
                <SummaryRow Icon={Wrench} label="Service" value={service.title} />
                <SummaryRow Icon={Tag} label="Preis" value={`€${Math.round(total)}`} />
                <SummaryRow Icon={CalendarDays} label="Laufzeit" value={`${months} Monate`} />
              </dl>

              <div className="my-6 h-px bg-border" />

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 font-semibold text-brand">
                  <TrendingUp className="size-5" />
                  Monatliche Rate
                </span>
                <span className="font-display text-xl font-extrabold text-brand">
                  {months} x €{euro(monthly)}
                  <span className="text-sm font-medium">/Monat</span>
                </span>
              </div>

              <Button className="mt-6 h-14 w-full rounded-xl bg-brand text-lg font-bold text-brand-foreground hover:bg-brand/90">
                Weiter
                <ArrowRight className="size-5" />
              </Button>

              <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Lock className="size-4" />
                Keine versteckten Gebühren
              </p>
            </div>
          </aside>
        </div>

        {/* Trust badges */}
        <div className="mt-6 rounded-3xl bg-card p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60">
          <div className="grid gap-6 divide-border sm:grid-cols-3 sm:divide-x">
            {trustBadges.map(({ Icon, title, desc }) => (
              <div key={title} className="flex items-center justify-center gap-4 px-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground/70">
                  <Icon className="size-6" />
                </span>
                <div>
                  <p className="font-display font-bold">{title}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Klarna footer note */}
        <div className="mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ffb3c7]">
            <span className="font-display text-2xl font-extrabold text-black">K.</span>
          </span>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">
              Klarna ist einer der führenden Payment-Provider in Europa
            </span>{" "}
            und wird von Millionen von Kunden vertraut.
            <br />
            <span className="text-sm">
              Gegründet 2005 in Schweden • Über 90 Millionen Kunden weltweit • In 45+ Ländern aktiv
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

function SummaryRow({ Icon, label, value }: { Icon: typeof Wrench; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="flex items-center gap-3 text-foreground/80">
        <Icon className="size-5 text-foreground/50" />
        {label}
      </span>
      <span className="font-display font-bold text-right">{value}</span>
    </div>
  )
}


