import React from 'react';
import { Container, Row, Col, Form, Button, Table } from 'react-bootstrap';

function AppointmentPage() {
  return (
    <Container className="pt-2 pb-6 bg-light font-weight-bold">
      {/* Navbar code */}
      {/* ... (your existing HTML navbar code) ... */}

      <Row>
        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="your-name">Your Name</Form.Label>
            <Form.Control type="text" id="your-name" placeholder="Your Name" required />
          </Form.Group>
        </Col>

        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="pet-name">Your Pet's Name</Form.Label>
            <Form.Control type="text" id="pet-name" placeholder="Your Pet's Name" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="email">Your Email Address</Form.Label>
            <Form.Control type="email" id="email" placeholder="Your Email Address" required />
          </Form.Group>
        </Col>

        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="phone">Your Phone Number (including area code)</Form.Label>
            <Form.Control type="tel" id="phone" placeholder="Your Phone Number" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="service-request">Service Requesting</Form.Label>
            <Form.Control type="text" id="service-request" placeholder="Service Requesting" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="availability-from">Date availability from</Form.Label>
            <Form.Control type="date" id="availability-from" required />
          </Form.Group>
        </Col>

        <Col sm>
          <Form.Group>
            <Form.Label htmlFor="availability-to">to Date</Form.Label>
            <Form.Control type="date" id="availability-to" required />
          </Form.Group>
        </Col>
      </Row>

      <Button id="add" variant="primary" className="form-control">
        Create Request Here
      </Button>

      {/* Table code */}
      <Table id="list" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Your Name</th>                    
            <th>Your Pet's Name</th>                    
            <th>Your Email Address</th>                    
            <th>Your Phone Number</th>                   
            <th>Service Requesting</th>
            <th>Date availability from</th>
            <th>to Date</th>
          </tr>
        </thead>

        <tbody>
          {/* Table rows go here */}
        </tbody>
      </Table>

      {/* Additional content */}
      <p>
        {/* ... (your existing HTML content) ... */}
      </p>
      <p>
        {/* ... (your existing HTML content) ... */}
      </p>

      {/* Footer */}
      <footer className="text-center mt-3">Nikki Johnson Week 16 Coding Assignment Promineo Tech · ©2023</footer>
      <footer className="text-center mt-3">The ZenPup ©️ 2023</footer>
    </Container>
  );
}

export default AppointmentPage;
