# Tasks

## Task 1: Project Initialization

- [x] 1.1 Initialize a new Next.js project with Pages Router, TypeScript, and Tailwind CSS in the workspace root
- [x] 1.2 Configure `tailwind.config.ts` with custom Konsent brand colors (primary blue/purple palette), font family (Inter via next/font), and container settings
- [x] 1.3 Set up `src/styles/globals.css` with Tailwind directives and base styles (smooth scrolling, default font)
- [x] 1.4 Create `src/pages/_app.tsx` with global styles import and layout wrapper
- [x] 1.5 Create `src/pages/_document.tsx` with Spanish lang attribute (`<html lang="es">`)
- [x] 1.6 Create `src/types/index.ts` with shared TypeScript interfaces (ButtonProps, CardProps, BadgeProps, ModalProps, TabProps, DemoFormData)

## Task 2: UI Components

- [x] 2.1 Create `src/components/ui/Button.tsx` with variants (primary, secondary, outline), sizes (sm, md, lg), and typed props
- [x] 2.2 Create `src/components/ui/Card.tsx` as a reusable container with padding, border, shadow, and className prop
- [x] 2.3 Create `src/components/ui/Badge.tsx` with icon and label props for feature indicators
- [x] 2.4 Create `src/components/ui/Modal.tsx` with overlay backdrop, ESC key handling, focus trap, and isOpen/onClose/title/children props
- [x] 2.5 Create `src/components/ui/Tab.tsx` with label, isActive, and onClick props

## Task 3: Layout Components

- [x] 3.1 Create `src/components/layout/Navbar.tsx` with fixed positioning, brand name, desktop nav links (El desafío, Solución, Blockchain, Módulos), CTA button, mobile hamburger menu, and smooth scroll navigation
- [x] 3.2 Create `src/components/layout/Footer.tsx` with navigation link columns, copyright text, and responsive grid layout

## Task 4: Section Components — Hero and Industry

- [x] 4.1 Create `src/components/sections/HeroSection.tsx` with headline about Ley N° 21.719, subheadline, two CTA buttons, three feature badges (Vigencia, Multi-industria, Implementación llave en mano), and blockchain visualization card showing blocks with hash values
- [x] 4.2 Create `src/components/sections/IndustryTabs.tsx` with six tabs (Retail, Salud, Finanzas, Servicios, Tecnología, Logística), active tab state, and content area for selected industry

## Task 5: Section Components — Challenge and Solution

- [x] 5.1 Create `src/components/sections/ChallengeSection.tsx` with section ID "desafio", heading "El desafío", and three stat cards (20,000 UTM max fine, 30 días response deadline, 8 principios mandatory)
- [x] 5.2 Create `src/components/sections/SolutionSection.tsx` with section ID "solucion", heading "La solución", and six feature cards (Consentimiento granular, Derechos ARCO+, Trazabilidad blockchain, Titulares extranjeros, Alertas de plazos, Portal web + app móvil) with icons and descriptions

## Task 6: Section Components — Blockchain and Modules

- [x] 6.1 Create `src/components/sections/BlockchainSection.tsx` with section ID "blockchain", three explanation blocks (SHA-256 hashing, block chaining, real-time verification), and visual integrity checker component
- [x] 6.2 Create `src/components/sections/ModulesSection.tsx` with section ID "modulos" and six module cards (Portal de privacidad, Formulario de consentimiento, Panel del titular, Panel de administración, App móvil, Documentos legales) with icons and descriptions

## Task 7: CTA Section and Demo Modal

- [x] 7.1 Create `src/components/sections/CTASection.tsx` with demo scheduling prompt heading, CTA button, and contact information
- [x] 7.2 Create `src/components/DemoModal.tsx` using Modal wrapper with form fields (nombre, empresa, correo, teléfono, industria dropdown), client-side validation with error messages, and submit handler

## Task 8: Page Assembly and Integration

- [x] 8.1 Create `src/pages/index.tsx` assembling all components with modal state management (useState for isDemoOpen), passing onOpenDemo prop to Navbar, HeroSection, and CTASection
- [x] 8.2 Verify the application builds successfully with `npm run build` and fix any TypeScript or build errors
