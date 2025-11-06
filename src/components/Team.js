import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Team.css';
import SundarImg from '../assets/sundar.webp';
import  ElonImg from '../assets/elon.webp';
import BillgatesImg from '../assets/billgates.webp';


const Team = () => {
  const teamMembers = [
    {
      name: 'Kiran',
      role: 'CEO & Founder',
        image: ElonImg,
      bio: 'Visionary leader with 10+ years in transportation tech',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Kiran Kumar',
      role: 'CTO',
       image: SundarImg,
      bio: 'Tech innovator specializing in mobility solutions',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Kiran Kumar Reddy',
      role: 'Head of Operations',
      image: BillgatesImg,
      bio: 'Operations expert ensuring seamless user experience',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
   
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-title">
          <h2 id="ourteam">Our Team</h2>
          <p id="kiran">Meet the passionate people behind Yuva</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="social-links">
                  <a href={member.social.linkedin}><FaLinkedin /></a>
                  <a href={member.social.twitter}><FaTwitter /></a>
                  <a href={member.social.instagram}><FaInstagram /></a>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;