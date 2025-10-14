import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./assets/skillmatch-logo.png"; // your logo

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [showEmployer, setShowEmployer] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const fakeJobs = [
    { id: 1, title: "Frontend Developer", company: "Kairah Tech", type: "Remote", salary: "$700 - $1,200" },
    { id: 2, title: "Content Writer", company: "SkillMatch Media", type: "Remote", salary: "$300 - $700" },
    { id: 3, title: "Product Manager", company: "Kairah Products", type: "Remote", salary: "$1,000 - $2,000" },
    { id: 4, title: "UI/UX Designer", company: "SkillMatch Design", type: "Remote", salary: "$400 - $900" }
  ];

  const fakeTasks = [
    { id: 1, title: "Watch a short video", reward: 0.10, est: "1-2 min" },
    { id: 2, title: "Share a post", reward: 0.20, est: "2-3 min" },
    { id: 3, title: "Answer a survey", reward: 0.50, est: "5-8 min" },
    { id: 4, title: "Install & review an app", reward: 0.25, est: "3-6 min" }
  ];

  const tiers = [
    { id: "free", name: "Free", price: "$0", features: ["Browse jobs & tasks", "Up to 100 tasks", "1 withdrawal"] },
    { id: "pro", name: "Pro", price: "$9/mo", features: ["Unlimited tasks", "Unlimited withdrawals", "Apply to jobs"] },
    { id: "diamond", name: "Diamond", price: "$29/mo", features: ["AI-matched gigs", "Instant payouts", "Priority support"] }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E15] text-gray-100 antialiased">
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
              <button onClick={() => setShowPricing(true)} className="hidden sm:inline-block px-3 py-2 rounded-md bg-[#102A7A] hover:bg-[#0D1F62]">Plans</button>
              <a href="#login" className="px-3 py-2 rounded-md border border-white/10 hover:border-[#D4AF37] text-sm">Login</a>
              <a href="#signup" className="px-3 py-2 rounded-md bg-[#D4AF37] text-black font-semibold text-sm">Signup</a>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-24">
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* background shimmer */}
          <div className="absolute inset-0 shimmer-bg -z-10" />
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

        {/* QUICK STATS */}
        <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/4 border border-white/6 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">10,000+</div>
            <div className="text-sm text-gray-300 mt-2">Jobs Listed</div>
          </div>
          <div className="bg-white/4 border border-white/6 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">50,000+</div>
            <div className="text-sm text-gray-300 mt-2">Tasks Completed</div>
          </div>
          <div className="bg-white/4 border border-white/6 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">$100,000+</div>
            <div className="text-sm text-gray-300 mt-2">Paid to Workers</div>
          </div>
        </section>

        {/* Jobs + Tasks Marketplace */}
        <section id="jobs" className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">🎯 Remote Jobs</h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-32" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fakeJobs.map(j => (
                  <div key={j.id} className="p-6 rounded-xl bg-white/5 border border-white/6">
                    <h3 className="font-semibold text-lg">{j.title}</h3>
                    <p className="text-sm text-gray-300">{j.company} • {j.type}</p>
                    <p className="text-sm text-gray-300 mt-2">{j.salary}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={() => { setSelectedJob(j); setShowApply(true); }} className="px-3 py-2 rounded bg-[#0F4BE5]">Apply Now</button>
                      <button className="px-3 py-2 rounded border border-white/10">Save</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div id="tasks">
            <h2 className="text-2xl font-semibold text-white mb-4">🪙 Micro Tasks Marketplace</h2>
            {loading ? (
              <div className="grid grid-cols-1 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-24" />)}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {fakeTasks.map(t => (
                  <div key={t.id} className="p-4 rounded-xl bg-white/5 border border-white/6 flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">{t.title}</h4>
                      <p className="text-sm text-gray-300">Est: {t.est}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-semibold text-[#D4AF37]">${t.reward.toFixed(2)}</div>
                      <button onClick={() => setShowPricing(true)} className="px-3 py-2 rounded bg-[#0F4BE5]">Start</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-6 text-sm text-gray-300">
              Free users: up to <strong>100 tasks</strong> and <strong>1 withdrawal</strong>. Upgrade for unlimited tasks & faster payouts.
            </div>
            <div className="mt-6">
              <button onClick={() => setShowEmployer(true)} className="px-4 py-2 rounded border border-white/10">For Employers</button>
            </div>
          </div>
        </section>

        {/* ... rest of App.jsx modals and footer are same as previous code ... */}

      </main>
    </div>
  );
}
