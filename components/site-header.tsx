"use client"

import { useState } from "react"
import { Check, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "So funktioniert es", href: "#so-funktioniert-es" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Preise", href: "#preise" },
  { label: "FAQ", href: "#faq" },
  { label: "Über uns", href: "#ueber-uns" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Check className="size-5" strokeWidth={3} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight">
            Easy<span className="text-brand">Raten</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" className="rounded-lg font-semibold">
            Einloggen
          </Button>
          <Button className="rounded-lg bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
            Jetzt starten
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-label="Menü öffnen"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-lg font-semibold">
                Einloggen
              </Button>
              <Button className="w-full rounded-lg bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
                Jetzt starten
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
