import React from 'react';
import { FaUserPlus, FaMapMarkedAlt, FaCar, FaStar } from 'react-icons/fa';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus />,
      title: 'Sign Up',
      description: 'Create your account in less than 2 minutes',
      details: 'Download the app, verify your phone number, and set up your profile.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Set Route',
      description: 'Enter your pickup and destination',
      details: 'Use our smart route mapping to find the best path and available rides.'
    },
    {
      icon: <FaCar />,
      title: 'Choose Ride',
      description: 'Select from available options',
      details: 'Pick between solo rides or shared options based on your preference and budget.'
    },
    {
      icon: <FaStar />,
      title: 'Enjoy Ride',
      description: 'Relax and reach your destination',
      details: 'Track your ride in real-time, share trip details, and rate your experience.'
    }
  ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Simple steps to start your ride-sharing journey</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <p className="step-details">{step.details}</p>
            </div>
          ))}
        </div>
        <div className="cta-section">
          <h3>Ready to Start Your Journey?</h3>
          <p>Join thousands of happy riders today</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Download App</button>
            <button className="btn btn-secondary">Book Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;