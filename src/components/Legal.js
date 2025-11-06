import React, { useState, useRef } from 'react';
import { 
  FaFileAlt, 
  FaShieldAlt, 
  FaBalanceScale, 
  FaUserShield,
  FaDownload,
  FaPrint,
  FaSearch,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLock,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Legal.css';

const Legal = () => {
  const [activeDocument, setActiveDocument] = useState('terms');
  const [searchQuery, setSearchQuery] = useState('');
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const printRef = useRef(null);

  const legalDocuments = {
    terms: {
      id: 'terms',
      title: 'Terms of Service',
      icon: <FaFileAlt />,
      lastUpdated: 'March 1, 2024',
      version: '2.1',
      summary: 'Rules and guidelines for using Yuva services',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: `By accessing and using Yuva Ride Sharing services, you accept and agree to be bound by the terms and provisions of this agreement. Your use of our services constitutes acceptance of these terms.`
        },
        {
          title: '2. User Eligibility',
          content: `You must be at least 18 years old to use our services. By using Yuva, you represent and warrant that you meet all eligibility requirements.`
        },
        {
          title: '3. Account Registration',
          content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.`
        },
        {
          title: '4. Service Usage',
          content: `Yuva services are for personal, non-commercial use unless otherwise authorized. You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.`
        },
        {
          title: '5. Payment Terms',
          content: `All rides are charged according to the rates displayed in the app. Payments are processed securely through our payment partners. You authorize Yuva to charge your selected payment method.`
        },
        {
          title: '6. Cancellation Policy',
          content: `Users may cancel rides subject to our cancellation policy. Repeated cancellations may result in temporary suspension of account. Cancellation fees may apply in certain circumstances.`
        },
        {
          title: '7. Intellectual Property',
          content: `All content included on the Yuva platform, such as text, graphics, logos, and software, is the property of Yuva or its content suppliers and protected by intellectual property laws.`
        },
        {
          title: '8. Termination',
          content: `We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users.`
        }
      ]
    },
    privacy: {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: <FaUserShield />,
      lastUpdated: 'March 1, 2024',
      version: '3.0',
      summary: 'How we collect, use, and protect your data',
      sections: [
        {
          title: '1. Information We Collect',
          content: `We collect personal information you provide when creating an account, including name, email, phone number, payment information, and profile data. We also collect usage data and location information.`
        },
        {
          title: '2. How We Use Information',
          content: `We use your information to provide and improve our services, process payments, communicate with you, ensure safety, and personalize your experience. We do not sell your personal data to third parties.`
        },
        {
          title: '3. Data Sharing',
          content: `We may share information with drivers for ride coordination, with payment processors for transaction completion, and with authorities when required by law. We use aggregated data for analytics and improvement.`
        },
        {
          title: '4. Data Security',
          content: `We implement appropriate security measures including encryption, access controls, and regular security assessments to protect your personal information from unauthorized access and disclosure.`
        },
        {
          title: '5. Your Rights',
          content: `You have the right to access, correct, or delete your personal information. You can manage your privacy settings in the app and contact us to exercise your data protection rights.`
        },
        {
          title: '6. Data Retention',
          content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You can request deletion of your account and associated data at any time.`
        },
        {
          title: '7. Cookies and Tracking',
          content: `We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookie preferences through your browser settings.`
        },
        {
          title: '8. International Transfers',
          content: `Your data may be processed in facilities located outside your country. We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.`
        }
      ]
    },
    safety: {
      id: 'safety',
      title: 'Safety Guidelines',
      icon: <FaShieldAlt />,
      lastUpdated: 'March 1, 2024',
      version: '1.2',
      summary: 'Safety protocols and community guidelines',
      sections: [
        {
          title: '1. Driver Verification',
          content: `All Yuva drivers undergo comprehensive background checks, vehicle inspections, and identity verification to ensure your safety and security.`
        },
        {
          title: '2. Ride Sharing Safety',
          content: `Always verify the driver and vehicle details before entering. Share your ride details with trusted contacts. Trust your instincts and cancel if you feel uncomfortable.`
        },
        {
          title: '3. Emergency Features',
          content: `Our app includes emergency SOS button, real-time ride sharing, and 24/7 safety support. Familiarize yourself with these features before your first ride.`
        },
        {
          title: '4. Community Guidelines',
          content: `Respect other users and maintain appropriate conduct. No harassment, discrimination, or inappropriate behavior will be tolerated. Report any concerns immediately.`
        },
        {
          title: '5. COVID-19 Measures',
          content: `We follow recommended health guidelines including mask requirements, vehicle sanitization protocols, and health verification where required by local regulations.`
        },
        {
          title: '6. Incident Reporting',
          content: `Report any safety concerns, incidents, or inappropriate behavior through the app or our safety hotline. We take all reports seriously and investigate promptly.`
        },
        {
          title: '7. Vehicle Safety',
          content: `All vehicles must meet our safety standards and pass regular inspections. Drivers must maintain valid insurance and licensing as required by local laws.`
        },
        {
          title: '8. Zero Tolerance Policy',
          content: `We have a zero-tolerance policy for drugs, alcohol, and violence. Any violation will result in immediate account suspension and cooperation with authorities.`
        }
      ]
    },
    insurance: {
      id: 'insurance',
      title: 'Insurance Coverage',
      icon: <FaBalanceScale />,
      lastUpdated: 'March 1, 2024',
      version: '2.0',
      summary: 'Insurance policies and coverage details',
      sections: [
        {
          title: '1. Comprehensive Coverage',
          content: `All rides through Yuva are covered by our commercial auto insurance policy with up to $1,000,000 in liability coverage per incident.`
        },
        {
          title: '2. Liability Insurance',
          content: `We provide liability coverage for third-party injuries and property damage. This coverage is primary when the driver's personal insurance doesn't apply.`
        },
        {
          title: '3. Uninsured Motorist',
          content: `Our policy includes uninsured/underinsured motorist coverage to protect you in case of accidents with uninsured or underinsured drivers.`
        },
        {
          title: '4. Contingent Coverage',
          content: `When the driver's personal insurance doesn't cover an incident, our contingent coverage provides protection up to the policy limits.`
        },
        {
          title: '5. Claims Process',
          content: `In case of an incident, contact our support team immediately. We will guide you through the claims process and work with insurance providers on your behalf.`
        },
        {
          title: '6. Coverage Limits',
          content: `Our insurance provides coverage up to $1,000,000 for liability, $1,000,000 for uninsured/underinsured motorist, and comprehensive coverage for vehicle damage.`
        },
        {
          title: '7. International Coverage',
          content: `Insurance coverage may vary by country and region. Please check local terms for specific coverage details in your area of travel.`
        },
        {
          title: '8. Policy Updates',
          content: `We regularly review and update our insurance policies to ensure adequate coverage. Policy changes will be communicated to users in advance.`
        }
      ]
    },
    accessibility: {
      id: 'accessibility',
      title: 'Accessibility Statement',
      icon: <FaGlobe />,
      lastUpdated: 'March 1, 2024',
      version: '1.1',
      summary: 'Our commitment to accessibility',
      sections: [
        {
          title: '1. Commitment to Accessibility',
          content: `Yuva is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone.`
        },
        {
          title: '2. Accessible Features',
          content: `Our app includes features like voice assistance, high contrast mode, screen reader compatibility, and adjustable text sizes to accommodate various needs.`
        },
        {
          title: '3. Wheelchair Accessible Rides',
          content: `We offer wheelchair accessible vehicles in select markets. Contact support to request these services and check availability in your area.`
        },
        {
          title: '4. Continuous Improvement',
          content: `We continuously work to improve the accessibility of our platform based on user feedback and evolving accessibility standards.`
        },
        {
          title: '5. Feedback and Support',
          content: `We welcome feedback on accessibility. Contact our accessibility team at accessibility@yuvaride.com to report issues or suggest improvements.`
        },
        {
          title: '6. Compliance Standards',
          content: `We strive to meet WCAG 2.1 Level AA standards and comply with applicable accessibility laws and regulations in the regions we operate.`
        },
        {
          title: '7. Training and Awareness',
          content: `Our team receives regular training on accessibility best practices to ensure we maintain high standards of inclusivity in our services.`
        },
        {
          title: '8. Third-Party Services',
          content: `While we ensure our platform is accessible, we also work with third-party services to promote accessibility throughout the ride-sharing ecosystem.`
        }
      ]
    },
    cookies: {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: <FaLock />,
      lastUpdated: 'March 1, 2024',
      version: '1.3',
      summary: 'How we use cookies and tracking technologies',
      section: [
        {
          title: '1. What Are Cookies',
          content: `Cookies are small text files stored on your device when you visit our website. They help us provide, protect, and improve our services.`
        },
        {
          title: '2. Types of Cookies We Use',
          content: `We use essential cookies for basic functionality, performance cookies for analytics, functionality cookies for preferences, and targeting cookies for personalized content.`
        },
        {
          title: '3. How We Use Cookies',
          content: `Cookies help us authenticate users, remember preferences, analyze usage patterns, deliver personalized content, and improve overall user experience.`
        },
        {
          title: '4. Third-Party Cookies',
          content: `We may allow third parties to use cookies for analytics, advertising, and social media features. These parties have their own privacy policies.`
        },
        {
          title: '5. Cookie Management',
          content: `You can control cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our services.`
        },
        {
          title: '6. Do Not Track',
          content: `We respect Do Not Track signals and provide options for users to opt-out of certain tracking technologies while maintaining essential functionality.`
        },
        {
          title: '7. Data Retention',
          content: `Cookie data is retained for varying periods depending on the type of cookie and its purpose. Session cookies expire when you close your browser.`
        },
        {
          title: '8. Policy Updates',
          content: `We may update this cookie policy as technology and regulations evolve. Continued use of our services constitutes acceptance of updated policies.`
        }
      ]
    }
  };

  const quickLinks = [
    { id: 'terms', title: 'Terms of Service', icon: <FaFileAlt /> },
    { id: 'privacy', title: 'Privacy Policy', icon: <FaUserShield /> },
    { id: 'safety', title: 'Safety Guidelines', icon: <FaShieldAlt /> },
    { id: 'insurance', title: 'Insurance', icon: <FaBalanceScale /> },
    { id: 'accessibility', title: 'Accessibility', icon: <FaGlobe /> },
    { id: 'cookies', title: 'Cookie Policy', icon: <FaLock /> }
  ];

  const currentDocument = legalDocuments[activeDocument];

  const filteredSections = currentDocument.sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real implementation, this would download the PDF version
    alert(`Downloading ${currentDocument.title} PDF...`);
  };

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
    // In real implementation, set cookie preference
  };

  return (
    <section id="legal" className="legal-page">
      <div className="legal-container">
        {/* Header Section */}
        <div className="legal-header">
          <div className="header-content">
            <h1 className="legal-title">Legal & Compliance</h1>
            <p className="legal-subtitle">
              Transparent policies for your peace of mind. Understand your rights and our commitments.
            </p>
            
            {/* Search Bar */}
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search legal documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="legal-content">
          {/* Sidebar Navigation */}
          <div className="legal-sidebar">
            <div className="sidebar-header">
              <h3>Legal Documents</h3>
              
            </div>
            
            <nav className="document-nav">
              {quickLinks.map((doc) => (
                <button
                  key={doc.id}
                  className={`nav-item ${activeDocument === doc.id ? 'active' : ''}`}
                  onClick={() => setActiveDocument(doc.id)}
                >
                  <span className="nav-icon">{doc.icon}</span>
                  <span className="nav-text">{doc.title}</span>
                  <FaArrowRight className="nav-arrow" />
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4>Quick Actions</h4>
              <div className="action-buttons">
                <button className="action-btn" onClick={handleDownload}>
                  <FaDownload />
                  Download PDF
                </button>
                <button className="action-btn" onClick={handlePrint}>
                  <FaPrint />
                  Print Document
                </button>
              </div>
            </div>

            {/* Document Info */}
            <div className="document-info">
              <div className="info-item">
                <strong>Last Updated:</strong>
                <span>{currentDocument.lastUpdated}</span>
              </div>
              <div className="info-item">
                <strong>Version:</strong>
                <span>{currentDocument.version}</span>
              </div>
              <div className="info-item">
                <strong>Status:</strong>
                <span className="status-active">Active</span>
              </div>
            </div>
          </div>

          {/* Document Content */}
          <div className="document-content" ref={printRef}>
            {/* Document Header */}
            <div className="document-header">
              <div className="doc-title-section">
                <div className="doc-icon">{currentDocument.icon}</div>
                <div>
                  <h2>{currentDocument.title}</h2>
                  <p className="doc-summary">{currentDocument.summary}</p>
                </div>
              </div>
              
              <div className="doc-meta">
                <div className="meta-badge">
                  <FaCheckCircle className="badge-icon" />
                  <span>Current Version</span>
                </div>
                <div className="meta-badge">
                  <FaExclamationTriangle className="badge-icon" />
                  <span>Legal Document</span>
                </div>
              </div>
            </div>

            {/* Document Sections */}
            <div className="document-sections">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, index) => (
                  <section key={index} className="legal-section">
                    <h3 className="section-title">{section.title}</h3>
                    <div className="section-content">
                      <p>{section.content}</p>
                    </div>
                    
                  </section>
                ))
              ) : (
                <div className="no-results">
                  <FaSearch className="no-results-icon" />
                  <h3>No matching sections found</h3>
                  <p>Try adjusting your search terms or browse the document manually.</p>
                </div>
              )}
            </div>

          
         
          </div>
        </div>

        {/* Contact Section */}
        <div className="legal-contact">
          <div className="contact-header">
            <h3>Need Legal Assistance?</h3>
            <p>Our legal team is here to help with any questions or concerns</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email Support</h4>
                <p>legalhelp@yuvaride.com</p>
                <span>Response within 24 hours</span>
              </div>
            </div>
            
            <div className="contact-method">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone Support</h4>
                <p>+91 9876543210</p>
                <span>Mon-Fri, 9AM-6PM </span>
              </div>
            </div>
            
            <div className="contact-method">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Legal Department</h4>
                <p>Madhapur, Ayyappa society</p>
                <span>Hyderabad, 560001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Consent Banner */}
        {!acceptedCookies && (
          <div className="cookie-consent">
            <div className="cookie-content">
              <div className="cookie-text">
                <h4>Cookie Preferences</h4>
                <p>
                  We use cookies to enhance your experience, analyze traffic, and personalize content. 
                  By continuing to use our site, you consent to our use of cookies.
                </p>
              </div>
              <div className="cookie-actions">
                <button className="btn btn-primary" onClick={handleAcceptCookies}>
                  Accept All
                </button>
                <button className="btn btn-secondary">
                  Manage Preferences
                </button>
                <button className="btn btn-text">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Legal;