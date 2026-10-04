import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { images, navLinks, site } from '../data/site'
import Button from './Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Change the header style after the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu with the Escape key (keyboard users).
  useEffect(() => {
    if (!open) return
    const onKey = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkProps = (link) =>
    link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <header id="top" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="navbar__logo" href="#top" aria-label={`${site.name} – home`}>
          <img src={images.logo} alt={`${site.name} logo`} />
        </a>

        <nav className="navbar__links" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} {...linkProps(link)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__cta">
          <Button href={site.applyUrl} external>Enquire Now</Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                {...linkProps(link)}
              >
                {link.label}
              </a>
            ))}
            <Button href={site.applyUrl} external>Enquire Now</Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
