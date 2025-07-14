# World History Documentation

A modern, interactive website showcasing world history using shadcn/ui components and Next.js.

## Features

- **Modern UI Components**: Built with shadcn/ui for a consistent, accessible design system
- **Interactive Timeline**: Click on any country/empire to explore detailed historical timelines
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Smooth Animations**: Enhanced with hover effects and transitions
- **Organized Content**: Categorized into Nations, Empires, Ancient Civilizations, and Arts & Culture

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser** and visit `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   ├── CountryCard.tsx    # Country/empire cards
│   └── TimelineModal.tsx  # Timeline modal dialog
├── data/
│   └── historyData.ts     # Historical data and content
├── lib/
│   └── utils.ts          # Utility functions
└── styles/
    └── globals.css       # Global styles and theme
```

## Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Radix UI**: Unstyled, accessible components
- **Lucide React**: Beautiful icons

## Theme

The website uses a warm, parchment-inspired color scheme that evokes the feeling of ancient documents and historical manuscripts. The design emphasizes:

- Earth tones and warm colors
- Subtle gradients and shadows
- Smooth animations and transitions
- Clear typography and hierarchy

## Adding New Content

To add new historical content:

1. Update `src/data/historyData.ts` with new country data
2. Add the country to the appropriate category in `countryCards`
3. The timeline modal will automatically display the new content

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.