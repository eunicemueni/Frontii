// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // ← Your custom styles

// Optional: If you are using TailwindCSS
import './index.css'; // Ensure Tailwind base, components, utilities are included

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
