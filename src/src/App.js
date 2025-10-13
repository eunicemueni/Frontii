// src/App.js
import React from 'react';
import './App.css';

const jobs = [
  { title: "Frontend Developer", company: "Kairah Tech" },
  { title: "Backend Developer", company: "SkillMatch" },
  { title: "Fullstack Developer", company: "Kairah Corp" },
  { title: "UI/UX Designer", company: "SkillMatch Design" },
  { title: "Project Manager", company: "Kairah Tech" },
  { title: "Data Scientist", company: "SkillMatch AI" },
  { title: "Mobile App Developer", company: "Kairah Mobile" },
  { title: "DevOps Engineer", company: "SkillMatch Cloud" },
  { title: "QA Engineer", company: "Kairah Tech" },
  { title: "Product Manager", company: "SkillMatch Products" },
];

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
  return (
    <div className="job-grid">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <button className="apply-btn">Apply</button>
        </div>
      ))}
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
