import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Single-file React + Tailwind component for SkillMatch homepage + placeholders
// Usage: drop this file into your React project (src/) and import as App.
// TailwindCSS must be configured in the project. Framer Motion should be installed.

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showEmployerModal, setShowEmployerModal] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Simulate shimmer loading
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const fakeJobs = [
    { id: 1, title: "Frontend Developer", company: "Kairah Tech", type: "Remote", salary: "$700 - $1,200" },
    { id: 2, title: "Backend Developer", company: "SkillMatch", type: "Remote", salary: "$800 - $1,400" },
    { id: 3, title: "Fullstack Developer", company: "Kairah Corp", type: "Remote", salary: "$900 - $1,600" },
    { id: 4, title: "UI/UX Designer", company: "SkillMatch Design", type: "Remote", salary: "$400 - $900" }
  ];

  const fakeTasks = [
    { id: 1, title: "Watch a short video", reward: 0.10, est: "1-2 min" },
    { id: 2, title: "Share a post on social media", reward: 0.20, est: "2-3 min" },
    { id: 3, title: "Answer a short survey", reward: 0.50, est: "5-8 min" },
    { id: 4, title: "Install & review an app", reward: 0.25, est: "3-6 min" }
  ];

  // Mock tiers and wallet placeholders
  const tiers = [
    { id: "free", name: "Free", price: "$0", benefits: ["Browse jobs & tasks", "Up to 100 tasks", "1 withdrawal"] },
    { id: "pro", name: "Pro", price: "$9/mo", benefits: ["Unlimited tasks", "Unlimited withdrawals", "Apply to jobs"] },
    { id: "diamond", name: "Diamond", price: "$29/mo", benefits: ["AI-matched gigs", "Instant payouts", "Priority support"] }
  ];

  return (
    <div className="min-h-screen bg-[#0B0E15] text-gray-100 antialiased">
      {/* Global shimmer keyframes (Tailwind + inline style) */}
      <style>{`
        @keyframes shimmer-diag {
          0% { background-position: -400px -400px; }
          100% { background-position: 400px 400px; }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="fixed w-full z-30">
        <nav className="backdrop-blur-md bg-black/30 border-b border-black/25">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-3">
                {/* Big logo placeholder (use your black-gold image) */}
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#111827] to-[#0B1220] flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">SM</span>
                </div>
                <span className="font-semibold text-lg text-[#D4AF37]">SkillMatch</span>
              </a>

              <ul className="hidden md:flex items-center gap-4 text-sm text-gray-200">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#jobs" className="hover:underline">Jobs</a></li>
                <li><a href="#tasks" className="hover:underline">Tasks</a></li>
                <li><a href="#about" className="hover:underline">About</a></li>
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => setShowPricing(true)} className="hidden sm:inline-block px-3 py-2 rounded-md bg-[#102A7A] hover:bg-[#0D1F62]">Pricing</button>
              <a href="#login" className="px-3 py-2 rounded-md border border-transparent hover:border-[#D4AF37]">Login</a>
              <a href="#signup" className="px-3 py-2 rounded-md bg-[#D4AF37] text-black font-semibold">Signup</a>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main id="home" className="pt-24">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Diagonal shimmer overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#071029] via-[#071634] to-[#071029]" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background: `linear-gradient(120deg, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.02) 20%, rgba(212,175,55,0.12) 50%, rgba(212,175,55,0.02) 80%, rgba(212,175,55,0.06) 100%)`,
                backgroundSize: "800px 800px",
                animation: "shimmer-diag 6s linear infinite"
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              {/* Use your provided logo image in production - this is a placeholder */}
              <div className="mx-auto w-[480px] h-auto mb-6">
                <img src="/skillmatch-logo-gold.png" alt="SkillMatch" className="mx-auto max-w-full h-36 object-contain" onError={(e)=>{ /* fallback to text */ e.target.style.display='none'; }} />
                <div className="hidden" />
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">Find Real Jobs & Micro Tasks That Pay Instantly</h1>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">Join the global marketplace where opportunities meet skill — powered by innovation and trust.</p>

              <div className="flex items-center justify-center gap-4">
                <a href="#jobs" className="px-6 py-3 rounded-lg bg-[#0F4BE5] font-semibold hover:shadow-lg">Explore Jobs</a>
                <a href="#tasks" className="px-6 py-3 rounded-lg bg-[#D4AF37] text-black font-semibold hover:shadow-lg">Start Earning</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUICK STATS */}
        <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Quick stats">
          <div className="bg-white/3 border border-white/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">10,000+</div>
            <div className="text-sm text-gray-300 mt-2">Jobs Listed</div>
          </div>
          <div className="bg-white/3 border border-white/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">50,000+</div>
            <div className="text-sm text-gray-300 mt-2">Tasks Completed</div>
          </div>
          <div className="bg-white/3 border border-white/5 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37]">$100,000+</div>
            <div className="text-sm text-gray-300 mt-2">Paid to Workers</div>
          </div>
        </section>

        {/* DUAL MARKET SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6" id="jobs">
          {/* Remote Jobs column */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">🎯 Remote Jobs</h2>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-32" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fakeJobs.map((j) => (
                  <div key={j.id} className="p-6 rounded-xl bg-white/5 border border-white/6">
                    <h3 className="font-semibold text-lg">{j.title}</h3>
                    <p className="text-sm text-gray-300">{j.company} • {j.type}</p>
                    <p className="text-sm text-gray-300 mt-2">{j.salary}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <button onClick={() => { setSelectedJob(j); setShowApplyModal(true); }} className="px-3 py-2 rounded bg-[#0F4BE5]">Apply Now</button>
                      <button className="px-3 py-2 rounded border border-white/10">Save</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Micro Tasks column */}
          <div id="tasks">
            <h2 className="text-2xl font-semibold text-white mb-4">🪙 Micro Tasks Marketplace</h2>
            {loading ? (
              <div className="grid grid-cols-1 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 animate-pulse h-24" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {fakeTasks.map((t) => (
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
              Free users can do up to <strong>100 tasks</strong> and 1 withdrawal. Upgrade for unlimited tasks and instant payouts.
            </div>

            <div className="mt-6">
              <button onClick={() => setShowEmployerModal(true)} className="px-4 py-2 rounded border border-white/10">For Employers</button>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-6 py-10" id="about">
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">1</div>
              <div className="font-semibold">Sign Up Free</div>
              <div className="text-sm text-gray-300 mt-2">Create your account and start exploring jobs and tasks.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">2</div>
              <div className="font-semibold">Complete Jobs or Tasks</div>
              <div className="text-sm text-gray-300 mt-2">Choose tasks that fit your time and skills. Employers pay upfront.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 text-center">
              <div className="text-3xl font-bold text-[#D4AF37] mb-2">3</div>
              <div className="font-semibold">Get Paid</div>
              <div className="text-sm text-gray-300 mt-2">Withdraw to your SkillMatch Wallet (Kairah Pay) — mock at launch.</div>
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
              <a href="#pricing" onClick={(e)=>{ e.preventDefault(); setShowPricing(true); }} className="px-6 py-3 rounded border border-white/10">See Pricing</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/6 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-300">© 2025 SkillMatch | A Kairah Product</div>
        </footer>
      </main>

      {/* Pricing Modal (mock payment + tiers) */}
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
                  <ul className="text-sm mb-3">
                    {t.benefits.map((b, i) => <li key={i}>• {b}</li>)}
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

            <div className="mt-4 text-sm text-gray-400">Employers pay upfront for tasks. SkillMatch holds funds and disburses to workers. Detailed employer dashboard coming soon.</div>
          </div>
        </div>
      )}

      {/* Apply Modal (mock) */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-xl w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Apply to {selectedJob.title}</h4>
              <button onClick={()=>{ setShowApplyModal(false); setSelectedJob(null); }} className="px-2 py-1">Close</button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <input className="p-3 rounded bg-black/40 border border-white/6" placeholder="Full name" />
              <input className="p-3 rounded bg-black/40 border border-white/6" placeholder="Email" />
              <input className="p-3 rounded bg-black/40 border border-white/6" placeholder="CV link (or upload coming soon)" />
              <div className="flex items-center gap-3 mt-2">
                <button className="px-4 py-2 rounded bg-[#0F4BE5]">Submit Application</button>
                <button className="px-4 py-2 rounded border border-white/10" onClick={()=>alert('Login required (mock)')}>Login to apply</button>
              </div>
              <div className="text-xs text-gray-400 mt-2">(At launch this is a mock flow. Real submissions and file upload will be enabled after backend integration.)</div>
            </div>
          </div>
        </div>
      )}

      {/* Employer modal (explain employer flow) */}
      {showEmployerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-2xl w-full bg-[#071124] rounded-xl p-6 border border-white/6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">For Employers</h4>
              <button onClick={()=>setShowEmployerModal(false)} className="px-2 py-1">Close</button>
            </div>
            <div className="text-gray-300">
              <p className="mb-3">Post tasks or remote jobs and pay upfront. SkillMatch will hold funds securely and distribute payouts to workers once tasks are verified.</p>
              <p className="mb-3">Post a Task (Coming Soon) — set task count, reward per task, and target criteria. Employers do not see how workers are paid; payout distribution is managed by the platform admin.</p>
              <div className="mt-4">
                <button className="px-4 py-2 rounded bg-[#D4AF37] text-black">Post a Task (Coming Soon)</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin note: hidden admin route preview (no auth) */}
      {showAdmin && (
        <div className="fixed bottom-6 right-6 bg-[#071124] p-4 rounded-lg border border-white/6">
          <div className="text-sm text-gray-300 font-semibold">Admin Panel (preview)</div>
          <div className="text-xs text-gray-400 mt-2">Employer funds, pending payouts, worker summaries — admin-only. (Full backend required)</div>
        </div>
      )}

    </div>
  );
}
