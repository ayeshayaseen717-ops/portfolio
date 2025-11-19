import React from "react";
import '../assets/css/Projects.css';
import auditImg from '../assets/images/audit.jpeg';
import hrImg from '../assets/images/HR.jpeg';
import royalEnterprisesImg from '../assets/images/royal enterprices.png';
import textEditorImg from '../assets/images/textEditor.jpeg';

function Projects() {
  return (
    <section id="projects">
      <h2 className="center">Projects Developed</h2>
      <table className="proj-table" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td className="project-box">
             <a href="#!" onClick={(e) => e.preventDefault()}>
                <img src={auditImg} className="project-img" alt="Audit Automation System" />
                <p className="image-title">Audit Automation System</p>
              </a>
            </td>

            <td className="project-box">
              <a href="#!" onClick={(e) => e.preventDefault()}>
                <img src={textEditorImg} className="project-img" alt="Online Text Manipulator" />
                <p className="image-title">Online Text Manipulator</p>
              </a>
            </td>

            <td className="project-box">
              <a href="https://royal-enterprises.biz/">
                <img src={royalEnterprisesImg} className="project-img" alt="Royal Enterprises" />
                <p className="image-title">Royal Enterprises</p>
              </a>
            </td>

            <td className="project-box">
              <a href="#!" onClick={(e) => e.preventDefault()}>
                <img src={hrImg} className="project-img" alt="Employee Performance Management" />
                <p className="image-title">Employee Performance Management</p>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Projects;
