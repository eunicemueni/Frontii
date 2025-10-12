import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("https://backendd-5u.onrender.com/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>SkillMatch Jobs</h1>
      <ul>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <li key={job.id}>{job.title} at {job.company}</li>
          ))
        ) : (
          <li>No jobs available</li>
        )}
      </ul>
    </div>
  );
}

export default App;
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signup = async () => {
    const res = await fetch("https://backendd-5u.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>SkillMatch Signup</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={signup}>Signup</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
