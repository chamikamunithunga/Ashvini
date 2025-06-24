import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      src: '/images/A11.JPG',
      title: 'Knife Rock',                  // updated
    },
    {
      id: 2,
      src: '/images/A10.JPG',
      title: 'Parrot Rock',                 // updated
    },
    {
      id: 3,
      src: '/images/A8.JPG',
      title: 'Aluth Gala',                  // updated
    },
    {
      id: 4,
      src: '/images/A13.JPG',
      title: 'Navy Museum',                 // updated
      
    },
    {
      id: 5,
      src: '/images/A14.JPG',
      title: 'Navy Museum',                          // no title provided, left blank
    },
    {
      id: 6,
      src: '/images/A21.JPG',
      title: 'Navy Museum',                          // no title provided, left blank
    },
    {
      id: 7,
      src: '/images/A23.JPG',
      title: 'Kaath Bar Rock',             // updated
    },
    {
      id: 8,
      src: '/images/A19.JPG',
      title: 'Navy Museum',                // updated (duplicate of #4, as you said)
     
    },
    {
      id: 9,
      src: '/images/A20.JPG',
      title: 'Navy Museum',               // kept original (no new title provided)
     
    },
    {
      id: 10,
      src: '/images/A24.JPG',
      title: 'Diving Guru Unawatuna',          // kept original
      
    },
    {
      id: 11,
      src: '/images/A18.JPG',
      title: 'Navy Museum',             // kept original
      
    },
    {
      id: 12,
      src: '/images/A25.JPG',
      title: 'Diving Guru Unawatuna',               // kept original
      
    }
  ]
  

  const handleImageClick = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Captured Moments</h2>
        <p className="gallery-subtitle" data-aos="fade-up" data-aos-delay="100">
          A collection of minimalist moments frozen in time
        </p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={image.id * 100}
              onClick={() => handleImageClick(image)}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            <FaTimes />
          </button>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery 