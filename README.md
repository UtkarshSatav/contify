# Contify

## Deployment
**Live Link:** [https://contify-jade.vercel.app/](https://contify-jade.vercel.app/)

## Recent Changes & Enhancements

### UI/UX Improvements
- **Logo Carousel**: Refactored `LogoCarousel.tsx` to implement an infinite scrolling, multi-column layout for a dynamic visual effect.
- **About Section**: Enhanced the layout and styling of the "Who We Are" section in `AboutSection.tsx` for better readability and presentation.
- **Navbar**: Updated the navigation bar background to black to match the overall design aesthetic.

### Animations & Interactions
- **Hero Section**: Integrated Framer Motion animations for headlines, descriptions, bot cards, and visual elements in `Hero.tsx`.
- **Early Access**: Added scroll-triggered animations to the `EarlyAccess.tsx` component.
- **Smooth Scrolling**: Implemented `lenis` for high-performance smooth scrolling across the entire application (`SmoothScroller.tsx`).

### Bug Fixes
- Resolved SWC binding errors to ensure stable development server startup.

---

## Getting Started

This is a [Next.js](https://nextjs.org) project.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
