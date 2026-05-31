import { Lock, ShieldCheck, BadgeCheck, Scale } from "lucide-react"

const items = [
  { icon: Lock, title: "SSL-verschlüsselt", desc: "Ihre Daten sind sicher" },
  { icon: ShieldCheck, title: "DSGVO-konform", desc: "Ihre Privatsphäre ist geschützt" },
  { icon: BadgeCheck, title: "TÜV geprüft", desc: "Zertifizierte Prozesse" },
  { icon: Scale, title: "Faire Konditionen", desc: "Transparent & nachvollziehbar" },
]

export function Security() {
  return (
    <section className="bg-accent/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Sicherheit, der Sie vertrauen können
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="size-6" />
              </span>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
