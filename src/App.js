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
