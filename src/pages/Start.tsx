import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Housinglist from '../components/HousingList';
import '../styles/start.css';

function Start() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Housinglist />} />
        <Route path="housing" element={<Housinglist />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default Start;
