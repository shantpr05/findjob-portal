import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div className="border p-6 shadow rounded hover:shadow-lg transition">
      {/* Company Logo + Bookmark */}
      <div className="flex justify-between items-center">
        <img
          className="h-8"
          src={job.companyId?.image || assets.company_icon}
          alt={job.companyId?.name || "Company"}
        />
      </div>

      {/* Job Title */}
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>

      {/* Badges */}
      <div className="flex items-center gap-3 mt-2 text-xs">
        <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-green-50 border border-green-200 px-4 py-1.5 rounded">
          {job.level || "All Levels"}
        </span>
      </div>

      {/* Short Description */}
      <p
        className="text-gray-500 text-sm mt-4 line-clamp-3"
        dangerouslySetInnerHTML={{
          __html:
            job.description?.slice(0, 150) +
            (job.description?.length > 150 ? "..." : ""),
        }}
      ></p>

      {/* Actions */}
      <div className="mt-4 flex gap-4 text-sm">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Apply now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            scrollTo(0, 0);
          }}
          className="text-gray-600 border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
