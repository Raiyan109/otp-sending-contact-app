import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { Route, Routes } from 'react-router-dom';
import ContactInfo from './components/ContactInfo/ContactInfo';
import SendMessage from './components/SendMessage/SendMessage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/contacts' element={<Cards />} />
        <Route path='/contact/:id' element={<ContactInfo />} />
        <Route path='/sendMessage' element={<SendMessage />} />
      </Routes>
    </div>
  );
}

export default App;
