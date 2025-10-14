// frontend/src/App.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./assets/skillmatch-logo.png";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [showEmployer, setShowEmployer] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null); // mock logged-in user
  const [earnings, setEarnings] = useState(0);

  // simulate loading
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  // Mock Jobs & Tasks
  useEffect(() => {
    setJobs([
      { id: 1, title: "Frontend Developer", company: "Kairah Tech", type: "Remote", salary: "$700 - $1,200", description: "Build beautiful React interfaces." },
      { id: 2, title: "Content Writer", company: "SkillMatch Media", type: "Remote", salary: "$300 - $700", description: "Write SEO-friendly articles." },
      { id: 3, title: "Product Manager", company: "Kairah Products", type: "Remote", salary: "$1,000 - $2,000", description: "Lead the product roadmap." },
      { id: 4, title: "UI/UX Designer", company: "SkillMatch Design", type: "Remote", salary: "$400 - $900", description: "Design amazing experiences." }
    ]);

    setTasks([
      { id: 1, title: "Watch a short video", reward: 0.10, est: "1-2 min" },
      { id: 2, title: "Share a post", reward: 0.20, est: "2-3 min" },
      { id: 3, title: "Answer a survey", reward: 0.50, est: "5-8 min" },
      { id: 4, title: "Install & review an app", reward: 0.25, est: "3-6 min" }
    ]);
  }, []);

  const tiers = [
    { id: "free", name: "Free", price: "$0", features: ["Browse jobs & tasks", "Up to 100 tasks", "1 withdrawal"] },
    { id: "pro", name: "Pro", price: "$9/mo", features: ["Unlimited tasks", "Unlimited withdrawals", "Apply to jobs"] },
    { id: "diamond", name: "Diamond", price: "$29/mo", features: ["AI-matched gigs", "Instant payouts", "Priority support"] }
  ];

  // Task start simulation
  const startTask = (task) => {
    if (!user) return alert("Please login/signup to start tasks.");
    const confirmed = window.confirm(`Start task: ${task.title}? Estimated time: ${task.est}`);
    if (confirmed) {
      alert(`Task "${task.title}" started! Submit proof when done.`);
    }
  };

  // Submit proof simulation
  const submitTask = (task) => {
    if (!user) return alert("Please login/signup to submit proof.");
    setEarnings(prev => prev + task.reward);
    alert(`Proof submitted! You earned $${task.reward.toFixed(2)}. Total earnings: $${(earnings + task.reward).toFixed(2)}`);
  };

  // Mock login/signup
  const loginUser = (email) => {
    setUser({ email });
    setShowLogin(false);
    setShowSignup(false);
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="min-h-screen bg-[#0B0E15] text-gray-100 antialiased">
      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer-diag {
          0% { background-position: -600px -600px; }
          100% { background-position: 600px 600px; }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="fixed w-full z-40">
        <nav className="backdrop-blur-md bg-black/30 border-b border-black/20">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img src={Logo} alt="SkillMatch" className="w-full h-full object-contain" />
                </div>
                <span className="text-[#D4AF37] font-bold text-lg hidden sm:inline-block">SkillMatch</span>
              </a>
              <ul className="hidden lg:flex items-center gap-6 text-sm text-gray-200">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#jobs" className="hover:underline">Jobs</a></li>
                <li><a href="#tasks" className="hover:underline">Tasks</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#pricing" onClick={(e)=>{ e.preventDefault(); setShowPricing(true); }} className="hover:underline">Pricing</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              {!user && <>
                <button onClick={() => setShowLogin(true)} className="px-3 py-2 rounded-md border border-white/10 hover:border-[#D4AF37] text-sm">Login</button>
                <button onClick={() => setShowSignup(true)} className="px-3 py-2 rounded-md bg-[#D4AF37] text-black font-semibold text-sm">Signup</button>
              </>}
              {user && <div className="text-sm font-semibold">{user.email}</div>}
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-24">
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#061026] via-[#071634] to-[#031226]" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background: `linear-gradient(120deg, rgba(212,175,55,0.06) 0%, rgba(255,255,255,0.02) 25%, rgba(212,175,55,0.10) 50%, rgba(255,255,255,0.02) 75%, rgba(212,175,55,0.06) 100%)`,
                backgroundSize: "1000px 1000px",
                animation: "shimmer-diag 7s linear infinite"
              }}
            />
          </div>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mx-auto w-full h-auto mb-6 flex justify-center">
                <img src={Logo} alt="SkillMatch logo" className="w-64 md:w-80 object-contain drop-shadow-lg" />
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">Find Real Jobs & Micro Tasks That Pay Instantly</h1>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">Join the global marketplace where opportunities meet skill — employers pay upfront, SkillMatch secures payouts, and workers earn real money.</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="#jobs" className="px-6 py-3 rounded-lg bg-[#0F4BE5] font-semibold hover:shadow-lg">Explore Jobs</a>
                <a href="#tasks" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:shadow-lg">Start Earning</a>
                <button onClick={() => setShowEmployer(true)} className="px-4 py-3 rounded-lg border border-white/10">Hire Skilled Workers</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* JOBS + TASKS */}
        <section id="jobs" className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Jobs */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">🎯 Remote Jobs</h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-32" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobs.map(j => (
                  <div key={j.id} onClick={() => { setSelectedJob(j); setShowApply(true); }} className="p-6 rounded-xl bg-white/5 border border-white/6 cursor-pointer hover:bg-white/10 transition">
                    <h3 className="font-semibold text-lg">{j.title}</h3>
                    <p className="text-sm text-gray-300">{j.company} • {j.type}</p>
                    <p className="text-sm text-gray-300 mt-2">{j.salary}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tasks */}
          <div id="tasks">
            <h2 className="text-2xl font-semibold text-white mb-4">🪙 Micro Tasks Marketplace</h2>
            {loading ? (
              <div className="grid grid-cols-1 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-24" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {tasks.map(t => (
                  <div key={t.id} onClick={() => startTask(t)} className="p-4 rounded-xl bg-white/5 border border-white/6 flex items-center justify-between cursor-pointer hover:bg-white/10 transition">
                    <div>
                      <h4 className="font-medium">{t.title}</h4>
                      <p className="text-sm text-gray-300">Est: {t.est}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-semibold text-[#D4AF37]">${t.reward.toFixed(2)}</div>
                      <button onClick={(e)=>{ e.stopPropagation(); submitTask(t); }} className="px-3 py-2 rounded bg-[#0F4BE5]">Submit Proof</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 text-sm text-gray-300">
              Free users: up to <strong>100 tasks</strong> and <strong>1 withdrawal</strong>. Upgrade for unlimited tasks & faster payouts.
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-10">
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">1</div>
              <div className="font-semibold">Sign Up Free</div>
              <div className="text-sm text-gray-300 mt-2">Create your account and start exploring jobs & tasks.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">2</div>
              <div className="font-semibold">Complete Jobs or Tasks</div>
              <div className="text-sm text-gray-300 mt-2">Choose what fits your skills and time. Employers pay upfront.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">3</div>
              <div className="font-semibold">Get Paid</div>
              <div className="text-sm text-gray-300 mt-2">Withdraw to SkillMatch Wallet (Kairah Pay) — mock at launch.</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="p-8 rounded-xl bg-white/4 border border-white/6">
            <h3 className="text-2xl font-semibold text-white mb-3">Turn your skills into real income</h3>
            <p className="text-gray-300 mb-4">Sign up free and start earning today — the marketplace is live.</p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={() => setShowSignup(true)} className="px-6 py-3 rounded bg-[#D4AF37] text-black font-semibold">Join SkillMatch Now</button>
              <button onClick={() => setShowPricing(true)} className="px-6 py-3 rounded border border-white/10">See Pricing</button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/6 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-300">© 2025 SkillMatch | A Kairah Product</div>
        </footer>
      </main>

      {/* PRICING MODAL */}
      {showPricing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-3xl w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">Pricing & Plans</h4>
              <button onClick={()=>setShowPricing(false)} className="px-2 py-1">Close</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tiers.map(t => (
                <div key={t.id} className="p-4 rounded-lg bg-white/3 border border-white/6">
                  <div className="text-lg font-bold mb-2">{t.name}</div>
                  <div className="text-sm mb-3">{t.price}</div>
                  <ul className="text-sm mb-3 space-y-1">
                    {t.features.map((f,i) => <li key={i}>• {f}</li>)}
                  </ul>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 rounded bg-[#0F4BE5]">Subscribe</button>
                    <button className="px-2 py-1 text-sm border border-white/10">PayPal</button>
                    <button className="px-2 py-1 text-sm border border-white/10">Stripe</button>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">(Payment integrations coming soon)</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* EMPLOYER MODAL */}
      {showEmployer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-2xl w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">For Employers</h4>
              <button onClick={()=>setShowEmployer(false)} className="px-2 py-1">Close</button>
            </div>
            <div className="text-gray-300">
              <p className="mb-3">Post tasks or remote jobs and pay upfront. SkillMatch will hold funds securely and distribute payouts to workers once tasks are verified.</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 rounded bg-[#D4AF37] text-black">Post a Task (Coming Soon)</button>
                <button className="px-4 py-2 rounded border border-white/10" onClick={()=>setShowEmployer(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* APPLY MODAL */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-xl w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Apply: {selectedJob.title}</h4>
              <button onClick={()=>setShowApply(false)} className="px-2 py-1">Close</button>
            </div>
            <div className="text-gray-300 mb-4">
              <p><strong>Company:</strong> {selectedJob.company}</p>
              <p><strong>Type:</strong> {selectedJob.type}</p>
              <p><strong>Salary:</strong> {selectedJob.salary}</p>
              <p className="mt-2">{selectedJob.description}</p>
            </div>
            {!user ? (
              <div className="text-center">
                <button onClick={() => { setShowLogin(true); setShowApply(false); }} className="px-4 py-2 rounded bg-[#D4AF37] text-black">Login / Signup to Apply</button>
              </div>
            ) : (
              <div>
                <input type="text" placeholder="Enter your email" className="w-full px-3 py-2 rounded mb-3 text-black" defaultValue={user.email} />
                <button className="px-4 py-2 rounded bg-[#0F4BE5] w-full">Submit Application</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-sm w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Login</h4>
              <button onClick={()=>setShowLogin(false)} className="px-2 py-1">Close</button>
            </div>
            <input type="email" placeholder="Enter email" className="w-full px-3 py-2 rounded mb-3 text-black" id="login-email" />
            <button onClick={() => loginUser(document.getElementById("login-email").value)} className="w-full px-4 py-2 rounded bg-[#D4AF37] text-black font-semibold">Login</button>
            <div className="mt-2 text-sm text-gray-400 text-center">
              Don't have an account? <button onClick={() => { setShowSignup(true); setShowLogin(false); }} className="text-[#0F4BE5] underline">Signup</button>
            </div>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-sm w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Signup</h4>
              <button onClick={()=>setShowSignup(false)} className="px-2 py-1">Close</button>
            </div>
            <input type="email" placeholder="Enter email" className="w-full px-3 py-2 rounded mb-3 text-black" id="signup-email" />
            <button onClick={() => loginUser(document.getElementById("signup-email").value)} className="w-full px-4 py-2 rounded bg-[#D4AF37] text-black font-semibold">Signup</button>
            <div className="mt-2 text-sm text-gray-400 text-center">
              Already have an account? <button onClick={() => { setShowLogin(true); setShowSignup(false); }} className="text-[#0F4BE5] underline">Login</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
