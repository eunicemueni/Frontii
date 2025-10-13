import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://your-backend-url.onrender.com/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="bg-[#F5F5F5] min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-[#0A66C2]">Available Jobs</h1>
      <div>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard key={job._id} title={job.title} company={job.company} premium={job.premium} />
          ))
        ) : (
          <p className="text-gray-700">No jobs available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
