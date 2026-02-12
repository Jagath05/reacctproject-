import React from 'react'
export default function Navbar() {
  return (
    <div className="shadow-md bg-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Freshly</h1>

        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="Search products..."
            className="border px-4 py-2 rounded-lg w-64"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </div>

        <div className="flex gap-4">
          <button>🛒</button>
          <button>👤</button>
        </div>
      </div>
    </div>
  );
}




// import React from 'react'

// export default function Navbar() {
//   return (
//     <div className="bg-sky-400 w-full h-20 ">
// <h1 className="text-red-500 text-5xl py-4"> welcome to our website</h1>
//       </div>
//   )
// }