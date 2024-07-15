import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <div>
      {/* Intro */}
      <div className="intro-section">
        <header className="heading-section">
            <div className='intro-heading'>Hi, I'm <h1 className='name'>Suryaa Gautam,</h1></div>
            <h3 className='intro-sub-heading'>and I'm Web Developer</h3>
            <button className='intro-button'>CONTACT ME ⟶</button>
        </header>
      </div>
      {/* About */}
      <div className="about-section">
        <div className="about-container">
            <h3 className='about-heading'>About Suryaa Gautam</h3>
            <p className='about-description'>I am a driven and ambitious professional having high aspirations and immense ability to work in a multi pace environment, seeking a career path where I can utilize my educational and professional background for the organizational welfare as well as my personal growth.</p>
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="about-image" />
        </div>
      </div>
      {/* Credentials */}
      <div className="credentials-section">
        <h1 className="credentials-heading">Credentials</h1>
        <div className="credentials-container">
          <div className="education-section">
            <h1>Education</h1>
            <div className="education-description">
              <p>Bachelor of Computer Applications <br/> (2022–2025)</p>
              <p>XII Science <br/>(2022)</p>
              <p>X <br /> (2020)</p>
            </div>
          </div>
          <div className="skill-section">
            <h1>Skill</h1>
            <div className="skill-description">
              <p>Django</p>
              <p>React</p>
              <p>Python</p>
              <p>MySQL</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="project-section">
        <h1 className="project-heading">My Projects</h1>
        <div className="project-container">
          <div className="project">
            <h2 className='project-name'>Glowify</h2>
            <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Loading" className='project-image'/>
          </div>
          <div className="project">
            <h2 className='project-name'>Blogger</h2>
            <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading" className='project-image'/>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="contact-section">
        <h1 className="contact-heading">ContactMe</h1>
        <h3 className="gmail">surya.gautam2004@gmail.com</h3>
        <div className="contact-container">
        <form>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id='name'/>
            </div>
            <div className="form-group">
                <label htmlFor="email" >Email:</label>
                <input type="email" id='email'/>
            </div>
            <div className="form-group">
                <label htmlFor="phoneno">Phone No.:</label>
                <input type="text" id='phoneno'/>
            </div>
            <button className="submit-button" type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
