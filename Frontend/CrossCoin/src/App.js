import './App.css';
import {Routes,Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
