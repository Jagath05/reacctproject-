import React from "react";
import { Camera, ChevronDown,Search, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center gap-16 px-8 py-7">

      {/* Logo */}
      <h1 className="text-5xl font-semibold text-purple-600">
        Freshly
      </h1>

      {/* Category Pill Button */}
      <div className="flex items-center gap-3 border border-gray-300 rounded-full px-6 py-5 mt-3 h-14 cursor-pointer hover:shadow-md transition">

        {/* Green 3-line icon */}
        <div className="flex flex-col gap-1">
          <span className="w-6 h-[2px] bg-green-600"></span>
          <span className="w-5 h-[2px] bg-green-600"></span>
          <span className="w-4 h-[2px] bg-green-600"></span>
        </div>

        {/* Text */}
        <span className="text-gray-700 font-medium text-lg">
          All Categories
        </span>
        

        {/* Dropdown Arrow */}
        <ChevronDown size={20} className="text-green-600" />

      </div>
       {/* Search Bar */}
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full overflow-hidden mt-3 w-155 h-14">

        {/* Input */}
        <input
          type="text"
          placeholder="Type Your Products ..."
          className="flex-1 px-6 h-full  outline-none text-gray-600"
        />

        {/* Search Button */}
        <button className="bg-yellow-400 border-2 rounded-r-4xl border-gray-200 px-8 h-full flex items-center gap-2 font-medium hover:bg-yellow-500 transition ">
          Search
          <Search size={18} />
        </button>

      </div>
<UserRound size={72} strokeWidth={1} absoluteStrokeWidth />    
</div>
  );
}
