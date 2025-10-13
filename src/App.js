// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your live backend URL
    axios.get("https://backendd-5ll.onrender.com/jobs")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-container">
      <header className="navbar">
        <div className="logo">SkillMatch</div>
        <ul className="nav-links">
          <li>Jobs</li>
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </header>

      <h1>Explore Jobs</h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p style={{ textAlign: "center" }}>No jobs available</p>
      ) : (
        <div className="job-grid">
          {jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      )}

      <footer className="footer">
        © 2025 SkillMatch. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
