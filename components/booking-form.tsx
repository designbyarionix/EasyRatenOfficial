"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import {
  Wrench,
  Zap,
  Truck,
  Home,
  Monitor,
  SprayCan,
  Droplet,
  Car,
  Clock,
  ShieldCheck,
  MapPin,
  Calculator,
  CalendarDays,
  ChevronDown,
  Check,
  Info,
  Lock,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Service, BookingConfig, BookingField } from "@/lib/services-data"

const categoryIcons: Record<string, typeof Wrench> = {
  Handwerk: Wrench,
  Elektrik: Zap,
  Umzug: Truck,
  "Haus & Garten": Home,
  "IT & Technik": Monitor,
  Reinigung: SprayCan,
  Klempner: Droplet,
}

const termMonths: Record<string, number> = {
  "3 Monate": 3,
  "6 Monate": 6,
  "12 Monate": 12,
  "24 Monate": 24,
}

function euro(value: number) {
  return value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function BookingForm({ service, config }: { service: Service; config: BookingConfig }) {
  const CategoryIcon = categoryIcons[service.category] ?? Wrench

  // Single-choice fields (select/radio) store the selected option index.
  const [choices, setChoices] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {}
    for (const field of config.fields) {
      if (field.type !== "checkbox") initial[field.id] = 0
    }
    return initial
  })

  // Checkbox fields store the set of checked option indices.
  const [checks, setChecks] = useState<Record<string, Set<number>>>(() => {
    const initial: Record<string, Set<number>> = {}
    for (const field of config.fields) {
      if (field.type === "checkbox") initial[field.id] = new Set()
    }
    return initial
  })

  const [term, setTerm] = useState("12 Monate")

  const { basis, extras, total } = useMemo(() => {
    let basis = config.basePrice
    let extras = 0
    for (const field of config.fields) {
      if (field.type === "checkbox") {
        for (const idx of checks[field.id] ?? []) {
          extras += field.options[idx]?.price ?? 0
        }
      } else {
        const idx = choices[field.id] ?? 0
        basis += field.options[idx]?.price ?? 0
      }
    }
    return { basis, extras, total: basis + extras }
  }, [choices, checks, config])

  const months = termMonths[term] ?? 12
  const monthly = total / months

  const toggleCheck = (fieldId: string, idx: number) => {
    setChecks((prev) => {
      const next = new Set(prev[fieldId])
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return { ...prev, [fieldId]: next }
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">
        {service.title} – Details eingeben
      </h1>
      <p className="mt-2 max-w-2xl text-base text-muted-foreground">
        Bitte geben Sie die Details zu Ihrer Leistung ein, um Ihren Preis zu berechnen.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr_360px]">
        {/* Left: service summary */}
        <aside className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={service.img || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover object-top"
              sizes="320px"
            />
          </div>

          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-brand-foreground">
              <CategoryIcon className="size-6" />
            </span>
            <div>
              <h2 className="font-display text-lg font-bold">{service.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{config.tagline}</p>
            </div>
          </div>

          <div className="h-px bg-border" />

          <dl className="flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-muted-foreground">
                <Car className="size-4 text-foreground/60" /> Service
              </dt>
              <dd className="font-semibold">{service.title}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 text-foreground/60" /> Dauer (ca.)
              </dt>
              <dd className="font-semibold">{config.duration}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="size-4 text-foreground/60" /> Garantie
              </dt>
              <dd className="font-semibold">{config.guarantee}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-foreground/60" /> Durchführung
              </dt>
              <dd className="font-semibold text-right">{config.location}</dd>
            </div>
          </dl>

          <div className="flex items-start gap-3 rounded-xl bg-brand/10 p-4">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-brand" />
            <div>
              <p className="font-bold text-brand">Sicher bezahlen mit EasyRaten</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Flexible Ratenzahlung für Ihre Wartung und Services.
              </p>
            </div>
          </div>
        </aside>

        {/* Middle: configuration steps */}
        <section className="rounded-2xl bg-card p-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 sm:p-8">
          <div className="flex flex-col divide-y divide-border">
            {config.fields.map((field, i) => (
              <div key={field.id} className="py-6 first:pt-0 last:pb-0">
                <FieldRow
                  index={i + 1}
                  field={field}
                  selectedIndex={choices[field.id]}
                  checkedSet={checks[field.id]}
                  onSelect={(idx) => setChoices((p) => ({ ...p, [field.id]: idx }))}
                  onToggle={(idx) => toggleCheck(field.id, idx)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Right: price summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-card p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border/60">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Calculator className="size-5" />
              </span>
              <h2 className="font-display text-xl font-bold">Preisübersicht</h2>
            </div>

            <div className="mt-5 flex flex-col gap-3 text-base">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Basis</span>
                <span className="font-semibold">€{euro(basis)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Zusatzleistungen</span>
                <span className="font-semibold">+ €{euro(extras)}</span>
              </div>
            </div>

            <div className="my-4 h-px bg-border" />

            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold">Gesamtpreis</span>
              <span className="font-display text-2xl font-extrabold text-brand">€{euro(total)}</span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <CalendarDays className="size-5" />
              </span>
              <h3 className="font-display text-lg font-bold">Laufzeit wählen</h3>
            </div>
            <div className="relative mt-3">
              <select
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-base font-medium text-foreground outline-none transition-colors focus:border-brand"
              >
                {Object.keys(termMonths).map((label) => (
                  <option key={label}>{label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-foreground/50" />
            </div>

            <div className="mt-5 rounded-xl bg-brand/10 p-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground/80">Ihre monatliche Rate</span>
                <Info className="size-4 text-foreground/40" />
              </div>
              <p className="mt-2 font-display">
                <span className="text-2xl font-bold text-foreground">{months} x </span>
                <span className="text-3xl font-extrabold text-brand">€{euro(monthly)}</span>
                <span className="text-lg font-bold text-foreground">/Monat</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Gesamtbetrag: €{euro(total)}</p>

              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {["Flexible Laufzeiten", "Schnelle Genehmigung", "Sichere und transparente Zahlung"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-foreground/80">
                    <Check className="size-4 text-brand" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            <Button className="mt-5 h-14 w-full rounded-xl bg-brand text-lg font-bold text-brand-foreground hover:bg-brand/90">
              Weiter zum Termin
              <ArrowRight className="size-5" />
            </Button>

            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Lock className="size-4 text-brand" />
              Ihre Daten sind sicher und geschützt.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

function FieldRow({
  index,
  field,
  selectedIndex,
  checkedSet,
  onSelect,
  onToggle,
}: {
  index: number
  field: BookingField
  selectedIndex?: number
  checkedSet?: Set<number>
  onSelect: (idx: number) => void
  onToggle: (idx: number) => void
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
      <div>
        <h3 className="font-display text-lg font-bold">
          {index}. {field.label}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{field.help}</p>
      </div>

      <div>
        {field.type === "select" && (
          <div className="relative">
            <select
              value={selectedIndex ?? 0}
              onChange={(e) => onSelect(Number(e.target.value))}
              className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3.5 text-base font-medium text-foreground outline-none transition-colors focus:border-brand"
            >
              {field.options.map((opt, idx) => (
                <option key={opt.label} value={idx}>
                  {opt.label}
                  {opt.price ? ` (${opt.price > 0 ? "+" : "−"}€${Math.abs(opt.price)})` : ""}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-foreground/50" />
          </div>
        )}

        {field.type === "radio" && (
          <div className="flex flex-col gap-3">
            {field.options.map((opt, idx) => {
              const checked = (selectedIndex ?? 0) === idx
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => onSelect(idx)}
                  className="flex items-center gap-3 text-left"
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      checked ? "border-brand" : "border-border"
                    }`}
                  >
                    {checked && <span className="size-2.5 rounded-full bg-brand" />}
                  </span>
                  <span className="font-medium">{opt.label}</span>
                  {opt.price ? (
                    <span className="ml-auto font-semibold text-brand">
                      {opt.price > 0 ? "+" : "−"} €{Math.abs(opt.price)},00
                    </span>
                  ) : null}
                </button>
              )
            })}
          </div>
        )}

        {field.type === "checkbox" && (
          <div className="flex flex-col gap-3">
            {field.options.map((opt, idx) => {
              const checked = checkedSet?.has(idx) ?? false
              return (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => onToggle(idx)}
                  className="flex items-center gap-3 text-left"
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                      checked ? "border-brand bg-brand text-brand-foreground" : "border-border"
                    }`}
                  >
                    {checked && <Check className="size-3.5" strokeWidth={3} />}
                  </span>
                  <span className="font-medium">{opt.label}</span>
                  <span className="ml-auto font-semibold text-brand">+ €{euro(opt.price ?? 0)}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
