import './App.css';
import {Routes,Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import New from './pages/home/New';
import Receive from './pages/receiver/Receive';
import About from './pages/about/About';
import New_Landing from './pages/new_landing/New_Landing';
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<New />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/about" element={<About />} />
        <Route path="/newlanding" element={<New_Landing />} />

      </Routes>
    </div>
  );
}

export default App;
