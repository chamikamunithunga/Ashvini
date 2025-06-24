import { FaSwimmer, FaLifeRing, FaCamera, FaHeart, FaMapMarkedAlt, FaBook } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skills = [
    {
      icon: <FaSwimmer />,
      title: "Advanced Diving Techniques",
      description: "Expert in various diving techniques including deep diving, night diving, and drift diving."
    },
    {
      icon: <FaLifeRing />,
      title: "Safety Management",
      description: "Comprehensive knowledge of diving safety protocols and emergency procedures."
    },
    {
      icon: <FaCamera />,
      title: "Underwater Photography",
      description: "Skilled in capturing stunning underwater moments and marine life photography."
    },
    {
      icon: <FaHeart />,
      title: "First Aid & Rescue",
      description: "Certified in emergency first response and rescue diving operations."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Navigation",
      description: "Extensive knowledge of Sri Lankan dive sites and underwater navigation."
    },
    {
      icon: <FaBook />,
      title: "Diving Education",
      description: "Experienced in teaching diving theory and practical skills to students."
    }
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 