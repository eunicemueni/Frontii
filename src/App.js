import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const backendURL = "https://backen-g64w.onrender.com"; // replace with your backend URL

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${backendURL}/jobs`);
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(`${backendURL}/signup`, { username, password });
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${backendURL}/login`, { username, password });
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>SkillMatch Jobs</h1>

      {token ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        {jobs.length === 0 ? (
          <p>No jobs available</p>
        ) : (
          jobs.map((job) => (
            <div key={job._id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
