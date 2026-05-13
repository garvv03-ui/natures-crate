"use client";

import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";

export default function Hero() {

  return (
    <section className="bg-black min-h-screen flex items-center px-4 py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="inline-flex items-center gap-3 bg-[#6DBB04]/10 border border-[#6DBB04]/30 px-5 py-3 rounded-full mb-8">

              <span className="text-[#6DBB04] font-semibold text-sm md:text-base">

                🥬 100% Fresh Farm Products

              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight">

              Fresh
              <span className="text-[#6DBB04]">
                {" "}Vegetables
              </span>

              <br />

              Delivered
              <span className="text-[#B8743A]">
                {" "}Fast
              </span>

            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mt-8 leading-relaxed max-w-2xl">

              Order fresh vegetables, fruits and organic groceries directly from Nature&apos;s Crate with lightning-fast delivery.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <button className="bg-[#6DBB04] hover:bg-[#8DCE05] transition px-8 py-5 rounded-2xl text-black font-bold text-lg flex items-center justify-center gap-3">

                Shop Now

                <ArrowRight className="w-5 h-5" />

              </button>

              <button className="border border-[#222222] hover:border-[#6DBB04] transition px-8 py-5 rounded-2xl text-white font-semibold text-lg">

                Explore Products

              </button>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 mt-14">

              {[
                {
                  number: "10K+",
                  label: "Customers",
                },

                {
                  number: "500+",
                  label: "Products",
                },

                {
                  number: "24/7",
                  label: "Delivery",
                },
              ].map(
                (
                  item,
                  index
                ) => (

                  <div
                    key={index}
                    className="bg-[#111111] border border-[#222222] rounded-2xl p-5 text-center"
                  >

                    <h3 className="text-[#6DBB04] text-2xl sm:text-3xl font-black">

                      {item.number}

                    </h3>

                    <p className="text-gray-400 mt-2 text-sm sm:text-base">

                      {item.label}

                    </p>

                  </div>
                )
              )}

            </div>

          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >

          <div className="absolute inset-0 bg-[#6DBB04]/20 blur-[120px] rounded-full" />

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
            alt="Vegetables"
            className="relative z-10 w-full h-[350px] sm:h-[500px] lg:h-[700px] object-cover rounded-[40px]"
          />

        </motion.div>

      </div>

    </section>
  );
}