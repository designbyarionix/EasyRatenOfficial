export type Service = {
  slug: string
  title: string
  category: string
  price: string
  img: string
  description: string
  included: string[]
  availability: string
  reviewCount: string
}

export const services: Service[] = [
  {
    slug: "klempnerarbeiten",
    title: "Klempnerarbeiten",
    category: "Handwerk",
    price: "35",
    img: "/images/card-klempner.png",
    description:
      "Professionelle Klempnerarbeiten für Ihr Zuhause. Schnelle Reparaturen, Installationen und Wartung.",
    included: ["Kostenlose Beratung", "Materialien inklusive", "Garantie 12 Monate"],
    availability: "Mo-So 8:00-20:00",
    reviewCount: "150+",
  },
  {
    slug: "elektroinstallation",
    title: "Elektroinstallation",
    category: "Elektrik",
    price: "35",
    img: "/images/card-elektrik.png",
    description:
      "Sichere und normgerechte Elektroinstallationen vom Fachbetrieb. Von der Steckdose bis zum Sicherungskasten.",
    included: ["Kostenlose Beratung", "Materialien inklusive", "Garantie 12 Monate"],
    availability: "Mo-So 8:00-20:00",
    reviewCount: "210+",
  },
  {
    slug: "reifenwechsel",
    title: "Reifenwechsel",
    category: "Handwerk",
    price: "35",
    img: "/images/card-reifen.png",
    description:
      "Schneller und sicherer Reifenwechsel für Ihr Fahrzeug. Inklusive Auswuchten und Einlagerung auf Wunsch.",
    included: ["Kostenlose Beratung", "Auswuchten inklusive", "Garantie 12 Monate"],
    availability: "Mo-Sa 8:00-18:00",
    reviewCount: "180+",
  },
  {
    slug: "umzug",
    title: "Umzug",
    category: "Umzug",
    price: "35",
    img: "/images/card-umzug.png",
    description:
      "Stressfreier Umzug mit erfahrenen Helfern. Wir packen an – vom Verpacken bis zum Aufbau am neuen Zuhause.",
    included: ["Kostenlose Beratung", "Transport inklusive", "Versicherung inklusive"],
    availability: "Mo-So 7:00-20:00",
    reviewCount: "320+",
  },
  {
    slug: "kuechenmontage",
    title: "Küchenmontage",
    category: "Handwerk",
    price: "35",
    img: "/images/card-kueche.png",
    description:
      "Fachgerechte Montage Ihrer neuen Küche. Präzise Installation aller Schränke, Geräte und Arbeitsplatten.",
    included: ["Kostenlose Beratung", "Geräteanschluss inklusive", "Garantie 12 Monate"],
    availability: "Mo-Sa 8:00-18:00",
    reviewCount: "140+",
  },
  {
    slug: "badezimmerrenovierung",
    title: "Badezimmerrenovierung",
    category: "Handwerk",
    price: "35",
    img: "/images/card-bad.png",
    description:
      "Komplette Badezimmerrenovierung aus einer Hand. Von der Planung bis zur Fliese – alles aus einer Hand.",
    included: ["Kostenlose Beratung", "Materialien inklusive", "Garantie 24 Monate"],
    availability: "Mo-Fr 8:00-17:00",
    reviewCount: "95+",
  },
  {
    slug: "gartenpflege",
    title: "Gartenpflege",
    category: "Haus & Garten",
    price: "35",
    img: "/images/card-garten.png",
    description:
      "Regelmäßige Gartenpflege für ein gepflegtes Grün. Heckenschnitt, Rasenpflege und saisonale Arbeiten.",
    included: ["Kostenlose Beratung", "Grünschnitt-Entsorgung", "Flexible Termine"],
    availability: "Mo-Sa 7:00-19:00",
    reviewCount: "260+",
  },
  {
    slug: "malerarbeiten",
    title: "Malerarbeiten",
    category: "Haus & Garten",
    price: "35",
    img: "/images/card-maler.png",
    description:
      "Saubere Malerarbeiten für Innen und Außen. Streichen, Tapezieren und Spachteln vom Profi.",
    included: ["Kostenlose Beratung", "Materialien inklusive", "Garantie 12 Monate"],
    availability: "Mo-Sa 8:00-18:00",
    reviewCount: "175+",
  },
  {
    slug: "reinigungsservice",
    title: "Reinigungsservice",
    category: "Reinigung",
    price: "35",
    img: "/images/card-reinigung.png",
    description:
      "Gründliche Reinigung für Haushalt und Büro. Zuverlässig, diskret und nach Ihren Wünschen.",
    included: ["Kostenlose Beratung", "Reinigungsmittel inklusive", "Flexible Termine"],
    availability: "Mo-So 7:00-20:00",
    reviewCount: "400+",
  },
  {
    slug: "it-support",
    title: "IT-Support",
    category: "IT & Technik",
    price: "35",
    img: "/images/card-it.png",
    description:
      "Schnelle Hilfe bei allen IT-Problemen. Einrichtung, Reparatur und Wartung von Hard- und Software.",
    included: ["Kostenlose Beratung", "Ferndiagnose möglich", "Garantie 6 Monate"],
    availability: "Mo-So 8:00-22:00",
    reviewCount: "130+",
  },
  {
    slug: "moebelaufbau",
    title: "Möbelaufbau",
    category: "Handwerk",
    price: "35",
    img: "/images/card-moebel.png",
    description:
      "Schneller und sicherer Aufbau Ihrer Möbel. Vom Kleiderschrank bis zur kompletten Wohnungseinrichtung.",
    included: ["Kostenlose Beratung", "Werkzeug inklusive", "Garantie 12 Monate"],
    availability: "Mo-Sa 8:00-19:00",
    reviewCount: "150+",
  },
  {
    slug: "hausgeraete-reparatur",
    title: "Hausgeräte Reparatur",
    category: "IT & Technik",
    price: "35",
    img: "/images/card-geraete.png",
    description:
      "Reparatur von Waschmaschine, Trockner & Co. Schnelle Diagnose und fachgerechte Instandsetzung.",
    included: ["Kostenlose Beratung", "Ersatzteile auf Lager", "Garantie 12 Monate"],
    availability: "Mo-Sa 8:00-18:00",
    reviewCount: "120+",
  },
]

export type Testimonial = {
  name: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael S.",
    quote:
      "Schneller Service, fairer Preis und sehr professionell. Unser Rohrbruch wurde innerhalb von 2 Stunden behoben. Absolut empfehlenswert!",
    avatar: "/images/avatar-1.png",
  },
  {
    name: "Sandra K.",
    quote:
      "Sehr freundliches Team und tadellose Arbeit. Die Ratenzahlung hat alles so unkompliziert gemacht. Ich komme gerne wieder!",
    avatar: "/images/avatar-2.png",
  },
  {
    name: "Thomas B.",
    quote:
      "Pünktlich, sauber und transparent bei den Kosten. Genau so wünscht man sich einen Handwerker. Klare Empfehlung von mir.",
    avatar: "/images/avatar-3.png",
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
