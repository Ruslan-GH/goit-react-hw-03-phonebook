import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="FormContainer__Label">Name</label>
        <input
          style={{ height: '25px' }}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title=" "
          required
          placeholder="Enter name, pls"
        />

        <label className="FormContainer__Label">Number</label>
        <input
          style={{ height: '25px' }}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
          pattern="(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})"
          title=" "
          required
          placeholder="Enter number, pls"
        />
        <button
          type="submit"
          style={{ width: '100px', marginTop: '20px', display: 'block' }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
