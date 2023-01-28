import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { Route, Routes } from 'react-router-dom';
import ContactInfo from './components/ContactInfo/ContactInfo';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    fetch('contacts.json')
      .then(res => res.json())
      .then(data => setContacts(data))
  }, [])
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Cards contacts={contacts} />} />
        <Route path='/contactInfo' element={<ContactInfo contacts={contacts} />} />
      </Routes>
    </div>
  );
}

export default App;
