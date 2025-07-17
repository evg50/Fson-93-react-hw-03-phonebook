/* eslint-disable no-unused-vars */
import { useState } from 'react';
import css from './Phonebook.module.css';

export default function Phonebook({ addContacts, arr }) {
  const [name, setName] = useState('');

  const hendleName = e => {
    setName(e.target.value);
  };

  const handlerToSubmit = e => {
    e.preventDefault();
    console.log(name, 'event');
    addContacts(name);
    setName('');
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}> Phonebook</h1>
      <form onSubmit={handlerToSubmit}>
        <div className={css.formContainer}>
          <p className={css.nameTitle}>Name</p>
          <input
            type="text"
            value={name}
            onChange={hendleName}
            className={css.nameInput}
            placeholder="name"
          />
          <button className={css.addContactBtn}>Add contact</button>
        </div>
      </form>
      <h1 className={css.contactsTitle}>Contacts</h1>
      <ul className={css.contactList}>
        {arr?.map(el => {
          return (
            <li key={el} className={css.list}>
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
