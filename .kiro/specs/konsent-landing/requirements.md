# Requirements Document

## Introduction

Konsent Landing Page — a modern, responsive landing page for "Konsent," a consent and data rights management platform designed for Chilean law compliance (Ley N° 21.719). The page is built with Next.js (Pages Router), TypeScript, and Tailwind CSS. It communicates the platform's value proposition, features, modules, and blockchain-based differentiator to potential enterprise clients, and provides a clear call-to-action for scheduling product demos.

## Glossary

- **Landing_Page**: The single-page marketing website for Konsent built as a Next.js application using the Pages Router
- **Navigation_Bar**: The fixed top navigation component containing section links and the demo CTA button
- **Hero_Section**: The primary above-the-fold section containing the headline, subheadline, CTA buttons, feature badges, and blockchain visualization
- **Industry_Tabs**: A tabbed component displaying supported industries (Retail, Salud, Finanzas, Servicios, Tecnología, Logística)
- **Challenge_Section**: The section presenting regulatory compliance statistics and urgency (max fine, response time, mandatory principles)
- **Solution_Section**: The section showcasing six platform feature cards
- **Blockchain_Section**: The section explaining the SHA-256 hashing differentiator with visual integrity verification
- **Modules_Section**: The section displaying six platform modules with descriptions
- **CTA_Section**: The bottom call-to-action section with demo scheduling prompt and contact info
- **Footer**: The page footer containing navigation links and copyright information
- **Demo_Modal**: The modal dialog for the demo scheduling form with input fields
- **Responsive_Layout**: The adaptive layout system that adjusts content presentation across mobile, tablet, and desktop viewports
- **Feature_Badge**: A small visual indicator in the Hero_Section highlighting a key platform attribute

## Requirements

### Requirement 1: Project Setup and Architecture

**User Story:** As a developer, I want the project to use Next.js with Pages Router, TypeScript, and Tailwind CSS, so that the codebase follows modern frontend practices with type safety and utility-first styling.

#### Acceptance Criteria

1. THE Landing_Page SHALL use Next.js with Pages Router as the application framework
2. THE Landing_Page SHALL use TypeScript for all source files
3. THE Landing_Page SHALL use Tailwind CSS as the styling solution
4. THE Landing_Page SHALL render all text content in Spanish

### Requirement 2: Navigation Bar

**User Story:** As a visitor, I want a fixed navigation bar with section links and a demo button, so that I can navigate the page and quickly access the demo scheduling form.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL display the Konsent logo or brand name
2. THE Navigation_Bar SHALL contain navigation links to "El desafío", "Solución", "Blockchain", and "Módulos" sections
3. THE Navigation_Bar SHALL contain a CTA button labeled "Agendar demo" that opens the Demo_Modal
4. WHEN a navigation link is clicked, THE Navigation_Bar SHALL scroll the page to the corresponding section
5. THE Navigation_Bar SHALL remain fixed at the top of the viewport during scrolling
6. WHEN the viewport width is below the tablet breakpoint, THE Navigation_Bar SHALL collapse navigation links into a mobile menu

### Requirement 3: Hero Section

**User Story:** As a visitor, I want to immediately understand Konsent's value proposition for Ley N° 21.719 compliance, so that I can evaluate whether the platform meets my organization's needs.

#### Acceptance Criteria

1. THE Hero_Section SHALL display a headline communicating Ley N° 21.719 compliance capability
2. THE Hero_Section SHALL display a subheadline elaborating on the platform's purpose
3. THE Hero_Section SHALL contain two CTA buttons for user engagement
4. THE Hero_Section SHALL display three Feature_Badge components: "Vigencia", "Multi-industria", and "Implementación llave en mano"
5. THE Hero_Section SHALL display a blockchain visualization card showing blocks with hash values

### Requirement 4: Industry Tabs

**User Story:** As a visitor, I want to see which industries Konsent supports, so that I can determine if the platform is relevant to my sector.

#### Acceptance Criteria

1. THE Industry_Tabs SHALL display tabs for six industries: Retail, Salud, Finanzas, Servicios, Tecnología, and Logística
2. WHEN a tab is selected, THE Industry_Tabs SHALL visually indicate the active tab
3. THE Industry_Tabs SHALL display relevant content or context for the selected industry

### Requirement 5: Challenge Section

**User Story:** As a visitor, I want to understand the regulatory compliance challenges, so that I feel urgency to adopt a compliance solution.

#### Acceptance Criteria

1. THE Challenge_Section SHALL be identifiable by the heading "El desafío"
2. THE Challenge_Section SHALL display the statistic "20,000 UTM" as the maximum fine
3. THE Challenge_Section SHALL display the statistic "30 días" as the response deadline
4. THE Challenge_Section SHALL display the statistic "8 principios" as the number of mandatory principles
5. THE Challenge_Section SHALL provide contextual descriptions for each statistic

### Requirement 6: Solution Section

**User Story:** As a visitor, I want to see the platform's key features, so that I understand how Konsent addresses compliance challenges.

#### Acceptance Criteria

1. THE Solution_Section SHALL be identifiable by the heading "La solución"
2. THE Solution_Section SHALL display six feature cards with the following titles: "Consentimiento granular", "Derechos ARCO+", "Trazabilidad blockchain", "Titulares extranjeros", "Alertas de plazos", and "Portal web + app móvil"
3. THE Solution_Section SHALL provide a description for each feature card
4. THE Solution_Section SHALL display an icon or visual indicator for each feature card

### Requirement 7: Blockchain Differentiator Section

**User Story:** As a visitor, I want to understand how blockchain technology ensures data integrity, so that I trust the platform's compliance guarantees.

#### Acceptance Criteria

1. THE Blockchain_Section SHALL explain SHA-256 hashing as the data integrity mechanism
2. THE Blockchain_Section SHALL explain block chaining as the immutability mechanism
3. THE Blockchain_Section SHALL explain real-time verification capabilities
4. THE Blockchain_Section SHALL display a visual integrity checker component illustrating block verification

### Requirement 8: Modules Section

**User Story:** As a visitor, I want to see all platform modules, so that I understand the full scope of functionality available.

#### Acceptance Criteria

1. THE Modules_Section SHALL display six module cards with the following titles: "Portal de privacidad", "Formulario de consentimiento", "Panel del titular", "Panel de administración", "App móvil", and "Documentos legales"
2. THE Modules_Section SHALL provide a description for each module card
3. THE Modules_Section SHALL display a visual indicator or icon for each module card

### Requirement 9: CTA Section

**User Story:** As a visitor, I want a clear final call-to-action with contact information, so that I can schedule a demo or reach out directly.

#### Acceptance Criteria

1. THE CTA_Section SHALL display a prompt to schedule a demo
2. THE CTA_Section SHALL contain a button that opens the Demo_Modal
3. THE CTA_Section SHALL display contact information for direct outreach

### Requirement 10: Footer

**User Story:** As a visitor, I want a footer with navigation links and legal information, so that I can access secondary pages and know the site's ownership.

#### Acceptance Criteria

1. THE Footer SHALL display navigation links to relevant pages or sections
2. THE Footer SHALL display copyright information for Konsent

### Requirement 11: Demo Scheduling Modal

**User Story:** As a visitor, I want a demo scheduling form in a modal dialog, so that I can request a product demonstration without leaving the page.

#### Acceptance Criteria

1. WHEN the "Agendar demo" button is clicked, THE Demo_Modal SHALL open as an overlay dialog
2. THE Demo_Modal SHALL contain input fields for: nombre (name), empresa (company), correo (email), teléfono (phone), and industria (industry dropdown)
3. THE Demo_Modal SHALL contain a submit button to send the demo request
4. WHEN the close action is triggered, THE Demo_Modal SHALL close and return focus to the triggering element
5. IF a required field is left empty on submission, THEN THE Demo_Modal SHALL display a validation message for the empty field

### Requirement 12: Responsive Design

**User Story:** As a visitor on any device, I want the page to adapt to my screen size, so that I have an optimal viewing experience on mobile, tablet, and desktop.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL adapt the grid layout from single-column on mobile to multi-column on desktop
2. THE Responsive_Layout SHALL adjust typography sizes for readability across viewports
3. THE Responsive_Layout SHALL ensure all interactive elements meet minimum touch target size of 44x44 pixels on mobile
4. THE Responsive_Layout SHALL hide or reorganize non-essential visual elements on mobile to prioritize content

### Requirement 13: Componentized Architecture

**User Story:** As a developer, I want the page built with reusable, well-structured components, so that the codebase is maintainable and extendable.

#### Acceptance Criteria

1. THE Landing_Page SHALL organize UI elements into separate React components for each major section (Navigation_Bar, Hero_Section, Industry_Tabs, Challenge_Section, Solution_Section, Blockchain_Section, Modules_Section, CTA_Section, Footer, Demo_Modal)
2. THE Landing_Page SHALL place shared components in a dedicated components directory
3. THE Landing_Page SHALL use TypeScript interfaces or types for component props
