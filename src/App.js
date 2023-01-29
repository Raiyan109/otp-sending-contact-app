import './App.css';
import Cards from './components/Cards/Cards';
import { Route, Routes } from 'react-router-dom';
import ContactInfo from './components/ContactInfo/ContactInfo';
import SendMessage from './components/SendMessage/SendMessage';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Cards />} />
        <Route path='/contact/:id' element={<ContactInfo />} />
        <Route path='/sendMessage' element={<SendMessage />} />
      </Routes>
    </div>
  );
}

export default App;
