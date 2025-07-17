/* eslint-disable no-unused-vars */

import Phonebook from './Phonebook/Phonebook';
import { useState } from 'react';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  const addContacts = name => {
    setContacts(prev => [...prev, name]);
  };
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   // fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Phonebook addContacts={addContacts} arr={contacts} />
    </div>
  );
};
