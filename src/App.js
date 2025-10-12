import { useState, useEffect } from "react";
import ProtectedPage from "./ProtectedPage";

const BASE_URL = "https://backendd-5u.onrender.com"; // backend URL

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("username") || "");
  const [jobs, setJobs] = useState([]);
  const [isSignup, setIsSignup] = useState(false);

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

  const handleSignupLogin = async () => {
    const endpoint = isSignup ? "signup" : "login";
    try {
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        setLoggedInUser(username);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
      } else if (data.message) {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    setToken("");
    setLoggedInUser("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  if (token) {
    return <ProtectedPage username={loggedInUser} token={token} logout={logout} />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>SkillMatch Jobs</h1>
      <ul>
        {jobs.length > 0 ? (
          jobs.map(job => (
            <li key={job._id || job.id}>
              {job.title} at {job.company}
            </li>
          ))
        ) : (
          <li>No jobs available</li>
        )}
      </ul>

      <hr />
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      /><br />
      <button onClick={handleSignupLogin}>{isSignup ? "Signup" : "Login"}</button>
      <p onClick={() => setIsSignup(!isSignup)} style={{ cursor: "pointer", color: "blue" }}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Signup"}
      </p>
    </div>
  );
}

export default App;
