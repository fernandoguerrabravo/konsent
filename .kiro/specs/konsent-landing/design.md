# Implementation Plan

## Overview

This document describes the technical implementation plan for the Konsent landing page — a Next.js application using Pages Router, TypeScript, and Tailwind CSS. The page is a single marketing landing page with componentized architecture, responsive design, and a demo scheduling modal.

## Architecture

### Technology Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

### Project Structure

```
konsent/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IndustryTabs.tsx
│   │   │   ├── ChallengeSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── BlockchainSection.tsx
│   │   │   ├── ModulesSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Tab.tsx
│   │   └── DemoModal.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
└── package.json
```

### Component Architecture

```
index.tsx (page)
├── Navbar
│   └── Button (Agendar demo)
├── HeroSection
│   ├── Badge (x3)
│   └── BlockchainVisualization (inline)
├── IndustryTabs
│   └── Tab (x6)
├── ChallengeSection
│   └── Card (x3 stat cards)
├── SolutionSection
│   └── Card (x6 feature cards)
├── BlockchainSection
│   └── IntegrityChecker (inline)
├── ModulesSection
│   └── Card (x6 module cards)
├── CTASection
│   └── Button
├── Footer
└── DemoModal
    └── Modal (wrapper)
```

## Components

### Layout Components

#### Navbar (`src/components/layout/Navbar.tsx`)

- Fixed position at top (`fixed top-0 z-50`)
- Contains brand name/logo on the left
- Desktop: horizontal nav links + CTA button
- Mobile: hamburger menu toggle with slide-down menu
- Smooth scroll to sections via anchor IDs
- Props: `onOpenDemo: () => void`

#### Footer (`src/components/layout/Footer.tsx`)

- Site navigation links organized in columns
- Copyright text
- Responsive grid layout

### Section Components

#### HeroSection (`src/components/sections/HeroSection.tsx`)

- Full-viewport height section
- Headline with gradient or accent text for "Ley N° 21.719"
- Subheadline paragraph
- Two CTA buttons (primary: "Agendar demo", secondary: "Conocer más")
- Three feature badges using Badge component
- Blockchain visualization card showing connected blocks with truncated hashes
- Props: `onOpenDemo: () => void`

#### IndustryTabs (`src/components/sections/IndustryTabs.tsx`)

- Horizontal scrollable tab bar
- Six tabs: Retail, Salud, Finanzas, Servicios, Tecnología, Logística
- Active tab state management with `useState`
- Content area below tabs changes based on selection
- Props: none (self-contained state)

#### ChallengeSection (`src/components/sections/ChallengeSection.tsx`)

- Section ID: `desafio`
- Three stat cards in a responsive grid
- Each card: large number/value, label, description
- Stats: "20,000 UTM", "30 días", "8 principios"
- Props: none

#### SolutionSection (`src/components/sections/SolutionSection.tsx`)

- Section ID: `solucion`
- Six feature cards in a 2x3 or 3x2 responsive grid
- Each card: icon, title, description
- Features: Consentimiento granular, Derechos ARCO+, Trazabilidad blockchain, Titulares extranjeros, Alertas de plazos, Portal web + app móvil
- Props: none

#### BlockchainSection (`src/components/sections/BlockchainSection.tsx`)

- Section ID: `blockchain`
- Three explanation blocks: SHA-256 hashing, block chaining, real-time verification
- Visual integrity checker component showing:
  - Block with hash value
  - Chain connection visualization
  - Verification status indicator (checkmark/valid)
- Props: none

#### ModulesSection (`src/components/sections/ModulesSection.tsx`)

- Section ID: `modulos`
- Six module cards in responsive grid
- Each card: icon, title, description
- Modules: Portal de privacidad, Formulario de consentimiento, Panel del titular, Panel de administración, App móvil, Documentos legales
- Props: none

#### CTASection (`src/components/sections/CTASection.tsx`)

- Prominent heading inviting to schedule demo
- CTA button that opens Demo_Modal
- Contact information (email, phone)
- Props: `onOpenDemo: () => void`

### UI Components

#### Button (`src/components/ui/Button.tsx`)

- Variants: `primary`, `secondary`, `outline`
- Sizes: `sm`, `md`, `lg`
- Props: `variant`, `size`, `onClick`, `children`, `className`, `type`

#### Card (`src/components/ui/Card.tsx`)

- Reusable card container with padding, border, shadow
- Props: `children`, `className`

#### Badge (`src/components/ui/Badge.tsx`)

- Small inline badge with icon and label
- Props: `icon`, `label`, `className`

#### Modal (`src/components/ui/Modal.tsx`)

- Overlay backdrop with centered content
- Handles ESC key to close
- Focus trap within modal
- Props: `isOpen`, `onClose`, `children`, `title`

#### Tab (`src/components/ui/Tab.tsx`)

- Individual tab button with active state
- Props: `label`, `isActive`, `onClick`

### Feature Components

#### DemoModal (`src/components/DemoModal.tsx`)

- Uses Modal wrapper component
- Form with fields:
  - `nombre` (text input, required)
  - `empresa` (text input, required)
  - `correo` (email input, required)
  - `teléfono` (tel input, optional)
  - `industria` (select dropdown, required)
- Industry options: Retail, Salud, Finanzas, Servicios, Tecnología, Logística
- Client-side validation with error messages
- Submit handler (currently logs to console / shows success state)
- Props: `isOpen: boolean`, `onClose: () => void`

## State Management

State is minimal and local — no external state management library needed:

- **Modal open/close**: `useState<boolean>` in `index.tsx`, passed down as props
- **Active industry tab**: `useState<string>` in IndustryTabs component
- **Mobile menu toggle**: `useState<boolean>` in Navbar component
- **Form state**: `useState` for form fields and validation errors in DemoModal

## Styling Strategy

### Tailwind Configuration

- Custom color palette for Konsent brand (primary blue/purple, accents)
- Custom font family (Inter or system fonts)
- Extended spacing and border-radius values as needed
- Container configuration with centered padding

### Responsive Breakpoints

- Mobile: default (< 768px)
- Tablet: `md` (768px+)
- Desktop: `lg` (1024px+)
- Large desktop: `xl` (1280px+)

### Key Design Patterns

- Dark sections alternating with light for visual hierarchy
- Gradient backgrounds for hero and CTA sections
- Card-based layouts with subtle shadows and borders
- Smooth scroll behavior (`scroll-smooth` on html)
- Transition animations on hover states

## Page Assembly

The `index.tsx` page assembles all components:

```tsx
export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="scroll-smooth">
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />
      <main>
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <IndustryTabs />
        <ChallengeSection />
        <SolutionSection />
        <BlockchainSection />
        <ModulesSection />
        <CTASection onOpenDemo={() => setIsDemoOpen(true)} />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
```

## Accessibility Considerations

- Semantic HTML elements (`nav`, `main`, `section`, `footer`, `dialog`)
- ARIA labels on interactive elements
- Focus management for modal (trap focus, restore on close)
- Keyboard navigation (ESC to close modal, Tab through links)
- Sufficient color contrast (WCAG AA minimum)
- Alt text on decorative vs meaningful images
- Skip-to-content link

## Performance Considerations

- No external image dependencies for initial implementation (use CSS/SVG for visuals)
- Minimal JavaScript — static content with light interactivity
- Tailwind CSS purging removes unused styles in production
- Next.js automatic code splitting per page
- Font optimization via `next/font`
