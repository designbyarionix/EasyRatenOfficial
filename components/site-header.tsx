"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Wie es funktioniert", href: "/#so-funktioniert-es" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Kontakt", href: "/#kontakt" },
]

export function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center">
          <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
            Easy<span className="text-brand">Raten</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.label === active
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-foreground/80"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[26px] left-0 right-0 h-0.5 rounded-full bg-brand" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden lg:flex">
          <Button className="h-11 rounded-xl bg-brand px-6 text-[15px] font-semibold text-brand-foreground hover:bg-brand/90">
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
                className={`rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-brand ${
                  link.label === active ? "bg-accent text-brand" : "text-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 w-full rounded-xl bg-brand font-semibold text-brand-foreground hover:bg-brand/90">
              Jetzt starten
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
