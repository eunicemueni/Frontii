// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendd-5ll.onrender.com/jobs") // replace with your backend URL
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="logo">SkillMatch</div>
        <ul className="nav-links">
          <li>Jobs</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </nav>

      <h1>Available Jobs</h1>
      <div className="job-grid">
        {jobs.length ? (
          jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button className="apply-btn">Apply</button>
            </div>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} SkillMatch. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
