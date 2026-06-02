import { Check } from "lucide-react"

const STEPS = ["Service auswählen", "Laufzeit auswählen", "Termin wählen", "Zahlung"] as const

/**
 * Shared horizontal progress stepper for the booking flow.
 * `current` is the 1-based index of the active step.
 */
export function BookingStepper({ current }: { current: number }) {
  return (
    <div className="flex items-start">
      {STEPS.map((title, i) => {
        const n = i + 1
        const status = n < current ? "done" : n === current ? "active" : "upcoming"
        return (
          <div key={title} className="flex flex-1 flex-col items-center last:flex-none">
            <div className="flex w-full items-center">
              <span
                className={[
                  "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold",
                  status === "active"
                    ? "bg-brand text-brand-foreground"
                    : status === "done"
                      ? "bg-ink text-ink-foreground"
                      : "bg-muted text-muted-foreground",
                ].join(" ")}
              >
                {status === "done" ? <Check className="size-5" strokeWidth={3} /> : n}
              </span>
              {i < STEPS.length - 1 && (
                <span
                  className={[
                    "mx-2 h-0.5 flex-1 rounded-full",
                    status === "done" ? "bg-ink" : status === "active" ? "bg-brand" : "bg-border",
                  ].join(" ")}
                />
              )}
            </div>
            <span
              className={[
                "mt-3 text-center text-sm font-medium",
                status === "active" ? "text-brand" : "text-foreground/70",
              ].join(" ")}
            >
              {title}
            </span>
          </div>
        )
      })}
    </div>
  )
}
