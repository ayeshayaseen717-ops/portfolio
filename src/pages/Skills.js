import React from "react";
import '../assets/css/Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2 className="skills-heading">Technical Skills</h2> {/* Outside purple block */}

      <div className="skills-block">
        <table className="skills-table" cellPadding="10" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <h3>Web Development</h3>
                <ul>
                  <li><strong>Frontend:</strong> Bootstrap, JavaScript (Ajax)</li>
                  <li><strong>Backend:</strong> PHP, C#</li>
                </ul>
              </td>

              <td>
                <h3>Oracle Applications</h3>
                <ul>
                  <li><strong>Databases:</strong> SQL, PL/SQL</li>
                  <li><strong>Enterprise Systems:</strong> Handling large structured data</li>
                  <li>Oracle Reports and Forms</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>
                <h3>WordPress</h3>
                <ul>
                  <li>E-Commerce Stores</li>
                  <li>Business Websites</li>
                  <li>Admin Services</li>
                </ul>
              </td>

              <td>
                <h3>System Analysis & Design</h3>
                <ul>
                  <li><strong>Databases:</strong> SQL, PL/SQL</li>
                  <li><strong>Enterprise Systems:</strong> Handling large structured data</li>
                  <li>Oracle Reports and Forms</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Skills;
