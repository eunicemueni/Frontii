import React, { useState, useEffect } from "react";
import Logo from "./assets/skillmatch-logo.png";

export default function App() {
  const [user, setUser] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApply, setShowApply] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const jobs = [
    { id: 1, title: "Frontend Developer", company: "Kairah Tech", type: "Remote", salary: "$700-$1200", description: "Build beautiful React interfaces." },
    { id: 2, title: "Content Writer", company: "SkillMatch Media", type: "Remote", salary: "$300-$700", description: "Write SEO-friendly articles." }
  ];

  const tasks = [
    { id: 1, title: "Watch a short video", reward: 0.10, est: "1-2 min" },
    { id: 2, title: "Share a post", reward: 0.20, est: "2-3 min" }
  ];

  const loginUser = (email) => {
    setUser({ email });
    setShowLogin(false);
    setShowSignup(false);
    alert(`Logged in as ${email}`);
  };

  const startTask = (task) => {
    if (!user) return alert("Please login to start tasks.");
    alert(`Task started: ${task.title}`);
  };

  return (
    <div className="min-h-screen bg-[#0B0E15] text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-black/30">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="SkillMatch" className="w-16"/>
          <span className="text-[#D4AF37] font-bold">SkillMatch</span>
        </div>
        <div className="flex gap-2">
          {!user && <>
            <button onClick={() => setShowLogin(true)} className="border px-2 py-1">Login</button>
            <button onClick={() => setShowSignup(true)} className="bg-[#D4AF37] text-black px-2 py-1">Signup</button>
          </>}
          {user && <span>{user.email}</span>}
        </div>
      </header>

      {/* Jobs Section */}
      <section className="p-4">
        <h2 className="text-xl mb-2">Jobs</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map(job => (
            <div key={job.id} onClick={() => { setSelectedJob(job); setShowApply(true); }} className="p-4 border cursor-pointer hover:bg-white/10 rounded">
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm">{job.company} • {job.type}</p>
              <p className="text-sm">{job.salary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks Section */}
      <section className="p-4">
        <h2 className="text-xl mb-2">Micro Tasks</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map(task => (
            <div key={task.id} onClick={() => startTask(task)} className="p-4 border cursor-pointer hover:bg-white/10 rounded">
              <h3>{task.title}</h3>
              <p className="text-sm">Est: {task.est} • Reward: ${task.reward}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Apply Modal */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-[#071124] p-6 rounded-xl max-w-md w-full">
            <h3 className="font-bold text-lg mb-2">{selectedJob.title}</h3>
            <p className="text-sm mb-2">{selectedJob.company} • {selectedJob.type}</p>
            <p className="text-sm mb-4">{selectedJob.salary}</p>
            <p className="text-gray-300 mb-4">{selectedJob.description}</p>
            {!user && <p className="text-red-400 mb-2">Login or Signup to apply</p>}
            <div className="flex gap-2">
              {user && <button className="bg-[#D4AF37] px-3 py-1 rounded" onClick={()=>{alert("Applied!"); setShowApply(false)}}>Apply</button>}
              <button className="border px-3 py-1 rounded" onClick={()=>setShowApply(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-[#071124] p-6 rounded-xl max-w-sm w-full">
            <h3 className="font-bold mb-2">Login</h3>
            <input type="email" placeholder="Enter email" className="w-full mb-2 p-2 rounded bg-black/20"/>
            <button className="bg-[#D4AF37] px-3 py-1 rounded" onClick={()=>loginUser("user@example.com")}>Login</button>
            <button className="border px-3 py-1 rounded ml-2" onClick={()=>setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="bg-[#071124] p-6 rounded-xl max-w-sm w-full">
            <h3 className="font-bold mb-2">Signup</h3>
            <input type="email" placeholder="Enter email" className="w-full mb-2 p-2 rounded bg-black/20"/>
            <button className="bg-[#D4AF37] px-3 py-1 rounded" onClick={()=>loginUser("newuser@example.com")}>Signup</button>
            <button className="border px-3 py-1 rounded ml-2" onClick={()=>setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
