import { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import SelectedContact from './SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null); // State for selected contact ID

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
