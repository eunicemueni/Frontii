import React from "react";

const JobCard = ({ title, company, premium }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        {premium && (
          <span className="bg-[#D4AF37] text-white text-xs px-2 py-1 rounded-full">
            Premium
          </span>
        )}
      </div>
      <p className="text-gray-700">{company}</p>
    </div>
  );
};

export default JobCard;
