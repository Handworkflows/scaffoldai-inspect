# ScaffoldAI Inspect

ScaffoldAI Inspect ist eine digitale Arbeitsplattform für den Gerüstbau. Die Anwendung bündelt Projekte, Baustellenbesuche und deren Dokumentation in einem gemeinsamen Arbeitskontext. Ziel ist ein durchgängiger, praxisnaher Prozess vom ersten Baustellentermin bis zu Angebot und Abrechnung.

Der aktuelle Entwicklungsstand umfasst eine responsive Projektübersicht, einen Assistenten zur Projektanlage sowie projektbezogene Baustellenbesuche. Die Daten werden in dieser frühen Produktphase lokal im Browser gespeichert.

## Entwicklung

Voraussetzungen sind eine aktuelle Node.js-Version und npm.

```bash
npm install
npm run dev
```

Die Anwendung ist anschließend unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Qualitätsprüfung

```bash
npm run lint
npm run build
```

## Repositorystruktur

```text
scaffoldai-inspect/
├── app/                 Next.js App Router, Seiten und globale Styles
├── components/          Wiederverwendbare UI- und Layout-Komponenten
├── hooks/               Wiederverwendbare React Hooks
├── lib/                 Gemeinsame Hilfsfunktionen und lokale Persistenz
├── services/            Schnittstellen zu Anwendungsdiensten
├── types/               Zentrale TypeScript-Datenmodelle
├── public/              Statische Dateien
└── docs/
    ├── vision/          Produktvision und Leitprinzipien
    ├── roadmap/         Geplante Produktentwicklung
    ├── backlog/         Neue, noch nicht eingeplante Ideen
    ├── tickets/         Anforderungen einzelner Arbeitspakete
    ├── done/            Archiv abgeschlossener Tickets
    ├── knowledge/       Fachwissen aus dem Gerüstbau
    └── decisions/       Fachliche und technische Entscheidungen
```

## Dokumentation

- [Produktvision](docs/vision/PRODUCT_VISION.md)
- [Roadmap](docs/roadmap/ROADMAP.md)
- [Produkt-Backlog](docs/backlog/README.md)
- [Gerüstbauwissen](docs/knowledge/README.md)
- [Architekturentscheidungen](docs/decisions/README.md)
- [Abgeschlossene Tickets](docs/done/README.md)

## Technologie

- Next.js 16 mit App Router
- React 19
- TypeScript
- Tailwind CSS 4
- LocalStorage für die aktuelle lokale Persistenz
