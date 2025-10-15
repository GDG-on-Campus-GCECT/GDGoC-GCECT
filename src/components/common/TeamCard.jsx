import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Import icons
import './TeamCard.css'; // Custom CSS for styling

const TeamCard = ({
  name,
  role,
  description,
  image,
  github,
  linkedin
}) => {
  return (
    <Card className="team-card mb-4 p-3 shadow-lg rounded-5">
      <Row className="g-0 align-items-center">
        {/* Left Section: Text Content */}
        <Col md={7} className="d-flex flex-column justify-content-center p-3">
          <h3 className="fw-bold mb-1">{name}</h3>
          <p className="text-muted lead mb-2">{role}</p>
          <p className="text-dark small mb-3">{description}</p>
          <div className="social-icons">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="me-3">
                <FaGithub size={28} className="text-dark hover-effect" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={28} className="text-dark hover-effect" />
              </a>
            )}
          </div>
        </Col>

        {/* Right Section: Image */}
        <Col md={5}>
          <div className="team-card-img-container">
            <Card.Img 
              src={image} 
              alt={name} 
              className="team-card-img rounded-4" 
            />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default TeamCard;