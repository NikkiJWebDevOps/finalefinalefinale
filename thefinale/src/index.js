import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.css';
import App from './App';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
