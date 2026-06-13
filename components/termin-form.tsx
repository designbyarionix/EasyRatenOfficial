"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Wrench,
  Zap,
  Truck,
  Home,
  Monitor,
  SprayCan,
  Droplet,
  Car,
  Sparkles,
  Clock,
  Sun,
  Moon,
  Check,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Receipt,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookingStepper } from "@/components/booking-stepper"
import type { Service, BookingConfig } from "@/lib/services-data"

const categoryIcons: Record<string, typeof Wrench> = {
  Handwerk: Wrench,
  Elektrik: Zap,
  Umzug: Truck,
  "Haus & Garten": Home,
  "IT & Technik": Monitor,
  Reinigung: SprayCan,
  Klempner: Droplet,
  Auto: Car,
  Beauty: Sparkles,
}

const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]

const monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
]

const timeSlots = [
  { id: "morgens", label: "Morgens", time: "8:00–12:00", Icon: Sun },
  { id: "mittags", label: "Mittags", time: "12:00–16:00", Icon: Sun },
  { id: "abends", label: "Abends", time: "16:00–20:00", Icon: Moon },
]

function euro(value: number) {
  return value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

/** Returns a Mon-first weekday index (0 = Monday … 6 = Sunday). */
function mondayIndex(date: Date) {
  return (date.getDay() + 6) % 7
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
  )
}

export function TerminForm({
  service,
  config,
  monthly,
  months,
  total,
}: {
  service: Service
  config: BookingConfig
  monthly: number
  months: number
  total: number
}) {
  const CategoryIcon = categoryIcons[service.category] ?? Wrench
  const router = useRouter()

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const [viewMonth, setViewMonth] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string>("mittags")

  const weeks = useMemo(() => buildCalendar(viewMonth), [viewMonth])

  const canContinue = selectedDate !== null && selectedSlot !== ""

  const goToToday = () => {
    setViewMonth(new Date(today.getFullYear(), today.getMonth(), 1))
    setSelectedDate(today)
  }

  const prevMonth = () => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))
  const nextMonth = () => setViewMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-extrabold text-balance sm:text-4xl">{service.title} buchen</h1>

      <div className="mt-8">
        <BookingStepper current={3} />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Left: calendar + time */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* Calendar */}
          <div className="rounded-2xl bg-card p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 sm:p-6">
            <h2 className="font-display text-xl font-bold">Wählen Sie einen Termin</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Bitte wählen Sie ein verfügbares Datum und eine Uhrzeit.
            </p>

            <div className="mt-6 rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={prevMonth}
                  aria-label="Vorheriger Monat"
                  className="flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent hover:text-brand"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <p className="font-display text-base font-bold">
                  {monthNames[viewMonth.getMonth()]} {viewMonth.getFullYear()}
                </p>
                <button
                  type="button"
                  onClick={nextMonth}
                  aria-label="Nächster Monat"
                  className="flex size-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent hover:text-brand"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-1 text-center text-sm font-medium text-muted-foreground">
                {weekdays.map((d) => (
                  <div key={d} className="py-1">
                    {d}
                  </div>
                ))}
              </div>

              <div className="mt-1 grid grid-cols-7 gap-1">
                {weeks.map((day, i) => {
                  const inMonth = day.getMonth() === viewMonth.getMonth()
                  const past = day < today
                  const isToday = isSameDay(day, today)
                  const isSelected = selectedDate && isSameDay(day, selectedDate)
                  // "Available" days are highlighted (not past, in month, every 2nd-ish day).
                  const available = inMonth && !past && (day.getDate() % 2 === 0 || isToday)
                  const disabled = !inMonth || past

                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={disabled}
                      onClick={() => setSelectedDate(day)}
                      className={[
                        "relative flex aspect-square items-center justify-center rounded-full text-sm font-medium transition-colors",
                        disabled ? "cursor-not-allowed text-muted-foreground/40" : "text-foreground",
                        isSelected
                          ? "bg-brand text-brand-foreground"
                          : isToday
                            ? "ring-2 ring-brand text-brand"
                            : available
                              ? "text-brand ring-1 ring-brand/40 hover:bg-brand/10"
                              : !disabled
                                ? "hover:bg-accent"
                                : "",
                      ].join(" ")}
                    >
                      {day.getDate()}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={goToToday}
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
                >
                  <CalendarDays className="size-4" /> Heute
                </button>
              </div>
            </div>
          </div>

          {/* Time slots */}
          <div className="rounded-2xl bg-card p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 sm:p-6">
            <h2 className="font-display text-xl font-bold">Wählen Sie eine Uhrzeit</h2>
            <div className="mt-6 flex flex-col gap-4">
              {timeSlots.map(({ id, label, time, Icon }) => {
                const selected = selectedSlot === id
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelectedSlot(id)}
                    className={[
                      "flex items-center gap-4 rounded-2xl border p-4 text-left transition-colors",
                      selected
                        ? "border-brand bg-brand/5 ring-1 ring-brand"
                        : "border-border hover:border-brand/40 hover:bg-accent/50",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex size-11 shrink-0 items-center justify-center rounded-full",
                        selected ? "bg-brand/15 text-brand" : "bg-muted text-foreground/60",
                      ].join(" ")}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="font-display text-base font-bold">{label}</span>
                      <span className="text-sm text-muted-foreground">({time})</span>
                    </span>
                    {selected && (
                      <span className="ml-auto flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
                        <Check className="size-4" strokeWidth={3} />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Right: service summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-card p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] ring-1 ring-border/60">
            <h2 className="font-display text-lg font-bold">Ihr Service</h2>

            <div className="mt-5 flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <CategoryIcon className="size-7" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  ab <span className="font-bold text-brand">€{service.price}</span>/Monat
                </p>
              </div>
            </div>

            <div className="my-5 h-px bg-border" />

            <div className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-foreground/70">
                <Clock className="size-6" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Geschätzte Dauer</p>
                <p className="font-display text-base font-bold">{config.duration}</p>
              </div>
            </div>

            <div className="my-5 h-px bg-border" />

            <ul className="flex flex-col gap-3 text-sm">
              {["Erfahrene Fachkräfte", "Transparente Preise", "Zuverlässiger Service"].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <Check className="size-5 text-brand" strokeWidth={2.5} /> <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <Button
              disabled={!canContinue}
              onClick={() =>
                router.push(
                  `/services/${service.slug}/buchen/zahlung?monthly=${monthly.toFixed(2)}&months=${months}&total=${total.toFixed(2)}`,
                )
              }
              className="mt-6 h-14 w-full rounded-xl bg-brand text-lg font-bold text-brand-foreground hover:bg-brand/90 disabled:opacity-50"
            >
              Weiter
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </aside>
      </div>

      {/* Bottom: price overview */}
      <div className="mt-6 rounded-2xl bg-card p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-border/60 sm:p-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
              <Receipt className="size-6" />
            </span>
            <p className="font-display text-lg font-bold">Preisübersicht</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Monatlicher Preis</p>
              <p className="font-display text-lg font-bold">€{euro(monthly)}</p>
            </div>
            <X className="size-5 text-muted-foreground" />
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Laufzeit</p>
              <p className="font-display text-lg font-bold">{months} Monate</p>
            </div>
            <span className="font-display text-xl font-bold text-muted-foreground">=</span>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Gesamtpreis:</p>
              <p className="font-display text-2xl font-extrabold text-brand">
                €{Math.round(total)}{" "}
                <span className="text-sm font-medium text-muted-foreground">
                  ({months} x €{euro(monthly)}/Monat)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Builds a 6-week (42 day) grid starting on the Monday of the first week. */
function buildCalendar(viewMonth: Date) {
  const firstOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1)
  const start = new Date(firstOfMonth)
  start.setDate(firstOfMonth.getDate() - mondayIndex(firstOfMonth))

  const days: Date[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    days.push(d)
  }
  return days
}
