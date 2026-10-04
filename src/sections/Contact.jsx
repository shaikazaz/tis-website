import { site } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import SectionReveal from '../components/SectionReveal'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title={<span id="contact-title">Let’s start a conversation.</span>}
            intro="Reach the TIS team through the official contact details below."
          />
        </SectionReveal>
        <div className="contact__grid">
          <address className="contact-card">
            <span className="contact-card__label">Visit</span>
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer">{site.address}</a>
          </address>
          <div className="contact-card">
            <span className="contact-card__label">Call</span>
            <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
            <div className="contact-card__sub">{site.landlines.map((number) => <a key={number} href={`tel:${number}`}>{number}</a>)}</div>
          </div>
          <div className="contact-card">
            <span className="contact-card__label">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <div className="contact-card">
            <span className="contact-card__label">Online</span>
            <a href={site.homeUrl} target="_blank" rel="noopener noreferrer">Official TIS website ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
