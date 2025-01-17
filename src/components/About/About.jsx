import React from 'react'
import './About.css'

import cursorIcon from "../../assets/cursorIcon.png"
import serverIcon from "../../assets/serverIcon.png"
import uiIcon from "../../assets/uiIcon.png"

const About = () => {
  return (
    <section className='container'>
        <h2 className='title'>About Me</h2>
        
        <div className='aboutParagraph'>
          <p>
          Hi, I'm Kawmini Anuththara Kalubowila, an ambitious undergraduate at the University of Vavuniya, Sri Lanka. My journey began in the vibrant town of Padukka, where I pursued my Advanced Level studies at Bope Rajasinghe Maha Vidyalaya. With a deep passion for technology, I am dedicated to becoming a skilled Software Engineer. My expertise spans across web and mobile development, with hands-on experience in MERN stack and frontend development. From crafting dynamic websites to creating innovative mobile apps, I thrive on bringing ideas to life through code. Let's build something amazing together!

           <ul className="aboutItems">
          <li className="aboutItem">
            <img src={cursorIcon} alt="Cursor icon" />
            <div className="aboutItemText">
              <h3>Frontend Developer</h3>
              <p>
                I specialize in creating responsive, user-friendly, and visually appealing interfaces to deliver seamless user experiences.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={serverIcon} alt="Server icon" />
            <div className="aboutItemText">
              <h3>Web Developer</h3>
              <p>
                I have expertise in building dynamic and optimized websites using modern web technologies and frameworks.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={uiIcon} alt="Mobile icon" />
            <div className="aboutItemText">
              <h3>Mobile Developer</h3>
              <p>
                I develop functional and interactive mobile applications that work seamlessly across different platforms.
              </p>
            </div>
          </li>
          <li className="aboutItem">
            <img src={serverIcon} alt="MERN icon" />
            <div className="aboutItemText">
              <h3>MERN Developer</h3>
              <p>
                I have hands-on experience in building full-stack applications using the MERN (MongoDB, Express.js, React, Node.js) stack.
              </p>
            </div>
          </li>
        </ul>
          </p>
        </div>
    </section>
  )
}

export default About