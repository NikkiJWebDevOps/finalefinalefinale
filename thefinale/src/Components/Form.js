import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      dogBreedName: '',
      additionalInfo: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { fullName, phoneNumber, email, dogBreedName, additionalInfo } = this.state;
    if (!fullName || !phoneNumber || !email || !dogBreedName || !additionalInfo) {
      alert('Please fill in all fields.');
    } else {
      // You can submit the form data or perform any other actions here
      // For example, you can use an API call to send the data to a server.
      alert('Form submitted successfully!');
      // Redirect to a thank you page or any other desired route
      const navigate = useNavigate();
      navigate('/thank-you');
    }
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dogBreedName" className="form-label">
              Dog Breed Name
            </label>
            <input
              type="text"
              className="form-control"
              id="dogBreedName"
              name="dogBreedName"
              value={this.state.dogBreedName}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="additionalInfo" className="form-label">
              Additional Information
            </label>
            <textarea
              className="form-control"
              id="additionalInfo"
              name="additionalInfo"
              value={this.state.additionalInfo}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
