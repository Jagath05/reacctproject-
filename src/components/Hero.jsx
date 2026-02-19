import React from 'react'
import Myimg from '../assets/img/image2.jpg'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-1">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">

  {/* 🔥 Offer Badge */}
  <div className="inline-block bg-red-100 text-red-600 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 animate-pulse">
    🎉 Flat 30% OFF on Fresh Juices & Desserts!
  </div>

  {/* 🔥 Animated Heading */}
  <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
    Sip Fresh.{" "} <br />
    <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
      Eat Fresh.
    </span>{" "}
    <br />
    Live Fresh.
  </h1>

  {/* 🔥 Premium Paragraph */}
  <p className="mt-6 text-xl text-gray-600">
    Discover farm-fresh <span className="font-semibold text-green-600">fruits</span>, 
    creamy <span className="font-semibold text-pink-500">milkshakes</span>, 
    refreshing <span className="font-semibold text-orange-500">juices</span>, 
    organic vegetables, dairy products, and delightful desserts — 
    delivered fast with guaranteed freshness and unbeatable taste.
  </p>

  {/* 🔥 CTA Buttons */}
  <div className="mt-8 flex flex-wrap gap-4">
    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105">
      Shop Now
    </button>

    <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition duration-300">
      Explore Menu
    </button>
  </div>

</div>

          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src={Myimg}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="public\img\images (21).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="public\img\images (8).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="public\img\images (12).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="public\img\images (14).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-9">
                      <div className="h-64 w-55 overflow-hidden rounded-lg pr-9" >
                        <img
                          alt=""
                          src="public\img\images (5).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="public\img\images (15).jpg"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



