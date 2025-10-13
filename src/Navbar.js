import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0A66C2] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="text-2xl font-bold">SkillMatch</div>
      <div className="space-x-6">
        <a href="/" className="hover:text-[#D4AF37]">Home</a>
        <a href="/jobs" className="hover:text-[#D4AF37]">Jobs</a>
        <a href="/premium" className="hover:text-[#D4AF37]">Premium</a>
        <a href="/login" className="hover:text-[#D4AF37]">Login/Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
