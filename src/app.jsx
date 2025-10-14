// frontend/src/App.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "./assets/skillmatch-logo.png"; // Final SkillMatch logo

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
                <li>
                  <a href="#pricing" onClick={(e)=>{ e.preventDefault(); setShowPricing(true); }} className="hover:underline">Pricing</a>
                </li>
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
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#061026] via-[#071634] to-[#031226]" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background: `linear-gradient(120deg, rgba(212,175,55,0.06) 0%, rgba(255,255,255,0.02) 25%, rgba(212,175,55,0.10) 50%, rgba(255,255,255,0.02) 75%, rgba(212,175,55,0.06) 100%)`,
                backgroundSize: "1000px 1000px",
                animation: "shimmer-diag 10s linear infinite"
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="mx-auto w-full h-auto mb-6 flex justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={Logo} alt="SkillMatch logo" className="w-64 md:w-80 object-contain drop-shadow-lg" />
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Find Real Jobs & Micro Tasks That <span className="text-[#D4AF37]">Pay Instantly</span>
              </h1>

              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join the global marketplace where opportunities meet skill — employers pay upfront, SkillMatch secures payouts, and workers earn real money.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a href="#jobs" className="px-6 py-3 rounded-lg bg-[#0F4BE5] font-semibold hover:shadow-lg transition-all duration-300">Explore Jobs</a>
                <a href="#tasks" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:shadow-lg transition-all duration-300">Start Earning</a>
                <button onClick={() => setShowEmployer(true)} className="px-4 py-3 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">Hire Skilled Workers</button>
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

          {/* Tasks */}
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
              <a href="#signup" className="px-6 py-3 rounded bg-[#D4AF37] text-black font-semibold">Join SkillMatch Now</a>
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
            <div className="mt-4 text-sm text-gray-400">
              Employers pay upfront for tasks. SkillMatch holds funds and disburses to workers. Employer dashboard coming soon.
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
            <div className="text-gray-300 text-sm space-y-3">
              <p>Post jobs & micro tasks easily.</p>
              <p>Prepaid payments, instant payout to workers after completion.</p>
              <p>Priority support & dashboard tools coming soon.</p>
            </div>
          </div>
        </div>
      )}

      {/* APPLY MODAL */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-lg w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Apply to {selectedJob.title}</h4>
              <button onClick={()=>setShowApply(false)} className="px-2 py-1">Close</button>
            </div>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white" />
              <input type="email" placeholder="Email" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white" />
              <textarea placeholder="Cover Letter" className="px-3 py-2 rounded bg-white/5 border border-white/10 text-white" />
              <button type="submit" className="px-4 py-2 rounded bg-[#D4AF37] text-black font-semibold">Submit Application</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
