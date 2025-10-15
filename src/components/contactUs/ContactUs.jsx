import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ContactUs.css'; // For all custom styles
import contactIllustration from '../../assets/images/contact.webp'; // Your illustration

// Data for social links
const socialLinks = [
  { name: 'INSTA', url: 'https://www.instagram.com/gdg_gcect/', colorClass: 'text-google-green' },
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/company/google-developer-groups-on-campus-gcect', colorClass: 'text-google-blue' },
  { name: 'GITHUB', url: 'https://github.com/GDG-on-Campus-GCECT', colorClass: 'text-google-red' },
  { name: 'EMAIL', url: 'mailto:gdg.gcect@gmail.com', colorClass: 'text-google-yellow' },
];

function ContactUs() {
  return (
    <section className="contact-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Illustration */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img 
              src={contactIllustration} 
              alt="Community illustration" 
              className="img-fluid contact-illustration"
            />
          </Col>

          {/* Right Column: Social Links */}
          <Col md={6} className="socials-content">
            <h2 className="display-4 fw-bold mb-4">SOCIALS</h2>
            <ul className="list-unstyled social-links">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className={`${link.colorClass} social-link-item`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;