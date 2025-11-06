import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          {/* Text Section */}
          <div className="hero-text">
            <p className="tagline">🚗 Smarter. Greener. Together.</p>
            <h1 className="hero-title">
              Share Your Ride, <span>Save Big</span>
            </h1>
            <p className="hero-description">
              Yuva brings you an easy, affordable, and eco-friendly ride-sharing experience. 
              Book rides, share rides — all in one app. Join the revolution of smart commuting today!
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">
                <FaPlayCircle className="play-icon" />
                Watch Demo
              </button>
            </div>

            {/* Stats Section */}
            <div className="hero-stats">
              <div className="stat">
                <h3>50K+</h3>
                <p>Happy Riders</p>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <h3>100+</h3>
                <p>Cities Covered</p>
              </div>
              <div className="divider"></div>
              <div className="stat">
                <h3>1M+</h3>
                <p>Rides Shared</p>
              </div>
            </div>
          </div>

          {/* Phone Image */}
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <img src="./main.jpg" alt="Yuva App" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down"></div>
    </section>
  );
};

export default Hero;
