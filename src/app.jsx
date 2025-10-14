// src/App.jsx
import React, { useState } from "react";
import Logo from "./assets/skillmatch-logo.png";

export default function App() {
  const [showJob, setShowJob] = useState(null);
  const [showModal, setShowModal] = useState(null);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Kairah Tech", salary: "$700-$1200", desc: "Build awesome frontends." },
    { id: 2, title: "Content Writer", company: "SkillMatch Media", salary: "$300-$700", desc: "Write engaging content." }
  ];

  const tasks = [
    { id: 1, title: "Watch Video", reward: 0.10, est: "2 min" },
    { id: 2, title: "Share Post", reward: 0.20, est: "3 min" }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E15] text-gray-100 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <img src={Logo} alt="SkillMatch" className="w-24" />
        <div className="flex gap-3">
          <button onClick={() => setShowModal("login")} className="px-3 py-2 border">Login</button>
          <button onClick={() => setShowModal("signup")} className="px-3 py-2 bg-[#D4AF37] text-black">Signup</button>
        </div>
      </header>

      {/* Jobs */}
      <section className="mb-8">
        <h2 className="text-xl mb-4">Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map(job => (
            <div
              key={job.id}
              onClick={() => setShowJob(job)}
              className="p-4 bg-white/10 rounded cursor-pointer hover:bg-white/20"
            >
              <h3 className="font-bold">{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.salary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks */}
      <section className="mb-8">
        <h2 className="text-xl mb-4">Micro Tasks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <div
              key={task.id}
              onClick={() => alert(`Start Task: ${task.title}`)}
              className="p-4 bg-white/10 rounded cursor-pointer hover:bg-white/20"
            >
              <h3 className="font-bold">{task.title}</h3>
              <p>Reward: ${task.reward.toFixed(2)}</p>
              <p>Est: {task.est}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Modal */}
      {showJob && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#071124] p-6 rounded w-96">
            <h3 className="text-lg font-bold mb-2">{showJob.title}</h3>
            <p>{showJob.company}</p>
            <p>{showJob.salary}</p>
            <p className="mt-2">{showJob.desc}</p>
            <button
              onClick={() => alert("Apply Flow (connect to Firebase or email)") }
              className="mt-4 px-4 py-2 bg-[#0F4BE5] rounded"
            >
              Apply Now
            </button>
            <button onClick={() => setShowJob(null)} className="mt-2 px-4 py-2 border rounded">Close</button>
          </div>
        </div>
      )}

      {/* Login / Signup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#071124] p-6 rounded w-96">
            <h3 className="text-lg font-bold mb-4">{showModal === "login" ? "Login" : "Signup"}</h3>
            <input type="email" placeholder="Email" className="w-full mb-3 p-2 rounded bg-black/30" />
            <input type="password" placeholder="Password" className="w-full mb-3 p-2 rounded bg-black/30" />
            <button className="w-full px-4 py-2 bg-[#D4AF37] text-black rounded">Submit</button>
            <button onClick={() => setShowModal(null)} className="mt-2 w-full px-4 py-2 border rounded">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
