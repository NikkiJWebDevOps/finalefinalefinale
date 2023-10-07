import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="home">Find what you are looking for!!</Navbar.Brand>
      <br></br>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <br></br>
      <Navbar.Collapse id="basic-navbar-nav">
      <br></br>
        <Nav className="mr-auto">
        <br></br>
          <Nav.Link href="welcome">Welcome</Nav.Link>
          <br></br>
          <Nav.Link href="about">About</Nav.Link>
          <br></br>
          <Nav.Link href="contact">Contact</Nav.Link>
          <br></br>

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">TBD</NavDropdown.Item>
            <br></br>
            <NavDropdown.Item href="pricing">Pricing</NavDropdown.Item>
            <br></br>
            <NavDropdown.Item href="form">Schedule Today</NavDropdown.Item>
            <br></br>
            <NavDropdown.Divider />
            <br></br>
            <NavDropdown.Item href="appointmentpage">Appointment Page</NavDropdown.Item>
            <br></br>
            </NavDropdown>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;