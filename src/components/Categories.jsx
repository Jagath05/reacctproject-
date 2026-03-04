import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { name: "Milk", items: 12, emoji: "🥛", bg: "from-blue-100 to-blue-200" },
  { name: "Juice", items: 8, emoji: "🧃", bg: "from-yellow-100 to-orange-200" },
  { name: "Milkshakes", items: 6, emoji: "🥤", bg: "from-pink-100 to-pink-200" },
  { name: "Fruits", items: 15, emoji: "🍎", bg: "from-red-100 to-red-200" },
  { name: "Vegetables", items: 20, emoji: "🥦", bg: "from-green-100 to-green-200" },
  { name: "Ice Cream", items: 10, emoji: "🍦", bg: "from-purple-100 to-purple-200" },
  { name: "Fresh Juice", items: 9, emoji: "🍊", bg: "from-orange-100 to-orange-200" },
  { name: "Desserts", items: 7, emoji: "🍰", bg: "from-rose-100 to-rose-200" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Shop by{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Category
          </span>
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Browse our wide range of fresh and delicious products
        </p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

        {categories.map((cat, index) => (
          <Link key={index} to={`/category/${cat.name.toLowerCase()}`}>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`rounded-3xl p-8 bg-gradient-to-br ${cat.bg} shadow-md cursor-pointer`}
            >

              <div className="text-5xl mb-6">
                {cat.emoji}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {cat.name}
              </h3>

              <p className="text-gray-600">
                {cat.items} items
              </p>

            </motion.div>

          </Link>
        ))}

      </div>
    </section>
  );
}