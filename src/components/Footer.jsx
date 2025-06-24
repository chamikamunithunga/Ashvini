import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Ashvini</div>
          <p className="footer-text">
            Experience the underwater wonders of Sri Lanka with professional guidance
          </p>
          <p className="copyright">
  © {new Date().getFullYear()} Ashvini Diving. All rights reserved. | Made by{' '}
  <a href="https://chamikamunithunga.github.io/Chamika.M/" className="made-by-link">
    Chamika.M
  </a>
</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer 