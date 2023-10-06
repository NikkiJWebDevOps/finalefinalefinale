import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Route from react-router-dom
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import AboutUs from './Components/AboutUs'; 
import Services from './Components/Services'; 
import ContactingUs from './Components/ContactingUs'; 
import Schedule from './Components/Schedule'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Use 'element' instead of 'component' */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactingus" element={<ContactingUs />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
