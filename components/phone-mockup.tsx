import Image from "next/image"
import {
  Bell,
  Search,
  Home,
  Wrench,
  Monitor,
  MoreHorizontal,
  ChevronRight,
  LayoutGrid,
  ClipboardList,
  User,
} from "lucide-react"

const categories = [
  { icon: Home, label: "Haus & Garten", active: true },
  { icon: Wrench, label: "Handwerk" },
  { icon: Monitor, label: "IT & Technik" },
  { icon: MoreHorizontal, label: "Mehr" },
]

const services = [
  { img: "/images/thumb-kitchen.png", title: "Küchenmontage", price: "€99", months: "36 Monate" },
  { img: "/images/thumb-ac.png", title: "Klimaanlagen Installation", price: "€89", months: "24 Monate" },
  { img: "/images/thumb-bath.png", title: "Badsanierung", price: "€129", months: "48 Monate" },
]

export function PhoneMockup() {
  return (
    <div className="w-[300px] rounded-[2.75rem] border-[10px] border-foreground bg-foreground p-0 shadow-2xl">
      <div className="relative overflow-hidden rounded-[2.1rem] bg-card">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-28 -translate-x-1/2 rounded-full bg-foreground" />

        <div className="px-5 pb-5 pt-9">
          {/* greeting */}
          <div className="flex items-start justify-between">
            <div>
              <p className="font-display text-lg font-bold leading-tight">Hallo, Max!</p>
              <p className="text-xs text-muted-foreground">Schön, dass Sie da sind.</p>
            </div>
            <span className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Bell className="size-4 text-foreground" />
            </span>
          </div>

          {/* search */}
          <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-muted/60 px-3 py-2.5">
            <span className="text-xs text-muted-foreground">Service suchen...</span>
            <Search className="size-4 text-muted-foreground" />
          </div>

          {/* categories */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-semibold">Kategorien</p>
            <span className="text-[11px] font-medium text-brand">Alle anzeigen</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {categories.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1.5">
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${
                    c.active ? "bg-brand text-brand-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  <c.icon className="size-5" />
                </span>
                <span className="text-center text-[9px] leading-tight text-muted-foreground">{c.label}</span>
              </div>
            ))}
          </div>

          {/* services */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-semibold">Beliebte Services</p>
            <span className="text-[11px] font-medium text-brand">Alle anzeigen</span>
          </div>
          <div className="mt-3 space-y-2.5">
            {services.map((s) => (
              <div key={s.title} className="flex items-center gap-3 rounded-xl border border-border p-2">
                <Image
                  src={s.img || "/placeholder.svg"}
                  alt={s.title}
                  width={48}
                  height={48}
                  className="size-12 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold">{s.title}</p>
                  <p className="text-[11px] text-muted-foreground">
                    ab <span className="font-bold text-foreground">{s.price}</span>
                    <span className="text-muted-foreground">/Monat</span>
                  </p>
                </div>
                <span className="rounded-md bg-accent px-1.5 py-0.5 text-[8px] font-semibold text-brand">
                  {s.months}
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        {/* bottom nav */}
        <div className="flex items-center justify-around border-t border-border bg-card py-2.5">
          {[
            { icon: Home, label: "Start", active: true },
            { icon: LayoutGrid, label: "Services" },
            { icon: ClipboardList, label: "Meine Raten" },
            { icon: User, label: "Profil" },
          ].map((n) => (
            <div key={n.label} className={`flex flex-col items-center gap-1 ${n.active ? "text-brand" : "text-muted-foreground"}`}>
              <n.icon className="size-4" />
              <span className="text-[8px] font-medium">{n.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
