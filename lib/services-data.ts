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
  {
    slug: "premium-haarbehandlung",
    title: "Premium Haarbehandlung",
    category: "Beauty",
    price: "85",
    img: "/images/card-haarbehandlung.png",
    description:
      "Luxuriöse Haarbehandlungen für gesundes, glänzendes Haar. Keratin, Botox, Olaplex und mehr.",
    included: ["Beratungsgespräch", "Premium-Produkte", "Nachsorge-Set"],
    availability: "Di-Sa 9:00-19:00",
    reviewCount: "95+",
  },
  {
    slug: "permanent-makeup",
    title: "Permanent Make-up",
    category: "Beauty",
    price: "120",
    img: "/images/card-permanent-makeup.png",
    description:
      "Professionelles Permanent Make-up für Augenbrauen, Lippen und Lidstrich. Langanhaltende Schönheit.",
    included: ["Beratungsgespräch", "Nachbesserung inkl.", "Pflegeset"],
    availability: "Di-Sa 10:00-18:00",
    reviewCount: "180+",
  },
  {
    slug: "haartransplantation",
    title: "Haartransplantation",
    category: "Beauty",
    price: "210",
    img: "/images/card-haartransplantation.png",
    description:
      "Moderne FUE-Haartransplantation für natürliche Ergebnisse. Diskrete Behandlung von Experten.",
    included: ["Voruntersuchung", "Nachsorge", "Garantie"],
    availability: "Nach Vereinbarung",
    reviewCount: "75+",
  },
  {
    slug: "laser-haarentfernung",
    title: "Laser Haarentfernung",
    category: "Beauty",
    price: "95",
    img: "/images/card-laser.png",
    description:
      "Dauerhafte Haarentfernung mit modernster Lasertechnologie. Sanft, effektiv und langanhaltend.",
    included: ["Beratungsgespräch", "Testbehandlung", "Nachsorge"],
    availability: "Mo-Sa 9:00-20:00",
    reviewCount: "220+",
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

/* ---------------- Booking configuration ---------------- */

export type BookingOption = { label: string; price?: number }

export type BookingField = {
  id: string
  label: string
  help: string
  type: "select" | "radio" | "checkbox"
  options: BookingOption[]
}

export type BookingConfig = {
  basePrice: number
  duration: string
  guarantee: string
  location: string
  tagline: string
  fields: BookingField[]
}

export const bookingConfigs: Record<string, BookingConfig> = {
  klempnerarbeiten: {
    basePrice: 90,
    duration: "1–2 Std.",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Schnell, sauber und zuverlässig. Wir beheben Ihr Problem fachgerecht.",
    fields: [
      {
        id: "art",
        label: "Art der Arbeit",
        help: "Wählen Sie die gewünschte Leistung aus.",
        type: "select",
        options: [
          { label: "Reparatur" },
          { label: "Neuinstallation", price: 40 },
          { label: "Wartung", price: -10 },
        ],
      },
      {
        id: "raum",
        label: "Einsatzort",
        help: "In welchem Raum soll gearbeitet werden?",
        type: "select",
        options: [{ label: "Badezimmer" }, { label: "Küche" }, { label: "Keller" }, { label: "Außenbereich", price: 20 }],
      },
      {
        id: "dringlichkeit",
        label: "Dringlichkeit",
        help: "Wie schnell benötigen Sie den Service?",
        type: "radio",
        options: [{ label: "Standardtermin" }, { label: "Express (24 Std.)", price: 50 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Materialpaket", price: 30 },
          { label: "Notdienst-Bereitschaft", price: 45 },
          { label: "Altteil-Entsorgung", price: 15 },
        ],
      },
    ],
  },
  elektroinstallation: {
    basePrice: 95,
    duration: "1–3 Std.",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Sichere und normgerechte Elektroarbeiten vom Fachbetrieb.",
    fields: [
      {
        id: "art",
        label: "Art der Installation",
        help: "Wählen Sie die gewünschte Arbeit aus.",
        type: "select",
        options: [
          { label: "Steckdose / Schalter" },
          { label: "Beleuchtung", price: 25 },
          { label: "Sicherungskasten", price: 80 },
          { label: "Verkabelung", price: 60 },
        ],
      },
      {
        id: "punkte",
        label: "Anzahl der Punkte",
        help: "Wie viele Anschlüsse sollen installiert werden?",
        type: "select",
        options: [{ label: "1–3 Punkte" }, { label: "4–6 Punkte", price: 50 }, { label: "7+ Punkte", price: 120 }],
      },
      {
        id: "dringlichkeit",
        label: "Dringlichkeit",
        help: "Wie schnell benötigen Sie den Service?",
        type: "radio",
        options: [{ label: "Standardtermin" }, { label: "Express (24 Std.)", price: 55 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Materialpaket", price: 35 },
          { label: "Prüfprotokoll", price: 25 },
          { label: "Smart-Home-Einrichtung", price: 60 },
        ],
      },
    ],
  },
  reifenwechsel: {
    basePrice: 80,
    duration: "30–45 Min.",
    guarantee: "12 Monate",
    location: "In Ihrer Werkstatt",
    tagline: "Schnell, sicher und professionell. Wir wechseln Ihre Reifen fachgerecht.",
    fields: [
      {
        id: "modell",
        label: "Fahrzeugmodell",
        help: "Wählen Sie das Modell Ihres Fahrzeugs aus.",
        type: "select",
        options: [
          { label: "BMW 3er" },
          { label: "VW Golf" },
          { label: "Audi A4" },
          { label: "Mercedes C-Klasse", price: 10 },
          { label: "SUV / Transporter", price: 25 },
        ],
      },
      {
        id: "groesse",
        label: "Reifengröße",
        help: "Bitte wählen Sie die Größe Ihrer Reifen aus.",
        type: "select",
        options: [
          { label: "15 Zoll", price: -10 },
          { label: "16 Zoll" },
          { label: "17 Zoll" },
          { label: "18 Zoll", price: 15 },
          { label: "19 Zoll", price: 30 },
        ],
      },
      {
        id: "anzahl",
        label: "Anzahl der Reifen",
        help: "Wählen Sie die Anzahl der zu wechselnden Reifen.",
        type: "radio",
        options: [{ label: "4 Reifen" }, { label: "2 Reifen", price: -30 }],
      },
      {
        id: "typ",
        label: "Reifentyp",
        help: "Wählen Sie den Typ Ihrer Reifen aus.",
        type: "select",
        options: [{ label: "Sommerreifen" }, { label: "Winterreifen" }, { label: "Ganzjahresreifen", price: 10 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Auswuchten", price: 20 },
          { label: "Entsorgung alte Reifen", price: 15 },
          { label: "Felgenreinigung", price: 10 },
        ],
      },
    ],
  },
  umzug: {
    basePrice: 160,
    duration: "3–6 Std.",
    guarantee: "Transportversichert",
    location: "Von Tür zu Tür",
    tagline: "Stressfreier Umzug mit erfahrenen Helfern – wir packen an.",
    fields: [
      {
        id: "groesse",
        label: "Wohnungsgröße",
        help: "Wie groß ist Ihre aktuelle Wohnung?",
        type: "select",
        options: [{ label: "1–2 Zimmer" }, { label: "3–4 Zimmer", price: 90 }, { label: "5+ Zimmer", price: 180 }],
      },
      {
        id: "etage",
        label: "Etage",
        help: "In welcher Etage befindet sich die Wohnung?",
        type: "select",
        options: [{ label: "Erdgeschoss" }, { label: "1.–3. OG", price: 40 }, { label: "4. OG+ ohne Aufzug", price: 90 }],
      },
      {
        id: "distanz",
        label: "Entfernung",
        help: "Wie weit ist der neue Wohnort entfernt?",
        type: "radio",
        options: [{ label: "Lokaler Umzug" }, { label: "Fernumzug (>50 km)", price: 120 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Verpackungsservice", price: 80 },
          { label: "Möbelmontage", price: 70 },
          { label: "Einlagerung (1 Monat)", price: 60 },
        ],
      },
    ],
  },
  kuechenmontage: {
    basePrice: 130,
    duration: "3–5 Std.",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Fachgerechte Montage Ihrer neuen Küche – präzise und sauber.",
    fields: [
      {
        id: "groesse",
        label: "Küchengröße",
        help: "Wie groß ist Ihre Küche?",
        type: "select",
        options: [{ label: "Kleine Küche" }, { label: "Mittlere Küche", price: 80 }, { label: "Große Küche", price: 160 }],
      },
      {
        id: "geraete",
        label: "Anzahl Geräte",
        help: "Wie viele Elektrogeräte sollen angeschlossen werden?",
        type: "select",
        options: [{ label: "0–2 Geräte" }, { label: "3–5 Geräte", price: 50 }, { label: "6+ Geräte", price: 110 }],
      },
      {
        id: "arbeitsplatte",
        label: "Arbeitsplatte",
        help: "Welche Arbeitsplatte soll montiert werden?",
        type: "radio",
        options: [{ label: "Standard-Zuschnitt" }, { label: "Stein-Zuschnitt", price: 90 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Altküche-Demontage", price: 70 },
          { label: "Wasseranschluss", price: 45 },
          { label: "Elektroanschluss", price: 55 },
        ],
      },
    ],
  },
  badezimmerrenovierung: {
    basePrice: 320,
    duration: "2–5 Tage",
    guarantee: "24 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Komplette Badsanierung aus einer Hand – von der Planung bis zur Fliese.",
    fields: [
      {
        id: "groesse",
        label: "Badgröße",
        help: "Wie groß ist Ihr Badezimmer?",
        type: "select",
        options: [{ label: "Klein (bis 5 m²)" }, { label: "Mittel (5–10 m²)", price: 250 }, { label: "Groß (über 10 m²)", price: 550 }],
      },
      {
        id: "umfang",
        label: "Umfang",
        help: "Wie umfangreich soll die Renovierung sein?",
        type: "select",
        options: [{ label: "Teilsanierung" }, { label: "Komplettsanierung", price: 400 }],
      },
      {
        id: "fliesen",
        label: "Fliesenqualität",
        help: "Welche Fliesen sollen verlegt werden?",
        type: "radio",
        options: [{ label: "Standard" }, { label: "Premium", price: 180 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Barrierefreier Umbau", price: 200 },
          { label: "Fußbodenheizung", price: 150 },
          { label: "Bauschutt-Entsorgung", price: 90 },
        ],
      },
    ],
  },
  gartenpflege: {
    basePrice: 60,
    duration: "1–3 Std.",
    guarantee: "Zufriedenheitsgarantie",
    location: "In Ihrem Garten",
    tagline: "Regelmäßige Pflege für ein gepflegtes Grün rund ums Jahr.",
    fields: [
      {
        id: "groesse",
        label: "Gartengröße",
        help: "Wie groß ist Ihr Garten?",
        type: "select",
        options: [{ label: "Bis 100 m²" }, { label: "100���300 m²", price: 40 }, { label: "Über 300 m²", price: 90 }],
      },
      {
        id: "haeufigkeit",
        label: "Häufigkeit",
        help: "Wie oft soll der Service erfolgen?",
        type: "select",
        options: [{ label: "Einmalig" }, { label: "Monatlich", price: -10 }, { label: "Wöchentlich", price: -20 }],
      },
      {
        id: "umfang",
        label: "Leistungsumfang",
        help: "Wählen Sie den gewünschten Umfang.",
        type: "radio",
        options: [{ label: "Basispflege" }, { label: "Komplettpflege", price: 50 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Heckenschnitt", price: 35 },
          { label: "Baumschnitt", price: 50 },
          { label: "Grünschnitt-Entsorgung", price: 25 },
        ],
      },
    ],
  },
  malerarbeiten: {
    basePrice: 110,
    duration: "Halber–ganzer Tag",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Saubere Malerarbeiten für Innen und Außen vom Profi.",
    fields: [
      {
        id: "flaeche",
        label: "Fläche",
        help: "Wie groß ist die zu streichende Fläche?",
        type: "select",
        options: [{ label: "Bis 20 m²" }, { label: "20–50 m²", price: 70 }, { label: "Über 50 m²", price: 160 }],
      },
      {
        id: "raeume",
        label: "Anzahl Räume",
        help: "Wie viele Räume sollen gestrichen werden?",
        type: "select",
        options: [{ label: "1 Raum" }, { label: "2–3 Räume", price: 90 }, { label: "4+ Räume", price: 200 }],
      },
      {
        id: "bereich",
        label: "Bereich",
        help: "Innen- oder Außenarbeiten?",
        type: "radio",
        options: [{ label: "Innen" }, { label: "Außen", price: 80 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Tapezieren", price: 60 },
          { label: "Spachtelarbeiten", price: 45 },
          { label: "Premium-Farbe", price: 40 },
        ],
      },
    ],
  },
  reinigungsservice: {
    basePrice: 55,
    duration: "2–4 Std.",
    guarantee: "Zufriedenheitsgarantie",
    location: "Bei Ihnen vor Ort",
    tagline: "Gründliche Reinigung für Haushalt und Büro – zuverlässig und diskret.",
    fields: [
      {
        id: "groesse",
        label: "Objektgröße",
        help: "Wie groß ist das zu reinigende Objekt?",
        type: "select",
        options: [{ label: "Bis 60 m²" }, { label: "60–120 m²", price: 35 }, { label: "Über 120 m²", price: 80 }],
      },
      {
        id: "haeufigkeit",
        label: "Häufigkeit",
        help: "Wie oft soll gereinigt werden?",
        type: "select",
        options: [{ label: "Einmalig" }, { label: "Wöchentlich", price: -15 }, { label: "Monatlich", price: -5 }],
      },
      {
        id: "objekt",
        label: "Objektart",
        help: "Handelt es sich um Haushalt oder Büro?",
        type: "radio",
        options: [{ label: "Haushalt" }, { label: "Büro / Gewerbe", price: 30 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Fensterreinigung", price: 30 },
          { label: "Grundreinigung", price: 50 },
          { label: "Reinigungsmittel inkl.", price: 15 },
        ],
      },
    ],
  },
  "it-support": {
    basePrice: 65,
    duration: "30–90 Min.",
    guarantee: "6 Monate",
    location: "Vor Ort oder remote",
    tagline: "Schnelle Hilfe bei allen IT-Problemen – verständlich erklärt.",
    fields: [
      {
        id: "problem",
        label: "Art des Problems",
        help: "Worum geht es bei Ihrem Anliegen?",
        type: "select",
        options: [
          { label: "Software-Problem" },
          { label: "Hardware-Defekt", price: 30 },
          { label: "Netzwerk / WLAN", price: 20 },
          { label: "Virus / Sicherheit", price: 40 },
        ],
      },
      {
        id: "geraete",
        label: "Anzahl Geräte",
        help: "Wie viele Geräte sind betroffen?",
        type: "select",
        options: [{ label: "1 Gerät" }, { label: "2–3 Geräte", price: 40 }, { label: "4+ Geräte", price: 90 }],
      },
      {
        id: "modus",
        label: "Durchführung",
        help: "Vor Ort oder per Fernwartung?",
        type: "radio",
        options: [{ label: "Fernwartung" }, { label: "Vor Ort", price: 35 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Datensicherung", price: 40 },
          { label: "Software-Installation", price: 25 },
          { label: "Express-Termin", price: 35 },
        ],
      },
    ],
  },
  moebelaufbau: {
    basePrice: 70,
    duration: "1–3 Std.",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Schneller und sicherer Aufbau Ihrer Möbel – ohne Stress.",
    fields: [
      {
        id: "typ",
        label: "Möbeltyp",
        help: "Welche Art von Möbel soll aufgebaut werden?",
        type: "select",
        options: [
          { label: "Regal / Kommode" },
          { label: "Bett", price: 20 },
          { label: "Kleiderschrank", price: 45 },
          { label: "Einbauküche", price: 110 },
        ],
      },
      {
        id: "anzahl",
        label: "Anzahl Möbelstücke",
        help: "Wie viele Möbel sollen aufgebaut werden?",
        type: "select",
        options: [{ label: "1 Stück" }, { label: "2–3 Stück", price: 50 }, { label: "4+ Stück", price: 120 }],
      },
      {
        id: "dringlichkeit",
        label: "Dringlichkeit",
        help: "Wie schnell benötigen Sie den Service?",
        type: "radio",
        options: [{ label: "Standardtermin" }, { label: "Express (24 Std.)", price: 40 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Altmöbel-Demontage", price: 40 },
          { label: "Verpackungs-Entsorgung", price: 15 },
          { label: "Wandmontage", price: 35 },
        ],
      },
    ],
  },
  "hausgeraete-reparatur": {
    basePrice: 70,
    duration: "45–90 Min.",
    guarantee: "12 Monate",
    location: "Bei Ihnen vor Ort",
    tagline: "Fachgerechte Reparatur von Waschmaschine, Trockner & Co.",
    fields: [
      {
        id: "geraet",
        label: "Gerät",
        help: "Welches Gerät soll repariert werden?",
        type: "select",
        options: [
          { label: "Waschmaschine" },
          { label: "Trockner", price: 10 },
          { label: "Geschirrspüler", price: 10 },
          { label: "Kühlschrank", price: 25 },
          { label: "Herd / Backofen", price: 20 },
        ],
      },
      {
        id: "marke",
        label: "Marke",
        help: "Welche Marke hat Ihr Gerät?",
        type: "select",
        options: [{ label: "Bosch / Siemens" }, { label: "AEG" }, { label: "Miele", price: 20 }, { label: "Andere" }],
      },
      {
        id: "dringlichkeit",
        label: "Dringlichkeit",
        help: "Wie schnell benötigen Sie den Service?",
        type: "radio",
        options: [{ label: "Standardtermin" }, { label: "Express (24 Std.)", price: 45 }],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Ersatzteile inkl.", price: 50 },
          { label: "Anfahrtspauschale", price: 20 },
          { label: "Garantieverlängerung", price: 30 },
        ],
      },
    ],
  },
  "premium-haarbehandlung": {
    basePrice: 1200,
    duration: "2–4 Std.",
    guarantee: "Zufriedenheitsgarantie",
    location: "Im Salon",
    tagline: "Luxuriöse Haarbehandlungen für gesundes, glänzendes Haar.",
    fields: [
      {
        id: "behandlung",
        label: "Art der Behandlung",
        help: "Wählen Sie die gewünschte Behandlung aus.",
        type: "select",
        options: [
          { label: "Keratin-Glättung" },
          { label: "Haar-Botox", price: 200 },
          { label: "Olaplex-Kur", price: -200 },
          { label: "Brazilian Blowout", price: 350 },
        ],
      },
      {
        id: "laenge",
        label: "Haarlänge",
        help: "Wie lang ist Ihr Haar?",
        type: "select",
        options: [
          { label: "Kurz (bis Kinn)" },
          { label: "Mittel (bis Schulter)", price: 150 },
          { label: "Lang (bis Brust)", price: 350 },
          { label: "Sehr lang (über Brust)", price: 550 },
        ],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Schnitt & Styling", price: 80 },
          { label: "Kopfhaut-Behandlung", price: 120 },
          { label: "Pflegeset für Zuhause", price: 95 },
        ],
      },
    ],
  },
  "permanent-makeup": {
    basePrice: 1400,
    duration: "2–3 Std.",
    guarantee: "Nachbesserung inkl.",
    location: "Im Studio",
    tagline: "Professionelles Permanent Make-up für langanhaltende Schönheit.",
    fields: [
      {
        id: "bereich",
        label: "Behandlungsbereich",
        help: "Welcher Bereich soll behandelt werden?",
        type: "select",
        options: [
          { label: "Augenbrauen (Microblading)" },
          { label: "Augenbrauen (Powder Brows)", price: 200 },
          { label: "Lippen", price: 300 },
          { label: "Lidstrich", price: -100 },
        ],
      },
      {
        id: "technik",
        label: "Technik",
        help: "Wählen Sie die gewünschte Technik.",
        type: "radio",
        options: [
          { label: "Standard" },
          { label: "Premium (3D-Effekt)", price: 400 },
        ],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Betäubungscreme Premium", price: 50 },
          { label: "Nachbesserung (2. Termin)", price: 200 },
          { label: "Pflegeset", price: 65 },
        ],
      },
    ],
  },
  "haartransplantation": {
    basePrice: 2500,
    duration: "4–8 Std.",
    guarantee: "Wachstumsgarantie",
    location: "In der Klinik",
    tagline: "Moderne FUE-Haartransplantation für natürliche Ergebnisse.",
    fields: [
      {
        id: "grafts",
        label: "Anzahl Grafts",
        help: "Wie viele Grafts werden benötigt?",
        type: "select",
        options: [
          { label: "Bis 1.500 Grafts" },
          { label: "1.500–2.500 Grafts", price: 800 },
          { label: "2.500–3.500 Grafts", price: 1600 },
          { label: "Über 3.500 Grafts", price: 2500 },
        ],
      },
      {
        id: "methode",
        label: "Methode",
        help: "Wählen Sie die Transplantationsmethode.",
        type: "radio",
        options: [
          { label: "FUE Standard" },
          { label: "Saphir-FUE", price: 600 },
          { label: "DHI (Direktimplantation)", price: 1200 },
        ],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "PRP-Behandlung", price: 350 },
          { label: "Medikamentenpaket (6 Monate)", price: 200 },
          { label: "Kontrolltermin inkl.", price: 150 },
        ],
      },
    ],
  },
  "laser-haarentfernung": {
    basePrice: 1100,
    duration: "30–90 Min.",
    guarantee: "Zufriedenheitsgarantie",
    location: "Im Studio",
    tagline: "Dauerhafte Haarentfernung mit modernster Lasertechnologie.",
    fields: [
      {
        id: "zone",
        label: "Behandlungszone",
        help: "Welche Zone soll behandelt werden?",
        type: "select",
        options: [
          { label: "Gesicht (Oberlippe, Kinn)" },
          { label: "Achseln", price: 100 },
          { label: "Bikinizone", price: 200 },
          { label: "Beine komplett", price: 600 },
          { label: "Rücken / Brust", price: 450 },
        ],
      },
      {
        id: "paket",
        label: "Behandlungspaket",
        help: "Wie viele Sitzungen möchten Sie buchen?",
        type: "select",
        options: [
          { label: "Einzelsitzung" },
          { label: "3er-Paket (10% Rabatt)", price: 200 },
          { label: "6er-Paket (20% Rabatt)", price: 350 },
          { label: "10er-Paket (30% Rabatt)", price: 500 },
        ],
      },
      {
        id: "zusatz",
        label: "Zusatzleistungen",
        help: "Wählen Sie optionale Leistungen aus.",
        type: "checkbox",
        options: [
          { label: "Kühlgel Premium", price: 30 },
          { label: "Nachpflege-Set", price: 45 },
          { label: "Zusätzliche Zone", price: 150 },
        ],
      },
    ],
  },
}

export function getBookingConfig(slug: string) {
  return bookingConfigs[slug]
}
