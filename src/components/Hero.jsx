import React from 'react'
import Myimg from '../assets/img/image2.jpg'
import Myimg1 from '../assets/img/images (21).jpg'
import Myimg2 from '../assets/img/images (8).jpg'
import Myimg3 from '../assets/img/images (12).jpg'
import Myimg4 from '../assets/img/images (14).jpg'
import Myimg5 from '../assets/img/image5.jpg'
import Myimg6 from '../assets/img/images (15).jpg'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-1">

      <div className="pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-32 lg:pb-40">

        {/* MAIN CONTAINER */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-lg">

            <div className="inline-block bg-red-100 text-red-600 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 animate-pulse">
              🎉 Flat 30% OFF on Fresh Juices & Desserts!
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Sip Fresh. <br />
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Eat Fresh.
              </span>
              <br />
              Live Fresh.
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600">
              Discover farm-fresh <span className="font-semibold text-green-600">fruits</span>,
              creamy <span className="font-semibold text-pink-500">milkshakes</span>,
              refreshing <span className="font-semibold text-orange-500">juices</span>,
              organic vegetables, dairy products, and delightful desserts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105">
                Shop Now
              </button>

              <button className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
                Explore Menu
              </button>
            </div>

          </div>

          {/* ================= RIGHT IMAGE GRID ================= */}
          <div className="relative w-full hidden sm:block">

            <div className="flex items-center justify-center gap-4 lg:gap-6">

              {/* COLUMN 1 */}
              <div className="grid gap-y-4 lg:gap-y-6">
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg} alt="" className="size-full object-cover" />
                </div>
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg1} alt="" className="size-full object-cover" />
                </div>
              </div>

              {/* COLUMN 2 */}
              <div className="grid gap-y-4 lg:gap-y-6">
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg2} alt="" className="size-full object-cover" />
                </div>
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg3} alt="" className="size-full object-cover" />
                </div>
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg4} alt="" className="size-full object-cover" />
                </div>
              </div>

              {/* COLUMN 3 */}
              <div className="grid gap-y-4 lg:gap-y-6">
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg5} alt="" className="size-full object-cover" />
                </div>
                <div className="h-40 sm:h-52 lg:h-64 w-28 sm:w-36 lg:w-44 overflow-hidden rounded-lg">
                  <img src={Myimg6} alt="" className="size-full object-cover" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
