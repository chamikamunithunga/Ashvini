import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { id: 1, text: 'Home', href: 'hero' },
    { id: 2, text: 'About', href: 'about' },
    { id: 3, text: 'Skills', href: 'skills' },
    { id: 4, text: 'Gallery', href: 'gallery' },
    { id: 5, text: 'Contact', href: 'contact' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link 
          to="hero" 
          className="logo" 
          smooth={true} 
          duration={500}
          onClick={closeMenu}
        >
          <span className="logo-main">Ashvini</span>
          <span className="logo-sub">NIRMANI</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link 
                to={link.href}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={closeMenu}
                spy={true}
                activeClass="active"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 