import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease',
    })
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
