import React from "react";
import { motion } from "framer-motion";

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

      {/* Animated Grid Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08, // smooth stagger
            },
          },
        }}
        className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 180,
                  damping: 15,
                },
              },
            }}
            whileHover={{
              scale: 1.05,
              rotateX: 6,
              rotateY: -6,
            }}
            transition={{
              type: "spring",
              stiffness: 300, // faster hover reaction
              damping: 10,
            }}
            className={`relative rounded-3xl p-8 bg-gradient-to-br ${cat.bg} shadow-md cursor-pointer perspective-1000`}
          >
            {/* Floating Emoji */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-5xl mb-6"
            >
              {cat.emoji}
            </motion.div>

            <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
            <p className="text-gray-600">{cat.items} items</p>

            {/* Soft Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-20 bg-white transition duration-200"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
