"use client";

import {
  Building2,
  Truck,
  BadgePercent,
  ArrowRight,
} from "lucide-react";

export default function BulkOrders() {

  return (
    <section className="bg-[#0B0B0B] py-24 px-4">

      <div className="max-w-7xl mx-auto">

        <div className="bg-gradient-to-r from-[#111111] to-[#1B1B1B] border border-[#222222] rounded-[40px] overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-3 bg-[#6DBB04]/10 border border-[#6DBB04]/30 px-5 py-3 rounded-full mb-8">

                <Building2 className="text-[#6DBB04] w-5 h-5" />

                <span className="text-[#6DBB04] font-semibold">

                  Hotels & Restaurants

                </span>

              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">

                Bulk Orders
                <span className="text-[#6DBB04]">
                  {" "}For Businesses
                </span>

              </h2>

              <p className="text-gray-400 text-xl mt-8 leading-relaxed">

                Fresh vegetables delivered daily to hotels,
                restaurants, cafes, hostels and catering businesses.

              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">

                {[
                  {
                    icon: Truck,
                    text:
                      "Next-Day Delivery",
                  },

                  {
                    icon: BadgePercent,
                    text:
                      "Wholesale Pricing",
                  },
                ].map(
                  (
                    item,
                    index
                  ) => {

                    const Icon =
                      item.icon;

                    return (
                      <div
                        key={index}
                        className="bg-black border border-[#222222] rounded-2xl p-5 flex items-center gap-4"
                      >

                        <div className="w-12 h-12 rounded-xl bg-[#6DBB04]/10 flex items-center justify-center">

                          <Icon className="text-[#6DBB04] w-6 h-6" />

                        </div>

                        <p className="text-white font-semibold">

                          {item.text}

                        </p>

                      </div>
                    );
                  }
                )}

              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  window.location.href =
                    "/bulk-orders"
                }
                className="inline-flex items-center gap-3 bg-[#6DBB04] hover:bg-[#8DCE05] transition px-8 py-5 rounded-2xl text-black font-bold text-lg mt-10"
              >

                Place Bulk Inquiry

                <ArrowRight className="w-5 h-5" />

              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div>

              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1400&auto=format&fit=crop"
                alt="Bulk Vegetables"
                className="w-full h-[500px] object-cover rounded-3xl"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}