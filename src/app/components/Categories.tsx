"use client";

import { motion } from "framer-motion";
import {
  Carrot,
  Apple,
  Salad,
  ShoppingBasket,
  Leaf,
  Package,
} from "lucide-react";

const categories = [
  {
    title: "Leafy Vegetables",
    icon: Salad,
    color: "#6DBB04",
  },
  {
    title: "Root Vegetables",
    icon: Carrot,
    color: "#F77A08",
  },
  {
    title: "Fruits",
    icon: Apple,
    color: "#E81F16",
  },
  {
    title: "Organic Products",
    icon: Leaf,
    color: "#8DCE05",
  },
  {
    title: "Daily Essentials",
    icon: ShoppingBasket,
    color: "#B8743A",
  },
  {
    title: "Bulk Orders",
    icon: Package,
    color: "#5C1B83",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">
            Shop By{" "}
            <span className="text-[#6DBB04]">Categories</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Fresh vegetables, fruits and essentials delivered daily.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-[#111111] border border-[#222222] rounded-3xl p-6 text-center cursor-pointer hover:border-[#6DBB04] transition"
              >
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: `${category.color}20`,
                  }}
                >
                  <Icon
                    className="w-8 h-8"
                    style={{
                      color: category.color,
                    }}
                  />
                </div>

                <h3 className="text-white font-semibold text-sm">
                  {category.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}