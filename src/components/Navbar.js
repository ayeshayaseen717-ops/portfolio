import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(prev => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleScroll = (e, id) => {
    if (location.pathname === "/") {
      e.preventDefault(); // prevent default navigation
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
    // if on another page, Link will navigate normally
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={(e) => handleScroll(e, "about")}>About</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleScroll(e, "experience")}>Experience</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleScroll(e, "projects")}>Projects</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleScroll(e, "skills")}>Skills</Link>
          </li>
          <li>
            <Link to="/" onClick={(e) => handleScroll(e, "education")}>Education</Link>
          </li>
          <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>

           <li><Link to="/" onClick={(e) => handleScroll(e, "contact")}>Contact</Link></li> 
        </ul>

        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

export default Navbar;
