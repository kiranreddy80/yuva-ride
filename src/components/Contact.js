import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaPhone />, title: "Phone", detail: "+1 (555) 123-4567" },
    { icon: <FaEnvelope />, title: "Email", detail: "hello@yuvaride.com" },
    { icon: <FaMapMarkerAlt />, title: "Address", detail: "123 Urban Street, City" },
    { icon: <FaClock />, title: "Working Hours", detail: "24/7 Support" },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Drop us a message below!</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="icon">{info.icon}</div>
                <div>
                  <h4>{info.title}</h4>
                  <p>{info.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
