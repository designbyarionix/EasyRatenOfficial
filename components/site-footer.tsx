import { Check, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react"

const columns = [
  {
    title: "Unternehmen",
    links: ["Über uns", "Karriere", "Presse", "Kontakt"],
  },
  {
    title: "Informationen",
    links: ["So funktioniert es", "Leistungen", "Preise", "FAQ"],
  },
  {
    title: "Rechtliches",
    links: ["AGB", "Datenschutz", "Widerrufsrecht", "Impressum"],
  },
]

export function SiteFooter() {
  return (
    <footer id="faq" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Check className="size-5" strokeWidth={3} />
              </span>
              <span className="font-display text-xl font-extrabold">EasyRaten</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/60">
              Die einfache und faire Lösung, um Dienstleistungen in Raten zu bezahlen.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-navy-foreground transition-colors hover:bg-brand"
                  aria-label="Social Media"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-navy-foreground/60 transition-colors hover:text-navy-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-navy-foreground/60">Bleiben Sie informiert.</p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="E-Mail-Adresse"
                aria-label="E-Mail-Adresse"
                className="h-11 w-full rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-navy-foreground placeholder:text-navy-foreground/40 outline-none focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Newsletter abonnieren"
                className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-colors hover:bg-brand/90"
              >
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-navy-foreground/50">
          © 2025 EasyRaten GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  )
}
