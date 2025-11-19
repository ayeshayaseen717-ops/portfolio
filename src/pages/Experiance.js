import React from "react";
import '../assets/css/Experiance.css';

function Experiance() {
  return (
    <section id="experience">
      <h2 className="center">Professional Experience</h2>

      <table className="exp-table" cellPadding="0" cellSpacing="0">
        <tbody>
          {/* Oracle & Web Developer at POF */}
          <tr>
            <td colSpan={2}>
              <h3>Oracle & Web Developer – DCS</h3>
              <p>Pakistan Ordnance Factories, Wah Cantt.</p>

              {/* Key Responsibilities */}
              <h4>Key Responsibilities</h4>
              <ul>
                <li>Web Application Design & Development (PHP, C#)</li>
                <li>Oracle-Based Systems' Analysis, Design & Development</li>
                <li>Handling Large‑Scale, Complex Data Sets (Database Architecture & Performance Optimization)</li>
                <li>Collaboration on DB Activities, User Helpdesk & System Modifications</li>
              </ul>

              {/* Awards Section */}
              <h4>Awards & Recognitions</h4>
              <ul>
                <li>Appreciation Certificate – Director General Commercial, POF Wah Cantt. Recognized for exceptional performance (August 2024)</li>
              </ul>
            </td>
          </tr>

          {/* Junior Software Developer & Remote WordPress Developer */}
          <tr>
            <td style={{ paddingRight: '8px' }}>
              <h3>Junior Software Developer</h3>
              <p><em>Virtoxd Technologies, Rawalpindi</em></p>
              <ul>
                <li>Developed an Online Text Manipulator</li>
                <li>Collaborated on Scalable Software Solutions</li>
                <li>Technologies: <strong>C#, Bootstrap, Ajax</strong></li>
              </ul>
            </td>
            <td>
              <h3>Remote WordPress Developer</h3>
              <ul>
                <li>Customized WordPress sites and E-Commerce Stores</li>
                <li>Enhanced UX and performance</li>
                <li>Admin services</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Experiance;
