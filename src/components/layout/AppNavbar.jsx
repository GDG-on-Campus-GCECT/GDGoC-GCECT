import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // 👈 Import Link
import logo from "../../assets/images/logo.png";

function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg" className="border-bottom google-font-navbar">
      <Container>
        {/* 👇 Use as={Link} and to="/" */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            width="200"
            height="40"
            className="d-inline-block align-top"
            alt="Google Developer Groups logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* 👇 Update all Nav.Link components */}
            <Nav.Link as={Link} to="/" className="fs-5 mx-2 nav-link-hover">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/events"
              className="fs-5 mx-2 nav-link-hover"
            >
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/team" className="fs-5 mx-2 nav-link-hover">
              Team
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="fs-5 mx-2 nav-link-hover"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
