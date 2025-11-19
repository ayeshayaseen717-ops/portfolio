import React, { useState, useRef, useEffect } from "react";
import '../assets/css/Contact.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const servicesOptions = [
    "Website Development",
    "E-Commerce Development",
    "Frontend Design",
    "Backend Development",
    "Database Design",
    "Oracle Apps Customization",
    "SQL / PLSQL Reports",
    "WordPress Websites",
    "WooCommerce Setup",
    "Admin Maintenance",
    "System Analysis & Optimization",
    "Software Requirements",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been sent. Selected Services: ${
        formData.services.length ? formData.services.join(", ") : "None"
      }`
    );
    setFormData({ name: "", email: "", phone: "", services: [], message: "" });
  };

  return (
    <section id="contact">
      <h2 className="contact-heading">Contact Info</h2>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="mailto:ayeshayaseen@gmail.com" title="Email"><i className="fab fa-google"></i></a>
        <a href="https://www.linkedin.com/in/ayeshayaseen" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/ayeshayaseen" title="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://wa.me/921234567890" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
      </div>

      <div className="contact-columns">
        {/* Left Column: Schedule Meeting */}
       <div className="left-column">
          {/*<h3 className="form_heading">Let's Schedule a Meeting</h3>*/}
          <p className="animated-text">
           Turning Ambitions into Achievements. <br/>Innovative Solutions. Lasting Impact
          </p>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/YOUR_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="schedule-btn"
          >
            Schedule a Meeting
          </a>
          <p className="note">
            You can select 1–2 preferred slots. Confirmation will be sent via email or WhatsApp.
          </p>
        </div>

        {/* Right Column: Contact Form */}
        <div className="right-column">
          <h3 className="form_heading">Connect for Expert Solutions</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
            <input type="tel" name="phone" placeholder="Your Contact Number (+92…)" value={formData.phone} onChange={handleInputChange} required />

            <div className="multi-select" ref={dropdownRef}>
              {/*<label className="services-label">Services You Are Looking For (optional)</label>*/}
              <div className="multi-select-box" onClick={toggleDropdown}>
                {formData.services.length > 0 ? formData.services.join(", ") : "Select Services"}
                <span className="arrow">{dropdownOpen ? "▲" : "▼"}</span>
              </div>
              {dropdownOpen && (
                <div className="multi-select-options">
                  {servicesOptions.map((service, idx) => (
                    <label key={idx}>
                      <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleCheckboxChange(service)} />
                      {service}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} rows="5" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
