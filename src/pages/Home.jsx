import Hero from '../sections/Hero'
import Introduction from '../sections/Introduction'
import Stats from '../sections/Stats'
import WhyTIS from '../sections/WhyTIS'
import Campus from '../sections/Campus'
import Academics from '../sections/Academics'
import Sports from '../sections/Sports'
import Boarding from '../sections/Boarding'
import Achievements from '../sections/Achievements'
import Testimonials from '../sections/Testimonials'
import VirtualTour from '../sections/VirtualTour'
import Admissions from '../sections/Admissions'
import Contact from '../sections/Contact'
import SectionReveal from '../components/SectionReveal'

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SectionReveal><Introduction /></SectionReveal>
      <SectionReveal><Stats /></SectionReveal>
      <SectionReveal><WhyTIS /></SectionReveal>
      <SectionReveal><Campus /></SectionReveal>
      <SectionReveal><Academics /></SectionReveal>
      <SectionReveal><Sports /></SectionReveal>
      <Boarding />
      <Achievements />
      <Testimonials />
      <VirtualTour />
      <Admissions />
      <Contact />
    </main>
  )
}
