// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SkillMatch</div>
      <ul className="nav-links">
        <li>Jobs</li>
        <li>Login</li>
        <li>Signup</li>
      </ul>
    </nav>
  );
}

function JobGrid() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('.https://backendd-5ll.onrender.com/') // your backend URL
      .then(res => setJobs(res.data))
      .catch(err => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <div className="job-grid">
      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <button className="apply-btn">Apply</button>
          </div>
        ))
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      &copy; 2025 SkillMatch. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <h1>SkillMatch Jobs</h1>
      <JobGrid />
      <Footer />
    </div>
  );
}

export default App;
