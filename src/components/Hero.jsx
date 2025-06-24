import Slider from './Slider'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <Slider />
      <div className="hero-overlay">
        <div className="hero-content" data-aos="fade-up">
          <h1>Ashvini Nirmani</h1>
          <p>Professional Dive Master | Underwater Explorer</p>
        </div>
      </div>
    </section>
  )
}

export default Hero 