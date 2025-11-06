import React, { useState } from 'react';
import { 
  FaCar, 
  FaUsers, 
  FaBuilding, 
  FaLeaf, 
  FaShieldAlt, 
  FaMoneyBillWave,
  FaArrowRight,
  FaPlay,
  FaStar
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: <FaCar />,
      title: 'Book a Ride',
      description: 'Instant ride booking with smart matching and real-time tracking',
      fullDescription: 'Book your ride in seconds with our intelligent matching system that finds the perfect vehicle for your needs. Real-time tracking keeps you informed every step of the way.',
      features: ['Instant Booking', 'Live Tracking', 'Multiple Vehicle Options', 'Smart Matching'],
      stats: { rating: '4.9/5', users: '50K+', speed: '<2min' },
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'Share a Ride',
      description: 'Connect with fellow travelers and save up to 60% on your commute',
      fullDescription: 'Our advanced algorithm matches you with people traveling the same route. Share costs, reduce traffic, and make new connections while saving money.',
      features: ['Cost Sharing', 'Route Optimization', 'Community Building', 'Flexible Scheduling'],
      stats: { rating: '4.8/5', users: '35K+', savings: '60%' },
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      icon: <FaBuilding />,
      title: 'Corporate Services',
      description: 'Tailored transportation solutions for businesses and organizations',
      fullDescription: 'Streamline employee transportation with our corporate solutions. Dedicated fleets, custom routes, and comprehensive reporting for your business needs.',
      features: ['Employee Transport', 'Dedicated Fleet', 'Custom Solutions', 'Advanced Analytics'],
      stats: { rating: '4.9/5', companies: '500+', efficiency: '40%' },
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      icon: <FaLeaf />,
      title: 'Eco Rides',
      description: 'Sustainable travel with electric vehicles and carbon offset programs',
      fullDescription: 'Choose from our fleet of electric and hybrid vehicles. Every ride contributes to our carbon offset program, making your travel environmentally responsible.',
      features: ['Electric Vehicles', 'Carbon Neutral', 'Green Technology', 'Eco Routes'],
      stats: { rating: '4.7/5', co2: '5T+ Saved', green: '100+' },
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba5331b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      title: 'Safety First',
      description: 'Comprehensive safety features and verified driver partners',
      fullDescription: 'Your safety is our top priority. All drivers undergo rigorous background checks, and our app includes emergency features and real-time monitoring.',
      features: ['Verified Partners', '24/7 Support', 'Emergency SOS', 'Trip Sharing'],
      stats: { rating: '5.0/5', safety: '99.9%', response: '<30s' },
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      icon: <FaMoneyBillWave />,
      title: 'Save Money',
      description: 'Transparent pricing with no hidden fees and multiple payment options',
      fullDescription: 'Enjoy competitive pricing with complete transparency. No surge pricing during peak hours and multiple payment methods for your convenience.',
      features: ['Best Prices', 'No Hidden Fees', 'Multiple Payments', 'Price Lock'],
      stats: { rating: '4.8/5', savings: '40% Avg', payment: '10+' },
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const activeServiceData = services[activeService];

  return (
    <section id="services" className="services-modern">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
  <div className="services-title-content">
    <h2 className="services-main-title">Our Premium Services</h2>
    <p className="services-subtitle">
      Experience next-generation ride sharing with cutting-edge features and unparalleled service quality.
    </p>
    <div className="services-line"></div>
  </div>
</div>

        
        <div className="services-grid">
          {/* Service List */}
          <div className="service-list">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-item-content">
                  <div 
                    className="service-icon-wrapper"
                    style={{ background: service.gradient }}
                  >
                    {service.icon}
                  </div>
                  <div className="service-text">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-arrow">
                    <FaArrowRight />
                  </div>
                </div>
                <div className="service-indicator"></div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="service-details">
            <div className="details-background">
              <img src={activeServiceData.image} alt={activeServiceData.title} />
              <div className="details-overlay" style={{ background: activeServiceData.gradient }}></div>
            </div>
            
            <div className="details-content">
              <div className="details-header">
                <div className="service-badge">
                  <span className="badge-icon">{activeServiceData.icon}</span>
                  <span className="badge-text">Premium Service</span>
                </div>
                <h3>{activeServiceData.title}</h3>
                <p className="details-description">{activeServiceData.fullDescription}</p>
              </div>

              <div className="details-features">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {activeServiceData.features.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-icon">
                        <FaStar />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="details-stats">
                {Object.entries(activeServiceData.stats).map(([key, value]) => (
                  <div key={key} className="stat-card">
                    <h5>{value}</h5>
                    <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  </div>
                ))}
              </div>

              <div className="details-actions">
                <button className="btn-primary-large">
                  <FaPlay className="btn-icon" />
                  Get Started
                </button>
                <button className="btn-secondary-outline">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default Services;