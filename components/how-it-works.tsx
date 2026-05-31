import { FileText, UserCheck, CalendarCheck } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Dienstleistung wählen",
    desc: "Wählen Sie die gewünschte Dienstleistung und erhalten Sie Ihr Angebot.",
  },
  {
    icon: UserCheck,
    title: "Antrag stellen",
    desc: "Stellen Sie Ihren Antrag online in wenigen Minuten – ohne Papierkram.",
  },
  {
    icon: CalendarCheck,
    title: "Raten zahlen & genießen",
    desc: "Nach Genehmigung zahlen Sie bequem in monatlichen Raten.",
  },
]

export function HowItWorks() {
  return (
    <section id="so-funktioniert-es" className="bg-accent/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">So funktioniert es</h2>
          <p className="mt-3 text-muted-foreground">In nur 3 einfachen Schritten zu Ihrer Finanzierung.</p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="absolute left-1/6 right-1/6 top-7 hidden border-t-2 border-dashed border-brand/30 md:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <span className="flex size-16 items-center justify-center rounded-full bg-background text-brand shadow-sm ring-1 ring-border">
                  <step.icon className="size-7" />
                </span>
                <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
