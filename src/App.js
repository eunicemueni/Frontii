import { useEffect, useState } from 'react';

const BASE_URL = "https://backendd-5u.onrender.com";

function App() {
  const [jobs, setJobs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('username') || '');

  // Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/jobs`);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  // Signup
  const signup = async () => {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
  };

  // Login
  const login = async () => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    setMessage(data.message);
    if (data.token) {
      setToken(data.token);
      setLoggedInUser(username);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', username);
      setUsername('');
      setPassword('');
    }
  };

  // Logout
  const logout = () => {
    setToken('');
    setLoggedInUser('');
    setMessage('');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  };

  return (
    <div style={{ padding: '20px' }}>
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

      {!token ? (
        <div style={{ marginTop: '20px' }}>
          <h2>Signup / Login</h2>
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
          <div style={{ marginTop: '10px' }}>
            <button onClick={signup}>Signup</button>
            <button onClick={login} style={{ marginLeft: '10px' }}>Login</button>
          </div>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <div style={{ marginTop: '20px' }}>
          <h2>Welcome, {loggedInUser}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
