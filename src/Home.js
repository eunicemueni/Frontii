// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // Make sure to create this CSS file

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://backendd-5ll.onrender.com/jobs"); // Your backend URL
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">SkillMatch</h1>
        <div className="nav-buttons">
          <button className="btn-teal">Login</button>
          <button className="btn-gold">Signup</button>
        </div>
      </nav>

      {/* Jobs Section */}
      <section className="jobs-section">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
            </div>
          ))
        ) : (
          <p className="no-jobs">No jobs available</p>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 SkillMatch. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
