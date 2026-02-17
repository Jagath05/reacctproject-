import React from "react";
import { Camera, ChevronDown,Search, UserRound } from "lucide-react";

export default function Navbar() {
  return (
    <div>
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
<UserRound size={38} strokeWidth={4} absoluteStrokeWidth className="-mx-9 mt-3.5 bg-gray-100 rounded-full text-green-600 p-2" />    
 <span className="border-2 h-6 text-gray-300 mt-4"> </span><br />

</div>


{/* ================= MENU BAR ================= */}
<div className="px-12 py-4 bg-gray-50">

  <div className="flex items-center gap-10 bg-white border border-gray-200 rounded-xl px-8 py-4 w-fit shadow-sm">

    {[
      { name: "Home", dropdown: true, },
      { name: "Pages", dropdown: true },
      { name: "Shop", dropdown: true },
      { name: "Vendor", dropdown: true },
      { name: "Elements", dropdown: true },
      { name: "Blog", dropdown: true },
      { name: "Contact", dropdown: false },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-1 cursor-pointer font-medium text-gray-700 hover:text-green-600 transition"
      >
        <span>{item.name}</span>

        {item.dropdown && (
           <ChevronDown size={20} className="text-green-600" />
        )}
      </div>
    ))}

  </div>

</div>
{/* ============================================= */}

</div>

  );
}
