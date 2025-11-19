import React from "react";
import '../assets/css/Resume.css';


function Resume() {
  return (
   <main>
      <div className="intro-container">
      {/* Left Column */}
      <div className="intro-profile responsive-left">
      <img
      src="profile.jpg"
      alt="Ayesha Yaseen's Profile Picture"
      className="profile-pic"
      />
      <h2>Ayesha Yaseen</h2>
      <p><strong>Software Developer at ABC</strong></p>
      <p>
      Bachelor of Software Engineering
      <br />
      International Islamic University Islamabad
      </p>


      <h2 style={{ textAlign: "left" }}>Contact</h2>
      <ul style={{ textAlign: "left" }}>
      <li>
      <a href="mailto:ayesha@gmail.com">Email: ayesha@gmail.com</a>
      </li>
      <li>
      <a href="https://www.linkedin.com/">LinkedIn: ayesha@linkedin.com</a>
      </li>
      <li>
      <a href="https://www.guru.com/">Guru: ayesha@guru.com</a>
      </li>
      <li>Phone: +92 123 4567890</li>
      </ul>


      <section id="hobbies" style={{ textAlign: "left" }}>
      <h2>Hobbies & Interests</h2>
      <ul>
      <li>Books Reading</li>
      <li>Martial Arts</li>
      <li>Badminton</li>
      <li>Cooking</li>
      </ul>
      </section>
      </div>


      {/* Right Column */}
      <div className="intro-text responsive-right">
      <section id="about">
      <h1>About Me</h1>
      <p>
      I am a dedicated software engineer specializing in web development,
      database management, and system analysis. With a strong foundation in
      software engineering and hands-on experience in delivering scalable
      solutions, I am committed to driving innovation and efficiency in all
      projects I undertake.
      </p>
      </section>


      <section id="experience">
      <h2>Professional & Soft Skills</h2>
      <ul>
      <li>Analytical Problem Solving</li>
      <li>Critical Thinking and Decision Making</li>
      <li>Effective Communication and Team Collaboration</li>
      <li>Time Management and Prioritization</li>
      <li>Adaptability and Continuous Learning</li>
      <li>Technical Documentation and Requirements Gathering</li>
      </ul>
      </section>


      <h2>Projects Developed</h2>
      <ul style={{ textAlign: "left" }}>
      <li>E-Commerce Store</li>
      <li>Online Text Manipulator</li>
      <li>Employee Performance Management</li>
      </ul>


      <section id="skills">
      <h2>Technical Skills</h2>
      <ul>
      <li>Web Development: HTML, CSS, JavaScript, AJAX</li>
      <li>Backend Technologies: ASP.NET, PHP</li>
      <li>Relational Databases: Oracle, MySQL</li>
      <li>NoSQL Databases: MongoDB</li>
      <li>System Analysis and Design</li>
      </ul>
      </section>


      <section id="education" style={{ textAlign: "left" }}>
      <h2 style={{ textAlign: "left" }}>Education</h2>
      <p>
      Bachelor of Software Engineering
      <br />
      International Islamic University Islamabad
      </p>
      </section>


      <section id="certifications">
      <h2>Certifications</h2>
      <p>
      Appreciation Certificate - Director General Commercial, POF Wah
      Cantt. Recognized for exceptional performance (August 2024)
      </p>
      </section>
      </div>
      </div>
    </main>
  );
}

export default Resume;
