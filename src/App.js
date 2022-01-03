import React, { Component } from 'react';
import shortid from 'shortid';
import './App.css';
import ContactList from './components/ContactList';
import contactListData from './contactListData.json';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: contactListData,
    name: '',
    number: '',
    filter: '',
  };

  componentDidUpdate() {
    console.log('Upgrade Contacts');

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    console.log('DidMount +');

    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getFilterContact = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.getFilterContact();

    return (
      <div className="App">
        <h1 className="FormContainer__Title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2 className="FormContainer__Title">Contacts</h2>
        <ContactList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
