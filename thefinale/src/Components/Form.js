import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      dogBreedName: '',
      additionalInfo: '',
      data: [],
      editingIndex: -1,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneNumber, email, dogBreedName, additionalInfo, editingIndex } = this.state;
    const newData = {
      fullName,
      phoneNumber,
      email,
      dogBreedName,
      additionalInfo,
    };

    if (editingIndex === -1) {
      this.setState((prevState) => ({
        data: [...prevState.data, newData],
      }));
    } else {
      this.setState((prevState) => {
        const updatedData = [...prevState.data];
        updatedData[editingIndex] = newData;
        return { data: updatedData, editingIndex: -1 };
      });
    }

    this.clearForm();
  };

  clearForm() {
    this.setState({
      fullName: '',
      phoneNumber: '',
      email: '',
      dogBreedName: '',
      additionalInfo: '',
      editingIndex: -1,
    });
  }

  handleEdit = (index) => {
    const { data } = this.state;
    const itemToEdit = data[index];
    this.setState({
      fullName: itemToEdit.fullName,
      phoneNumber: itemToEdit.phoneNumber,
      email: itemToEdit.email,
      dogBreedName: itemToEdit.dogBreedName,
      additionalInfo: itemToEdit.additionalInfo,
      editingIndex: index,
    });
  };

  handleDelete = (index) => {
    const { data } = this.state;
    const updatedData = [...data];
    updatedData.splice(index, 1);
    this.setState({ data: updatedData });
  };

  render() {
    const { data } = this.state;

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
          <button type="submit" className="btn btn-primary">
            {this.state.editingIndex === -1 ? 'Create' : 'Update'}
          </button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Dog Breed Name</th>
              <th>Additional Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.fullName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.dogBreedName}</td>
                <td>{item.additionalInfo}</td>
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
