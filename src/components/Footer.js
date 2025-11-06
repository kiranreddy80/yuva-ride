import React, { useState } from 'react';
import { 
  FaCar, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlay,
  FaAppStoreIos,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaRocket,
  FaRegHeart,
  FaCopyright
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Book a Ride', href: '#book-ride' },
        { name: 'Share a Ride', href: '#share-ride' },
        { name: 'Corporate Services', href: '#corporate' },
        { name: 'Eco Rides', href: '#eco-rides' },
        { name: 'Safety Features', href: '#safety' },
        { name: 'Pricing', href: '#pricing' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Yuva', href: '#about' },
        { name: 'Our Team', href: '#team' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press Kit', href: '#press' },
        { name: 'Partners', href: '#partners' },
        { name: 'Blog', href: '#blog' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Safety Center', href: '#safety' },
        { name: 'Community Guidelines', href: '#guidelines' },
        { name: 'Driver Resources', href: '#drivers' },
        { name: 'Rider Resources', href: '#riders' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'Insurance', href: '#insurance' },
        { name: 'Accessibility', href: '#accessibility' },
        { name: 'Compliance', href: '#compliance' }
      ]
    }
  ];

  const appStores = [
    {
      platform: 'Google Play',
      icon: <FaGooglePlay />,
      href: '#',
      bgColor: '#4285F4'
    },
    {
      platform: 'App Store',
      icon: <FaAppStoreIos />,
      href: '#',
      bgColor: '#000000'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: <FaFacebookF />,
      href: '#',
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      href: '#',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      href: '#',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      href: '#',
      color: '#0A66C2'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube />,
      href: '#',
      color: '#FF0000'
    }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: 'Headquarters',
      value: 'Madhapur,  Hyderabad, 560034',
      href: '#'
    },
    {
      icon: <FaPhone />,
      label: 'Support Line',
      value: '+91 9876543210',
      href: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'hellohelp@yuvaride.com',
      href: 'mailto:hello@yuvaride.com'
    },
    {
      icon: <FaClock />,
      label: 'Support Hours',
      value: '24/7 Emergency Support',
      href: '#'
    }
  ];

  const features = [
    { icon: <FaShieldAlt />, text: '100% Safe & Verified' },
    { icon: <FaLeaf />, text: 'Eco-Friendly Rides' },
    { icon: <FaUsers />, text: 'Community Driven' },
    { icon: <FaRocket />, text: 'Fast & Reliable' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 5000);
      }, 1000);
    }
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Top Section - Brand & Newsletter */}
          <div className="footer-top">
            <div className="brand-section">
              <div className="footer-logo">
                <FaCar className="logo-icon" />
                <span className="logo-text">Yuva</span>
              </div>
              <p className="brand-description">
                Transforming urban mobility through smart, sustainable, and affordable 
                ride-sharing solutions. Join us in building better cities together.
              </p>
              
              <div className="feature-tags">
                {features.map((feature, index) => (
                  <div key={index} className="feature-tag">
                    <span className="feature-icon">{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="newsletter-section">
              <h3>Stay Updated</h3>
              <p>Get the latest news, updates, and exclusive offers delivered to your inbox.</p>
              
              {isSubscribed ? (
                <div className="success-message">
                  <FaRegHeart className="success-icon" />
                  <div>
                    <strong>Thank you for subscribing!</strong>
                    <p>Welcome to the Yuva community!</p>
                  </div>
                </div>
              ) : (
                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="newsletter-input"
                    />
                    <button type="submit" className="subscribe-btn">
                      <FaArrowRight className="btn-icon" />
                    </button>
                  </div>
                  <p className="newsletter-note">
                    By subscribing, you agree to our Privacy Policy
                  </p>
                </form>
              )}

              <div className="app-download">
                <h4>Get the App</h4>
                <div className="app-buttons">
                  {appStores.map((store, index) => (
                    <a
                      key={index}
                      href={store.href}
                      className="app-button"
                      style={{ '--store-color': store.bgColor }}
                    >
                      <span className="store-icon">{store.icon}</span>
                      <div className="store-text">
                        <span>Download on</span>
                        <strong>{store.platform}</strong>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Links & Contact */}
          <div className="footer-middle">
            {/* Quick Links */}
            <div className="links-grid">
              {footerSections.map((section, index) => (
                <div key={index} className="link-section">
                  <h4>{section.title}</h4>
                  <ul className="footer-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={link.href} className="footer-link">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="contact-section">
              <h4>Contact Information</h4>
              <div className="contact-list">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="contact-item"
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{contact.label}</span>
                      <span className="contact-value">{contact.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
           
            </div>
          </div>

          
          
        </div>
      </div>

      {/* Bottom Section - Copyright & Legal */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <div className="copyright">
              <FaCopyright className="copyright-icon" />
              <span>{currentYear} Yuva Ride Sharing. All rights reserved.</span>
            </div>
            
            

           
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FaArrowRight className="top-icon" />
      </button>
    </footer>
  );
};

export default Footer;