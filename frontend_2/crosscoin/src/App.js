
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Landing from './Pages/landing/Landing';
import Navbar from './components/Navbar';
import Register from './Pages/register/Register';
import Login from './Pages/login/Login';
import Main from './Pages/main/Main';
import Receive from './Pages/receive/Receive';
import Qr from './Pages/qr/Qr';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/receive" element={<Receive />} />
        <Route path="/qr" element={<Qr />} />

      </Routes>
    </div>
  );
}
export default App;
