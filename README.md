# Tulas International School — Frontend Redesign

A premium, responsive React/Vite redesign of the Tulas International School (TIS) homepage for a Frontend Developer evaluation. The project keeps the existing TIS identity and official-site information while adding an editorial visual system, purposeful motion, responsive layouts and accessibility-focused interactions.

## Tech Stack

- React 18
- Vite 5
- JavaScript / JSX
- CSS with custom properties and responsive media queries
- Framer Motion 11

## What is implemented

### Core experience

- Responsive sticky navigation and mobile menu
- Cinematic hero
- Editorial introduction
- School statistics
- Why TIS feature grid
- Campus experience
- Academics
- Sports
- Boarding / campus life
- Achievements / recognition
- Parent testimonial carousel
- Virtual-tour CTA
- Admissions CTA
- Contact section
- Structured footer

### Interaction

- Desktop custom cursor with interactive hover state
- Scroll-triggered section reveals
- Scroll progress indicator
- Motion-enhanced navigation, cards and CTAs
- Reduced-motion support

### Quality

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Responsive layouts from small mobile to large desktop
- Centralized site/contact/admission data
- Lazy loading for appropriate below-the-fold imagery
- Event-listener cleanup in interactive components
- No frontend backend dependency

## Project structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ScrollProgress.jsx
│   ├── SectionHeading.jsx
│   └── SectionReveal.jsx
├── data/
│   ├── achievements.js
│   ├── site.js
│   ├── sports.js
│   └── testimonials.js
├── pages/
│   └── Home.jsx
├── sections/
│   ├── Academics.jsx
│   ├── Achievements.jsx
│   ├── Admissions.jsx
│   ├── Boarding.jsx
│   ├── Campus.jsx
│   ├── Contact.jsx
│   ├── Hero.jsx
│   ├── Introduction.jsx
│   ├── Sports.jsx
│   ├── Stats.jsx
│   ├── Testimonials.jsx
│   ├── VirtualTour.jsx
│   └── WhyTIS.jsx
├── styles/
│   ├── globals.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

## Local development

Requirements:

- Node.js 18+ recommended
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Vercel deployment

Import the GitHub repository into Vercel. Use the default Vite settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

No environment variables are required for the current frontend.

## Content source

TIS-specific information and external destinations are centralized in `src/data/site.js`, with additional structured content in `src/data/achievements.js`, `src/data/sports.js` and `src/data/testimonials.js`. Verify current school information against the official TIS website before final submission.

Official website: https://tis.edu.in/

## Accessibility

The project includes semantic landmarks, a skip link, keyboard-friendly navigation, visible focus states, accessible carousel controls, meaningful image alt text, touch-safe mobile behavior and reduced-motion handling.

## Performance approach

Animations primarily use transform/opacity. Scroll progress uses Framer Motion motion values rather than React state on every scroll update. The custom cursor uses motion values and is disabled on touch/reduced-motion environments. Below-the-fold images use lazy loading where appropriate.

## AI-assisted development

AI tools were used as development assistance. The final source should be reviewed, tested and understood by the developer before submission. No feature should be claimed as verified until it has been tested locally and on the production deployment.
