import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import NavbarComponent from './Components/NavbarComponent';
import Welcome from './Components/Welcome';
import About from './Components/About'; 
import Pricing from './Components/Pricing'; 
import Contact from './Components/Contact'; 
import Form from './Components/Form'; 
import AppointmentPage from './Components/AppointmentPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/appointmentpage" element={<AppointmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
