# 🎯 Bingo

A pixel-art styled bingo board for tracking your yearly goals and resolutions, built with React, TypeScript, Vite, and Tailwind CSS.

🔗 **[Live Preview](https://hankadev.github.io/bingo/)**

## ✨ Features

- 🎨 Retro pixel-art design with custom Press Start 2P font
- 📱 Fully responsive layout
- 🎯 5x5 bingo grid
- 📊 Progress tracking for incomplete items
- ✅ Visual completion indicators with animated cross overlay
- 🎨 Custom color theme with vibrant pixel aesthetics

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling with @tailwindcss/vite plugin
- **Press Start 2P** - Pixel-perfect Google Font

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── bingo-card.tsx    # Individual bingo card component
│   ├── bingo-grid.tsx    # 5x5 grid layout
│   └── header.tsx        # Header with BINGO letters
├── data/
│   └── data.ts           # Bingo items data
├── App.tsx               # Main app component
├── main.tsx              # App entry point
└── index.css             # Global styles and Tailwind config
```

## 🎨 Customization

### Colors

Edit the color theme in `src/index.css`:

```css
@theme {
  --color-cyan: #00d4ff;
  --color-pink: #ff6eb4;
  --color-yellow: #ffdd00;
  --color-green: #22c55e;
  --color-red: #ff4444;
  --color-border: #555566;
  --color-background: #2a2a3a;
  --color-white: #f0f0f0;
  --color-card: #3a3a4a;
}
```

### Bingo Items

Update your bingo items in `src/data/data.ts`.

---

## ☕ About

This project was coded with coffee and AI.
