# TIS Frontend — Technical Review Guide

This document is a short interview-preparation guide for the Tulas International School frontend assignment. It describes the architecture and the main technical decisions in simple language.

## 1. Why React?

React makes the page easier to split into reusable components and sections. The application is mostly a single marketing page, so React is sufficient without adding a large state-management library.

## 2. Why Vite?

Vite provides a fast development server and a simple production build for a React frontend. It keeps the project lightweight and easy to deploy to Vercel.

## 3. Component architecture

The project separates repeated UI components from page sections:

- `components/` contains reusable UI and interaction pieces.
- `sections/` contains major homepage sections.
- `data/` contains repeated structured content and official destinations.
- `pages/` composes the homepage.
- `styles/` contains the shared design system and global styles.

The goal is not to create a component for every HTML element. Components are created where reuse or a clear responsibility makes the code easier to maintain.

## 4. Centralized data

`src/data/site.js` stores contact details, official URLs, navigation and image references. This prevents the same phone number, email or admission URL from being copied into several components.

## 5. Framer Motion

Framer Motion is used for purposeful UI motion: section reveals, navigation transitions, testimonial transitions, CTA interactions, the custom cursor and scroll progress.

The project uses `MotionConfig reducedMotion="user"` so Framer Motion can respect a user's reduced-motion preference.

## 6. Custom cursor

`CustomCursor.jsx` uses Framer Motion motion values and springs rather than React state for every pointer movement. This avoids unnecessary component re-renders during mouse movement. The cursor is only enabled when the device has a fine pointer and the user has not requested reduced motion.

## 7. Scroll reveals

`SectionReveal.jsx` is a small reusable wrapper. It uses `whileInView` and `viewport={{ once: true }}` so the animation runs when content enters the viewport and does not repeatedly animate while scrolling back and forth.

## 8. Scroll progress

`ScrollProgress.jsx` uses Framer Motion's `useScroll` and a spring around `scrollYProgress`. This keeps the indicator smooth without storing every scroll position in React state.

## 9. Responsive design

The CSS uses Grid, Flexbox, CSS custom properties, `clamp()` and media queries. Mobile is treated as a real layout rather than simply scaling the desktop version. The project is designed to work from small mobile widths through large desktop screens.

## 10. Accessibility

The page uses semantic landmarks, a skip link, accessible navigation labels, visible focus states, meaningful alt text and keyboard-friendly controls. The custom cursor is not used on touch devices, and motion is reduced when the user requests it.

## 11. Performance

The project avoids unnecessary dependencies and state. Motion is primarily based on transform/opacity. Below-the-fold imagery uses lazy loading where appropriate. Event listeners are cleaned up when components unmount.

## 12. Why no Redux?

There is no application-wide mutable state that justifies Redux. The page mostly displays structured content, while the small interactive states are local to components such as the mobile menu and testimonial carousel.

## 13. Why no Tailwind?

The assignment allows CSS, and this project uses a small custom design system. CSS variables make the colors, typography, spacing and container width consistent without adding another dependency.

## 14. Main technical challenge

The main challenge is combining a visually rich page with responsive behavior and accessible motion. The solution is to keep animations intentional, use reusable reveal logic, disable the custom cursor where it is not appropriate, and test the layout at multiple viewport widths.

## 15. Production checklist

Before submission:

- `npm install` succeeds.
- `npm run dev` works.
- `npm run build` succeeds.
- `npm run preview` works.
- Browser console has no project errors or warnings.
- The deployed Vercel site is tested on desktop and mobile.
- GitHub does not contain `node_modules`, `.env` files or other secrets.
- Current TIS facts and external links are checked against the official website.

## 16. Two-minute explanation

> This is a React and Vite redesign of the Tulas International School homepage. I separated reusable components such as the navbar, buttons, cursor, scroll progress and section reveal from the larger homepage sections. I kept school-specific content in data files so contact details and external URLs are not duplicated. Framer Motion handles the important interactions, including scroll reveals, the testimonial transition and desktop cursor. The design uses CSS Grid, Flexbox, CSS variables and responsive breakpoints so the page works across mobile, tablet and desktop. I also considered accessibility by adding semantic landmarks, keyboard focus states and reduced-motion support.
