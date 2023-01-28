import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards/Cards';
import { Route, Routes } from 'react-router-dom';
import ContactInfo from './components/ContactInfo/ContactInfo';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/contactInfo' element={<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
