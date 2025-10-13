// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("https://backendd-5ll.onrender.com/") // your backend URL
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="main-container">
        <h1>Explore Jobs at SkillMatch</h1>
        <div className="job-grid">
          {jobs.length === 0 ? (
            <p>No jobs available</p>
          ) : (
            jobs.map(job => (
              <JobCard key={job._id} title={job.title} company={job.company} />
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">SkillMatch</div>
    <ul className="nav-links">
      <li>Home</li>
      <li>Jobs</li>
      <li>Login</li>
      <li>Signup</li>
    </ul>
  </nav>
);

const JobCard = ({ title, company }) => (
  <div className="job-card">
    <h3>{title}</h3>
    <p>{company}</p>
    <button className="apply-btn">Apply Now</button>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 SkillMatch. All rights reserved.</p>
  </footer>
);

export default App;
