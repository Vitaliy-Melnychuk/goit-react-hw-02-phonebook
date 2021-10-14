import { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: '',
  }

  addContact = ({name, number}) => {
    const contact = {
        id: shortid.generate(),
        name,
        number,
    };

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({contacts}) => ({
        contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  }

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContact();

    return (
      <div className={s.div}>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;