import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.ContactList__item}>
        <p className={s.ContactList__name}>
          {name}:<span className={s.ContactList__number}>{number}</span>
        </p>
        <button
          type="button"
          className={s.ContactList__deleteBtn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
