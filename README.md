# World History Documentation

An interactive web application exploring civilizations, empires, and cultures throughout human history. Built with Next.js and deployed to GitHub Pages as a static site.

## Overview

The site presents world history through multiple perspectives:

- **World Timeline** — Chronological events across all civilizations, grouped by overlapping date ranges
- **Nations** — United States, South Korea, Japan, and more
- **Empires** — Chinese Empires, British Empire, French Empire
- **Ancient Civilizations** — Ancient Greece, Roman Civilization
- **Arts & Culture** — Chinese porcelain, poetry & painting, Renaissance, French Impressionism, Greek sculpture, Islamic geometric art
- **Historical Glossary** — Reference definitions for key historical terms (A-Z with search and alphabet navigation)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with tabbed navigation (World Timeline, Nations, Empires, Ancient Civilizations, Arts & Culture) |
| `/glossary` | Searchable glossary of historical terms grouped by letter |
| `/admin` | Admin tool for generating JSON entries for history and glossary data files |

## Tech Stack

- **Framework**: Next.js 14 with static export (`output: 'export'`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with a warm parchment color scheme
- **UI Components**: Radix UI primitives (Tabs, Dialog, Scroll Area) with shadcn/ui wrappers
- **Icons**: lucide-react
- **Fonts**: DM Sans (sans-serif), Source Serif 4 (serif)
- **Deployment**: GitHub Pages (static export to `out/` directory)

## Project Structure

```
history_project/
├── pages/
│   ├── _app.tsx              # App wrapper (fonts, global CSS)
│   ├── index.tsx             # Home page (tabs, search, card grid)
│   ├── glossary.tsx          # Glossary page (A-Z nav, search, term cards)
│   └── admin.tsx             # Admin panel (JSON generation forms)
├── src/
│   ├── components/
│   │   ├── ui/               # shadcn/ui components (Badge, Button, Card, Dialog, Tabs, Timeline)
│   │   ├── CountryCard.tsx   # Card component for nations/empires/civilizations
│   │   ├── CultureGallery.tsx# Arts & Culture gallery
│   │   ├── DynastyDetailModal.tsx # Dynasty detail overlay
│   │   ├── EmptySearchState.tsx   # Shared empty search results component
│   │   ├── ScrollToTopButton.tsx  # Scroll-to-top with intersection observer
│   │   ├── SearchBar.tsx     # Shared search input component
│   │   ├── TimelineModal.tsx # Timeline detail view for a civilization
│   │   ├── WorldMap.tsx      # Dotted world map visualization
│   │   └── WorldTimeline.tsx # Aggregated world timeline view
│   ├── data/
│   │   ├── history.json      # All history events, dynasty data, and country cards
│   │   ├── historyData.ts    # TypeScript interfaces and typed imports from history.json
│   │   ├── glossary.json     # Glossary term definitions (50 entries, A-Y)
│   │   └── glossaryData.ts   # GlossaryTerm interface and typed import from glossary.json
│   ├── lib/
│   │   └── utils.ts          # Utility functions (cn for class merging)
│   └── styles/
│       └── globals.css       # CSS variables, custom header/search styles, animations
├── next.config.js            # Static export config, GitHub Pages basePath
├── tailwind.config.ts        # Tailwind theme (parchment color scale, fonts)
├── tsconfig.json             # TypeScript config (path alias: @/* → ./src/*)
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Development
```bash
pnpm install
pnpm dev
```
Visit `http://localhost:3000`.

### Build
```bash
pnpm build
```
Static files are generated in the `out/` directory.

### Deploy to GitHub Pages
```bash
pnpm deploy
```

## Data Files

### `src/data/history.json`
Contains all historical content structured as:
- `historyData` — Events per country (keyed by country ID)
- `dynastyData` — Chinese dynasty details with bilingual content
- `countryCards` — Card metadata for nations, empires, and civilizations

### `src/data/glossary.json`
Flat array of glossary term objects:
```json
{
  "id": "cold-war",
  "term": "Cold War",
  "definition": "Period of sustained geopolitical tension...",
  "tags": ["superpowers", "communism", "capitalism"]
}
```

### Admin Panel
The `/admin` page provides forms to generate properly formatted JSON for:
- **Country events** — entries for `history.json` → `historyData.[country].events`
- **Dynasty data** — entries for `history.json` → `dynastyData`
- **Glossary terms** — entries for `glossary.json`

## Design

The site uses a warm, scholarly aesthetic inspired by historical manuscripts:
- Parchment background gradients with subtle noise texture
- Amber/brown color palette using HSL variables
- Cards with hover lift effects and amber accent borders
- Responsive layout (single column on mobile, up to 3 columns on desktop)
- Mobile-optimized touch targets and horizontally scrollable alphabet navigation

## License

This project is open source and available for educational use.
