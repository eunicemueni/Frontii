import { useEffect, useState } from 'react';

const BASE_URL = "https://backendd-5u.onrender.com";

function ProtectedPage({ username, token, logout }) {
  const [premiumJobs, setPremiumJobs] = useState([]);

  useEffect(() => {
    const fetchPremiumJobs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/premium-jobs`, {
          headers: { Authorization: token }
        });
        const data = await res.json();
        setPremiumJobs(data.jobs || []);
      } catch (err) {
        console.error("Error fetching premium jobs:", err);
      }
    };
    fetchPremiumJobs();
  }, [token]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome, {username}!</h1>
      <h2>Premium Jobs (Protected)</h2>
      <ul>
        {premiumJobs.length > 0 ? (
          premiumJobs.map(job => (
            <li key={job.id}>{job.title} at {job.company}</li>
          ))
        ) : (
          <li>No premium jobs available</li>
        )}
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProtectedPage;
