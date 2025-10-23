# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern personal portfolio website built with the T3 stack (Next.js, TypeScript, Tailwind CSS). The portfolio is a single-page application with smooth scrolling animations and interactive UI elements, designed to showcase a developer's projects, skills, and services.

## Technology Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom theme configuration
- **Animation**: Framer Motion, Locomotive Scroll, vanilla-tilt
- **UI Components**: Radix UI primitives, custom shadcn/ui components
- **3D Graphics**: Spline (via @splinetool/react-spline)
- **PWA**: next-pwa with service worker support
- **Package Manager**: pnpm (version 8.14.2)

## Development Commands

```bash
# Install dependencies (use pnpm, not npm)
pnpm install

# Start development server (runs on http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run TypeScript type checking without emitting files
pnpm type-check

# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

## Architecture

### Pages Structure
- Uses Next.js Pages Router (not App Router)
- Main entry point: `src/pages/index.tsx` - single-page portfolio with all sections
- App wrapper: `src/pages/_app.tsx` - configures global styles and fonts (DM Sans)

### Component Organization
- `src/components/Container.tsx` - Main layout wrapper with navigation and preloader
- `src/components/Footer.tsx` - Footer component
- `src/components/Preloader.tsx` - Loading animation on initial page load
- `src/components/ui/` - Reusable UI components (button, card, carousel) based on shadcn/ui patterns

### Styling Approach
- Global styles: `src/styles/globals.css`
- CSS Modules: Used for component-specific styles (e.g., `Container.module.css`, `Home.module.css`)
- Tailwind: Primary styling method with custom theme in `tailwind.config.ts`
- Custom fonts: Clash Grotesk (imported via `clash-grotesk.css`)

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)
- Always use path aliases when importing from src directory

### Environment Variables
- Managed through `@t3-oss/env-nextjs` with Zod validation in `src/env.js`
- Schema validation enforced at build time
- Skip validation with `SKIP_ENV_VALIDATION=true` (useful for Docker builds)

### Key Features & Implementation Details

1. **Smooth Scrolling**: Uses locomotive-scroll library initialized in `src/pages/index.tsx`. Sections have `data-scroll-section` attribute.

2. **Navigation**: Desktop and mobile navigation with smooth scroll-to-section behavior. Active nav links update based on scroll position using intersection observer pattern.

3. **Animations**:
   - Framer Motion for component animations and mobile menu transitions
   - vanilla-tilt for 3D card hover effects (applied to project cards)
   - Locomotive Scroll for parallax effects with `data-scroll` attributes

4. **Content Customization**: Portfolio content (projects, services, about stats) is defined as arrays at the top of `src/pages/index.tsx`. To customize the portfolio:
   - Modify the `projects`, `services`, and `aboutStats` arrays
   - Update personal information in the intro section
   - Adjust meta tags in `Container.tsx`

5. **PWA Support**: Configured via next-pwa in `next.config.js`. Service worker is disabled in development and generates to `public/service-worker.js` in production.

## TypeScript Configuration
- Strict mode enabled with `noUncheckedIndexedAccess`
- Target: ES2022
- Module resolution: Bundler (Next.js 14 standard)

## Code Style
- Prettier configured with Tailwind CSS plugin for class sorting
- ESLint with Next.js and TypeScript rules
- Strict TypeScript checking enabled

## Common Patterns

### Adding New Sections
1. Add section with `id` attribute and `data-scroll-section` in `src/pages/index.tsx`
2. Add nav link to `navLinks` array in `Container.tsx`
3. Use `data-scroll` and `data-scroll-speed` attributes for parallax effects

### Working with Images/Media
- Static assets go in `public/assets/`
- Use Next.js `<Image>` component for images
- Video files (.webm) are rendered with native `<video>` element (autoPlay, loop, muted)
- Spline 3D scenes loaded via `@splinetool/react-spline` in Suspense boundary

### UI Components
- Follow shadcn/ui patterns: components in `src/components/ui/`
- Use `cn()` utility from `src/lib/utils.ts` for conditional classNames (combines clsx + tailwind-merge)
- Leverage Tailwind's design tokens defined in `tailwind.config.ts`
