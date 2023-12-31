import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contact">
          <h2>Contact Information</h2>
          <p>The Zen Pup</p>
          <p>Email: thezenpupabq@gmail.com</p>
          <p>Phone: +1 (505) 867-5309</p>
          {/* Add any other contact information you want */}
        </div>
        <div className="footer-project">
          <h2>React Router Unit Final Project</h2>
          <p className="text-center text-white">
          Copyright &copy; www.TheZenPup.com 2023 &copy;
        </p>
        </div>
      </div>
      <footer className="text-center mt-3">Nikki Johnson Week 16 Coding Assignment Promineo Tech · ©2023</footer>
      <footer className="text-center mt-3">The ZenPup ©️ 2023</footer>
    </footer>
  );
};

export default Footer;
