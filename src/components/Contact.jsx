import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaFacebook, FaInstagram
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_qdvcywp',       
      'template_lyuygrf',      
      form.current,
      'QnjlMQx68-FRBlhpR'        
    ).then(() => {
      alert('Message sent successfully!');
      e.target.reset();
    }).catch((error) => {
      console.error(error);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <h3>Contact Information</h3>
            <div className="info-item">
              <FaEnvelope />
              <span>Ashvininirmani@icloud.com</span>
            </div>
            <div className="info-item">
              <FaPhone />
              <span>+94 75 560 0733</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>Nilaveli, Sri Lanka</span>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1DzHSFs7G3/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/scuba_queen_the_ashi_?igsh=MXc5NzZpbHF6cXBwdQ==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form ref={form} className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
