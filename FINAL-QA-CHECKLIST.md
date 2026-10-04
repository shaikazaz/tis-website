# TIS Final QA Checklist

Run this checklist before GitHub/Vercel/Loom submission.

## Local

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] `npm run build`
- [ ] `npm run preview`

## Browser

- [ ] No console errors
- [ ] No React warnings
- [ ] Images load
- [ ] All internal anchors work
- [ ] Official external links open correctly
- [ ] Mobile menu opens/closes
- [ ] Escape closes the mobile menu

## Required assignment features

- [ ] Custom cursor on fine-pointer desktop
- [ ] Cursor disabled on touch/reduced motion
- [ ] Scroll-triggered reveals
- [ ] Scroll progress bar

## Responsive

- [ ] 320px
- [ ] 375px
- [ ] 390px
- [ ] 430px
- [ ] 768px
- [ ] 1024px
- [ ] 1280px
- [ ] 1440px
- [ ] 1920px
- [ ] No horizontal overflow

## Accessibility

- [ ] Keyboard navigation
- [ ] Visible focus states
- [ ] Skip link
- [ ] Semantic headings
- [ ] Meaningful alt text
- [ ] Accessible testimonial controls
- [ ] Reduced-motion behavior

## Content

- [ ] TIS facts checked against https://tis.edu.in/
- [ ] No invented statistics
- [ ] No invented testimonials
- [ ] No invented awards/rankings
- [ ] Contact information checked
- [ ] Admission destination checked

## Deployment

- [ ] Public GitHub repository
- [ ] No `.env` or secrets
- [ ] Vercel production build succeeds
- [ ] Production URL tested on desktop
- [ ] Production URL tested on mobile
- [ ] Loom demonstrates the real deployed application
