import React from "react";
import "../assets/css/About.css";
import Experiance from "./Experiance";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

function About() {
  return (
    <>
      <main>
        <section id="about" className="intro-container">
          {/* Left Column */}
          <div className="intro-text">
            <h1>Ayesha Yaseen</h1>
            <p><strong>Oracle & Web Developer</strong></p>
            <p>
              I am a dedicated software engineer specializing in web development,
              database management, and system analysis. With a strong foundation in
              software engineering and hands-on experience in delivering scalable
              solutions, I am committed to driving innovation and efficiency in all
              projects I undertake.
            </p>
          </div>

          {/* Right Column */}
          <div className="intro-profile">
            <img
              src="profile.jpg"
              alt="Ayesha Yaseen's Profile"
              className="profile-pic"
            />
            <p className="tagline">
              I help founders turn ideas<br />into seamless digital experiences
            </p>
          </div>
        </section>
      </main>

      <Experiance id="experience" />
<Projects id="projects" />
<Skills id="skills" />
<Education id="education" />
<Contact id="contact" />
    </>
  );
}

export default About;
