import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Button, Table } from 'react-bootstrap';

function AppointmentPage() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    email: '',
    phone: '',
    serviceRequest: '',
    availabilityFrom: '',
    availabilityTo: '',
  });
  const [editAppointment, setEditAppointment] = useState(null);

  useEffect(() => {
    fetchAppointments(); // Fetch data from the API on component mount
  }, []);

  const fetchAppointments = () => {
    fetch('https://645d8efd250a246ae3221d6d.mockapi.io/Form')
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://645d8efd250a246ae3221d6d.mockapi.io/Form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setAppointments((prevAppointments) => [...prevAppointments, data]);
        setFormData({
          name: '',
          petName: '',
          email: '',
          phone: '',
          serviceRequest: '',
          availabilityFrom: '',
          availabilityTo: '',
        });
      })
      .catch((error) => console.error('Error creating appointment:', error));
  };

  const handleEdit = (appointment) => {
    setEditAppointment(appointment);
    setFormData({
      name: appointment.name,
      petName: appointment.petName,
      email: appointment.email,
      phone: appointment.phone,
      serviceRequest: appointment.serviceRequest,
      availabilityFrom: appointment.availabilityFrom,
      availabilityTo: appointment.availabilityTo,
    });
  };

  const handleSaveEdit = () => {
    fetch(`https://645d8efd250a246ae3221d6d.mockapi.io/Form/${editAppointment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((updatedAppointment) => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((appointment) =>
            appointment.id === updatedAppointment.id ? updatedAppointment : appointment
          )
        );
        setEditAppointment(null);
        setFormData({
          name: '',
          petName: '',
          email: '',
          phone: '',
          serviceRequest: '',
          availabilityFrom: '',
          availabilityTo: '',
        });
      })
      .catch((error) => console.error('Error updating appointment:', error));
  };

  const handleDelete = (id) => {
    fetch(`https://645d8efd250a246ae3221d6d.mockapi.io/Form/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id)
        );
      })
      .catch((error) => console.error('Error deleting appointment:', error));
  };

  return (
    <Container className="pt-2 pb-6 bg-light font-weight-bold">
      <Form onSubmit={editAppointment ? handleSaveEdit : handleSubmit}>
        <Row>
          <Form.Group controlId="name">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="petName">
            <Form.Label>Your Pets Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your pet's name"
              value={formData.petName}
              onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Your Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="serviceRequest">
            <Form.Label>Service Requesting</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the service you are requesting"
              value={formData.serviceRequest}
              onChange={(e) => setFormData({ ...formData, serviceRequest: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="availabilityFrom">
            <Form.Label>Date availability from</Form.Label>
            <Form.Control
              type="date"
              value={formData.availabilityFrom}
              onChange={(e) => setFormData({ ...formData, availabilityFrom: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="availabilityTo">
            <Form.Label>to Date</Form.Label>
            <Form.Control
              type="date"
              value={formData.availabilityTo}
              onChange={(e) => setFormData({ ...formData, availabilityTo: e.target.value })}
            />
          </Form.Group>
        </Row>
        <Button id="add" variant="primary" className="form-control" type="submit">
          {editAppointment ? 'Save Edit' : 'Create Request Here'}
        </Button>
      </Form>

      <Table id="list" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Your Name</th>
            <th>Your Pets Name</th>
            <th>Your Email Address</th>
            <th>Your Phone Number</th>
            <th>Service Requesting</th>
            <th>Date availability from</th>
            <th>to Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.name}</td>
              <td>{appointment.petName}</td>
              <td>{appointment.email}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.serviceRequest}</td>
              <td>{appointment.availabilityFrom}</td>
              <td>{appointment.availabilityTo}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(appointment)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(appointment.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AppointmentPage;
