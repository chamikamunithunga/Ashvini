import { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Slider.css'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/images/A14.JPG'
    },
    {
      id: 2,
      image: '/images/A19.JPG'
    },
    {
      id: 3,
      image: '/images/A17.JPG'
    },
    {
      id: 4,
      image: '/images/A21.JPG'
    },
    {
      id: 5,
      image: '/images/A22.JPG'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  useEffect(() => {
    let timer
    if (isAutoPlaying) {
      timer = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => clearInterval(timer)
  }, [isAutoPlaying, nextSlide])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div 
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={`Slide ${slide.id}`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      <button 
        className="slider-button prev" 
        onClick={prevSlide} 
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button 
        className="slider-button next" 
        onClick={nextSlide} 
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slider 