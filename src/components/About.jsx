import './About.css'

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src="/images/A10.JPG" alt="Dive Master" />
          </div>
          <div className="about-text" data-aos="fade-left">
            <h3>Professional Dive Master</h3>
            <p>
              With over a decade of experience in diving, I've explored the most
              beautiful underwater locations across Sri Lanka. As a certified Dive
              Master, I'm passionate about sharing the wonders of the ocean with
              both beginners and experienced divers.
            </p>
            <p>My expertise includes:</p>
            <ul>
              <li>PADI Certified Dive Master</li>
              <li>Emergency First Responder</li>
              <li>Underwater Photography Specialist</li>
              <li>Marine Life Expert</li>
              <li>Local Dive Site Knowledge</li>
            </ul>
            <p>
              Safety is my top priority, and I ensure that every diving experience
              is not only exciting but also conducted with the highest safety standards.
            </p>
          </div>
        </div>

        {/* Featured News */}
        <div className="featured-news" data-aos="fade-up">
          <h3 className="news-title">In the News</h3>
          <div className="news-highlight">
            <img src="/images/news.jpeg" alt="Newspaper Feature" />
            <p>
            🌊 Making Waves Beneath the Surface 🌊 <br /> <br />
            Meet Sri Lanka’s First Lady Dive Master — a fearless ocean soul rewriting history! Featured proudly in Monara Newspaper, she dives beyond limits, breaking barriers and inspiring generations. From coral gardens to deep blue mysteries, her courage echoes through every wave.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
