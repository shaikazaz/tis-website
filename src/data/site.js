// All facts below come from https://tis.edu.in/ (checked 2 Oct 2026).
const MEDIA = 'https://tis.edu.in/_next/static/media'

export const site = {
  name: 'Tulas International School',
  homeUrl: 'https://tis.edu.in/',
  short: 'TIS',
  applyUrl: 'https://admission.tis.edu.in',
  phone: '+91-9837983791',
  phoneLabel: '+91-98379 83791',
  landlines: ['0135-2699444', '0135-2699666'],
  email: 'info@tis.edu.in',
  address: 'Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)',
  mapUrl: 'https://maps.app.goo.gl/maBF8syXueQkw31E6',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/tulasinternationalschool/' },
    { label: 'Instagram', href: 'https://www.instagram.com/tulasinternationalschool/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/school/tulas-international-school/' },
    { label: 'YouTube', href: 'https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw' },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Campus', href: '#campus' },
  { label: 'Sports', href: '#sports' },
  { label: 'Admissions', href: site.applyUrl, external: true },
  { label: 'Contact', href: '#contact' },
]

// Images are loaded from the official TIS website.
export const images = {
  logo: `${MEDIA}/schoolLogo.95f6e121.png`,
  footerLogo: `${MEDIA}/footer-logo.230b79ff.png`,
  hero: 'https://tis.edu.in/images/tis-campus-og.jpg',
  intro: `${MEDIA}/AtTIS.59351600.png`,
  campusMain: `${MEDIA}/campus.e67b1a0a.png`,
  campusSide: `${MEDIA}/Image%202.0c5295c9.webp`,
  sportsMain: `${MEDIA}/polo.973ddbae.webp`,
}
