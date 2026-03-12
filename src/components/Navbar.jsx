import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Heart,
  Search,
  ShoppingBasket,
  UserRound,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

  const { cartItems } = useCart();

  const [showCategories, setShowCategories] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const categories = [
    "Milk",
    "Juice",
    "Milkshakes",
    "Fruits",
    "Vegetables",
    "Ice Cream",
    "Fresh Juice",
    "Desserts"
  ];

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Freshly
          </h1>
        </Link>

        {/* Center Section */}
        <div className="hidden md:flex items-center gap-4 flex-1 mx-10">

          {/* Categories Dropdown */}
          <div className="relative">

            <div
              onClick={() => setShowCategories(!showCategories)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition px-4 py-2 rounded-full cursor-pointer"
            >
              <div className="flex flex-col gap-1">
                <span className="w-4 h-[2px] bg-green-600"></span>
                <span className="w-3 h-[2px] bg-green-600"></span>
                <span className="w-2 h-[2px] bg-green-600"></span>
              </div>

              <span className="text-sm font-medium">
                All Categories
              </span>

              <ChevronDown size={16} className="text-green-600" />
            </div>

            {showCategories && (
              <div className="absolute top-12 left-0 bg-white shadow-lg rounded-xl w-52 p-3 z-50">

                {categories.map((cat, index) => (
                  <Link
                    key={index}
                    to={`/category/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-green-100 rounded"
                    onClick={() => setShowCategories(false)}
                  >
                    {cat}
                  </Link>
                ))}

              </div>
            )}

          </div>

          {/* Search */}
          <div className="flex items-center flex-1 bg-gray-100 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400 transition">

            <input
              type="text"
              placeholder="Search fresh groceries..."
              className="flex-1 px-5 py-2 bg-transparent outline-none text-sm"
            />

            <button className="bg-yellow-400 px-5 py-2 hover:bg-yellow-500 transition">
              <Search size={18} />
            </button>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* User Section */}
          {user ? (
            <div className="flex items-center gap-3">

              <span className="text-sm font-semibold">
                Hi, {user}
              </span>

              <button
                onClick={handleLogout}
                className="text-red-500 text-sm"
              >
                Logout
              </button>

            </div>
          ) : (
            <div className="flex items-center gap-3">

              <Link to="/login">
                <div className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition">
                  <UserRound size={20} className="text-green-600"/>
                </div>
              </Link>

              <Link to="/signup" className="text-sm font-medium">
                Sign Up
              </Link>

            </div>
          )}

          {/* Wishlist */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-gray-100 rounded-full hover:bg-red-100 transition">
              <Heart size={20} className="text-red-500" />
            </div>

            <span className="hidden sm:block text-sm font-medium">
              Liked
            </span>
          </div>

          {/* Cart */}
          <Link to="/cart">
            <div className="flex items-center gap-2 cursor-pointer relative">

              <div className="p-2 bg-gray-100 rounded-full hover:bg-green-100 transition">
                <ShoppingBasket size={20} className="text-green-600" />
              </div>

              <span className="hidden sm:block text-sm font-medium">
                Cart
              </span>

              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>

            </div>
          </Link>

        </div>

      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-yellow-400">

          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
          />

          <button className="bg-yellow-400 px-4 py-2">
            <Search size={18} />
          </button>

        </div>
      </div>

    </div>
  );
}