import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'; // Make sure your logo is in this path

function Footer() {
  // Get the current year and the next year for the copyright notice.
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <footer className="bg-light border-top mt-auto py-3">
      <Container>
        <Row className="align-items-center">
          {/* Copyright Text on the left */}
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <span className="text-muted">
              &copy; GDGoC GCECT {currentYear}-{nextYear-2000} 
            </span>
          </Col>

          {/* Logo on the right */}
          <Col md={6} className="d-flex justify-content-center justify-content-md-end">
            <a href="#home">
              <img
                src={logo}
                height="30"
                alt="Google Developer Groups logo"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;