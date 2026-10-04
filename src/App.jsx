import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <ScrollProgress />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <Home />
      <Footer />
    </MotionConfig>
  )
}
