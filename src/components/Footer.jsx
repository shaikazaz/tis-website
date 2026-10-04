import { images, navLinks, site } from '../data/site'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={images.footerLogo} alt={`${site.name} logo`} loading="lazy" />
          <p>CBSE-affiliated co-ed boarding and day school in Dehradun, Uttarakhand.</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="footer__title">Explore</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="footer__contact">
          <h2 className="footer__title">Contact</h2>
          <p>
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address}</a>
          </p>
          <p>
            Landline:{' '}
            {site.landlines.map((number, index) => (
              <span key={number}>
                {index > 0 && ', '}
                <a href={`tel:${number}`}>{number}</a>
              </span>
            ))}
          </p>
          <p>
            Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </address>

        <div>
          <h2 className="footer__title">Admissions</h2>
          <p>
            Helpline: <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
          </p>
          <Button href={site.applyUrl} external>Apply Now</Button>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}, Dehradun. All rights reserved.</p>
        <ul className="footer__socials">
          {site.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer">{social.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
