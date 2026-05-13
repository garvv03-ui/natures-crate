"use client";

import {
  User,
  Mail,
  MapPin,
  Save,
  ShoppingBag,
} from "lucide-react";

import toast from "react-hot-toast";

import { useUser } from "./../context/UserContext";

export default function ProfilePage() {

  const {
    name,
    email,
    address,
    setName,
    setEmail,
    setAddress,
    orders,
  } = useUser();

  return (
    <div className="min-h-screen bg-black px-4 py-12">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-1">

          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8">

            <div className="w-28 h-28 rounded-full bg-[#6DBB04] flex items-center justify-center mx-auto">

              <User className="text-black w-14 h-14" />

            </div>

            <h2 className="text-3xl font-bold text-white text-center mt-6">

              {name || "Your Profile"}

            </h2>

            <p className="text-gray-400 text-center mt-2">

              Nature&apos;s Crate Customer

            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-10">

          {/* Profile Form */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white mb-8">

              Personal Information

            </h2>

            <div className="space-y-6">

              {/* Name */}
              <div>

                <label className="text-gray-400 mb-3 block">

                  Full Name

                </label>

                <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                  <User className="text-[#6DBB04] w-5 h-5" />

                  <input
                    type="text"
                    value={name}
                    onChange={(e) =>
                      setName(
                        e.target.value
                      )
                    }
                    placeholder="Enter your name"
                    className="bg-transparent outline-none text-white w-full"
                  />

                </div>

              </div>

              {/* Email */}
              <div>

                <label className="text-gray-400 mb-3 block">

                  Email Address

                </label>

                <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                  <Mail className="text-[#6DBB04] w-5 h-5" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    placeholder="Enter your email"
                    className="bg-transparent outline-none text-white w-full"
                  />

                </div>

              </div>

              {/* Address */}
              <div>

                <label className="text-gray-400 mb-3 block">

                  Delivery Address

                </label>

                <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                  <MapPin className="text-[#6DBB04] w-5 h-5" />

                  <textarea
                    value={address}
                    onChange={(e) =>
                      setAddress(
                        e.target.value
                      )
                    }
                    placeholder="Enter your address"
                    className="bg-transparent outline-none text-white w-full resize-none h-24"
                  />

                </div>

              </div>

              {/* Save */}
              <button
                onClick={() =>
                  toast.success(
                    "Profile Saved ✅"
                  )
                }
                className="bg-[#6DBB04] hover:bg-[#8DCE05] transition px-8 py-4 rounded-2xl text-black font-bold flex items-center gap-3"
              >

                <Save className="w-5 h-5" />

                Save Profile

              </button>

            </div>

          </div>

          {/* Orders */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-8">

              <ShoppingBag className="text-[#6DBB04] w-8 h-8" />

              <h2 className="text-3xl font-bold text-white">

                Order History

              </h2>

            </div>

            {orders.length === 0 && (
              <div className="text-center py-10">

                <p className="text-gray-400 text-lg">
                  No orders placed yet.
                </p>

              </div>
            )}

            <div className="space-y-6">

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-black border border-[#222222] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >

                  <div>

                    <h3 className="text-white text-xl font-bold">

                      Order #
                      {order.id}

                    </h3>

                    <p className="text-gray-400 mt-2">

                      {order.date}

                    </p>

                  </div>

                  <div>

                    <p className="text-gray-400">

                      Items:
                      {" "}
                      {order.items}

                    </p>

                    <p className="text-[#6DBB04] text-2xl font-bold mt-2">

                      ₹{order.total}

                    </p>

                  </div>

                  {/* Status */}
                  <div
                    className={`px-5 py-3 rounded-full font-semibold ${
                      order.status ===
                      "Delivered"
                        ? "bg-green-500/20 text-green-400"
                        : order.status ===
                          "Shipped"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >

                    {order.status}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}