"use client"

import { useMemo, useState } from "react"
import { ShieldCheck, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const TERMS = [6, 12, 18, 24]
const APR = 0.0799
const MIN = 250
const MAX = 10000

function fmt(n: number) {
  return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function RateCalculator() {
  const [amount, setAmount] = useState(1000)
  const [term, setTerm] = useState(12)

  const { monthly, total } = useMemo(() => {
    const r = APR / 12
    const m = (amount * r) / (1 - Math.pow(1 + r, -term))
    return { monthly: m, total: m * term }
  }, [amount, term])

  const monthlyParts = fmt(monthly).split(",")
  const pct = ((amount - MIN) / (MAX - MIN)) * 100

  return (
    <section id="preise" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-ink p-6 text-ink-foreground sm:p-10 lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Berechnen Sie Ihre Rate</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-foreground/70">
            Nutzen Sie unseren Rechner und finden Sie Ihre passende Finanzierung in Sekunden.
          </p>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Betrag der Dienstleistung</label>
              <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold tabular-nums">
                {amount.toLocaleString("de-DE")}
              </div>
            </div>
            <input
              type="range"
              min={MIN}
              max={MAX}
              step={50}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand [&::-moz-range-thumb]:bg-white"
              style={{
                background: `linear-gradient(to right, var(--brand) ${pct}%, rgba(255,255,255,0.15) ${pct}%)`,
              }}
            />
            <div className="mt-2 flex justify-between text-xs text-ink-foreground/60">
              <span>{MIN} €</span>
              <span>{MAX.toLocaleString("de-DE")} €</span>
            </div>
          </div>

          <div className="mt-8">
            <label className="text-sm font-medium">Laufzeit wählen</label>
            <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
              {TERMS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTerm(t)}
                  className={`rounded-xl px-2 py-3 text-sm font-semibold transition-colors ${
                    term === t
                      ? "bg-white text-ink"
                      : "border border-white/15 bg-white/5 text-ink-foreground hover:bg-white/10"
                  }`}
                >
                  {t} Monate
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-foreground/70">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-brand" /> Keine versteckten Kosten
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-brand" /> Flexible Rückzahlung
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="size-4 text-brand" /> 100% online
            </span>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:flex lg:items-center">
          <div className="w-full rounded-2xl bg-card p-6 text-card-foreground sm:p-8">
            <div className="flex flex-col items-center">
              <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-brand">
                Monatliche Rate
              </span>
              <p className="mt-4 font-display text-5xl font-extrabold">
                {monthlyParts[0]}
                <span className="text-3xl">,{monthlyParts[1]} €</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">pro Monat</p>
            </div>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Betrag</dt>
                <dd className="font-semibold tabular-nums">{fmt(amount)} €</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Laufzeit</dt>
                <dd className="font-semibold tabular-nums">{term} Monate</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Effektiver Jahreszins</dt>
                <dd className="font-semibold tabular-nums">7,99 %</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Gesamtbetrag</dt>
                <dd className="font-semibold tabular-nums">{fmt(total)} €</dd>
              </div>
            </dl>

            <Button className="mt-6 h-12 w-full rounded-xl bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90">
              Jetzt unverbindlich anfragen
            </Button>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-muted-foreground">
        Beispielrechnung: 1.000 € bei 12 Monaten Laufzeit und 7,99 % eff. Jahreszins. Bonität vorausgesetzt.
      </p>
    </section>
  )
}
