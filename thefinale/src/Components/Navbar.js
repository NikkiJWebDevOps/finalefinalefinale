import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="home">Find what you are looking for</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="welcome">Welcome</Nav.Link>
          <Nav.Link href="aboutus">About Us</Nav.Link>
          <Nav.Link href="contactingus">Contacting Us</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="services">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="service2">Service 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="services">Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="schedule">Schedule Today</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default App;
