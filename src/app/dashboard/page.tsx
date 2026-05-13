"use client";

import {
  User,
  MapPin,
  Heart,
  Package,
  Truck,
  Settings,
} from "lucide-react";

export default function DashboardPage() {

  const orders = [
    {
      id: "#NC1024",
      status: "Out for Delivery",
      amount: 640,
    },
    {
      id: "#NC1025",
      status: "Delivered",
      amount: 420,
    },
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-12">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 h-fit">

          {/* Profile */}
          <div className="text-center border-b border-[#222222] pb-6">

            <div className="w-24 h-24 mx-auto rounded-full bg-[#6DBB04] flex items-center justify-center mb-4">

              <User className="text-black w-10 h-10" />

            </div>

            <h2 className="text-2xl font-bold text-white">
              Garv Shukla
            </h2>

            <p className="text-gray-400 mt-2">
              Premium Customer
            </p>

          </div>

          {/* Menu */}
          <div className="space-y-3 mt-6">

            <button className="w-full flex items-center gap-3 bg-[#6DBB04] text-black px-5 py-4 rounded-2xl font-semibold">

              <Package className="w-5 h-5" />

              Orders

            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#222222] text-white px-5 py-4 rounded-2xl transition">

              <MapPin className="w-5 h-5" />

              Addresses

            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#222222] text-white px-5 py-4 rounded-2xl transition">

              <Heart className="w-5 h-5" />

              Wishlist

            </button>

            <button className="w-full flex items-center gap-3 hover:bg-[#222222] text-white px-5 py-4 rounded-2xl transition">

              <Settings className="w-5 h-5" />

              Settings

            </button>

          </div>

        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">

          {/* Welcome */}
          <div className="bg-gradient-to-r from-[#2E6F01] to-[#111111] border border-[#6DBB04] rounded-3xl p-8">

            <h1 className="text-4xl font-bold text-white">
              Welcome Back 👋
            </h1>

            <p className="text-gray-300 mt-4 text-lg">
              Manage your fresh vegetable orders and profile here.
            </p>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6">

              <h3 className="text-gray-400">
                Total Orders
              </h3>

              <p className="text-4xl font-bold text-[#6DBB04] mt-4">
                24
              </p>

            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6">

              <h3 className="text-gray-400">
                Wishlist Items
              </h3>

              <p className="text-4xl font-bold text-[#B8743A] mt-4">
                12
              </p>

            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6">

              <h3 className="text-gray-400">
                Saved Addresses
              </h3>

              <p className="text-4xl font-bold text-[#8DCE05] mt-4">
                3
              </p>

            </div>

          </div>

          {/* Orders */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-white">
                Recent Orders
              </h2>

              <Truck className="text-[#6DBB04] w-8 h-8" />

            </div>

            <div className="space-y-6">

              {orders.map((order, index) => (
                <div
                  key={index}
                  className="bg-black border border-[#222222] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >

                  <div>

                    <h3 className="text-white font-bold text-xl">
                      {order.id}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      ₹{order.amount}
                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        order.status === "Delivered"
                          ? "bg-[#6DBB04] text-black"
                          : "bg-[#F77A08] text-black"
                      }`}
                    >
                      {order.status}
                    </span>

                    <button className="bg-[#6DBB04] hover:bg-[#8DCE05] transition px-5 py-3 rounded-2xl text-black font-semibold">
                      Track Order
                    </button>

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