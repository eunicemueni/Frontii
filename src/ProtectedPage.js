import { useEffect, useState } from "react";

const BASE_URL = "https://backendd-5u.onrender.com";

function ProtectedPage({ username, token, logout }) {
  const [premiumJobs, setPremiumJobs] = useState([]);
  const [profile, setProfile] = useState({});

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

    const fetchProfile = async () => {
      try {
        const res = await fetch(`${BASE_URL}/profile`, {
          headers: { Authorization: token }
        });
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchPremiumJobs();
    fetchProfile();
  }, [token]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, {username}!</h1>
      <h2>Profile Info:</h2>
      <p>Username: {profile.username}</p>
      <p>Admin: {profile.isAdmin ? "Yes" : "No"}</p>

      <h2>Premium Jobs (Protected)</h2>
      <ul>
        {premiumJobs.length > 0 ? (
          premiumJobs.map(job => (
            <li key={job._id || job.id}>{job.title} at {job.company}</li>
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
