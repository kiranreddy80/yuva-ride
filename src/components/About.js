import React, { useEffect, useRef } from 'react';
import { FaAward, FaUsers, FaRoute, FaLeaf } from 'react-icons/fa';
import './About.css';

const About = () => {
  const statsGridRef = useRef(null);
  const statItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the main line
            if (entry.target.classList.contains('stats-grid')) {
              entry.target.classList.add('in-view');
            }
            
            // Animate individual stat items with delays
            if (entry.target.classList.contains('stat-item')) {
              setTimeout(() => {
                entry.target.classList.add('in-view');
              }, entry.target.dataset.delay || 0);
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe the stats grid
    if (statsGridRef.current) {
      observer.observe(statsGridRef.current);
    }

    // Observe individual stat items
    statItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.setProperty('--delay', `${index * 0.2}s`);
        item.style.setProperty('--icon-delay', `${index * 0.2 + 0.3}s`);
        item.style.setProperty('--number-delay', `${index * 0.2 + 0.5}s`);
        item.style.setProperty('--label-delay', `${index * 0.2 + 0.7}s`);
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <FaUsers />, number: '50,000+', label: 'Active Users' },
    { icon: <FaRoute />, number: '1M+', label: 'Rides Completed' },
    { icon: <FaLeaf />, number: '500+', label: 'Tons CO2 Saved' },
    { icon: <FaAward />, number: '4.9', label: 'App Store Rating' }
  ];

  const values = [
    {
      title: 'Sustainability',
      description: 'We are committed to reducing carbon emissions through shared mobility.'
    },
    {
      title: 'Community',
      description: 'Building connections between people traveling in the same direction.'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving our technology for better user experiences.'
    },
    {
      title: 'Accessibility',
      description: 'Making transportation affordable and available to everyone.'
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Yuva</h2>
          <p>Revolutionizing urban mobility through shared transportation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Founded in 2020, Yuva emerged from a simple idea: what if we could make transportation 
              more affordable, social, and environmentally friendly? Today, we're proud to be one of 
              the fastest-growing ride-sharing platforms, connecting thousands of commuters daily.
            </p>
            <p>
              Our mission is to reduce traffic congestion, lower carbon emissions, and create meaningful 
              connections between people while making urban transportation more accessible and affordable.
            </p>
            
            <h3>Our Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid" ref={statsGridRef}>
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item"
                  ref={el => statItemsRef.current[index] = el}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;