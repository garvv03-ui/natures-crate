"use client";

import {
  PackageCheck,
  Truck,
  ShoppingBag,
  Download,
} from "lucide-react";

import { useUser } from "./../context/UserContext";

import { generateInvoice } from "./../utils/generateinvoice";

export default function OrdersPage() {

  const { orders } = useUser();

  return (
    <div className="min-h-screen bg-black px-4 py-12">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">

          <Truck className="text-[#6DBB04] w-10 h-10" />

          <h1 className="text-5xl font-bold text-white">

            Track Orders

          </h1>

        </div>

        {/* Empty */}
        {orders.length === 0 && (

          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-20 text-center">

            <ShoppingBag className="text-[#6DBB04] w-16 h-16 mx-auto mb-6" />

            <h2 className="text-3xl font-bold text-white">

              No Orders Yet

            </h2>

            <p className="text-gray-400 mt-4">

              Your orders will appear here.

            </p>

          </div>

        )}

        {/* Orders */}
        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-[#111111] border border-[#222222] rounded-3xl p-8"
            >

              {/* Top */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">

                <div>

                  <h2 className="text-3xl font-bold text-white">

                    Order #
                    {order.id}

                  </h2>

                  <p className="text-gray-400 mt-3">

                    {order.date}

                  </p>

                </div>

                <div>

                  <p className="text-gray-400">
                    Total Amount
                  </p>

                  <h2 className="text-3xl font-bold text-[#6DBB04] mt-2">

                    ₹{order.total}

                  </h2>

                </div>

              </div>

              {/* Progress */}
              <div className="mb-8">

                <div className="flex justify-between mb-3">

                  <span className="text-white font-semibold">

                    {order.status}

                  </span>

                  <span className="text-[#6DBB04] font-bold">

                    {order.progress}%

                  </span>

                </div>

                <div className="w-full bg-black rounded-full h-4 overflow-hidden">

                  <div
                    className="bg-[#6DBB04] h-full rounded-full transition-all duration-500"
                    style={{
                      width:
                        `${order.progress}%`,
                    }}
                  />

                </div>

              </div>

              {/* Tracking */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">

                {[
                  "Processing",
                  "Packed",
                  "Shipped",
                  "Delivered",
                ].map((step, index) => {

                  const active =
                    order.progress >=
                    (index + 1) * 25;

                  return (
                    <div
                      key={index}
                      className={`border rounded-2xl p-5 text-center ${
                        active
                          ? "border-[#6DBB04] bg-[#6DBB04]/10"
                          : "border-[#222222]"
                      }`}
                    >

                      <PackageCheck
                        className={`w-8 h-8 mx-auto mb-3 ${
                          active
                            ? "text-[#6DBB04]"
                            : "text-gray-500"
                        }`}
                      />

                      <p
                        className={`font-semibold ${
                          active
                            ? "text-white"
                            : "text-gray-500"
                        }`}
                      >

                        {step}

                      </p>

                    </div>
                  );
                })}

              </div>

              {/* Download Invoice */}
              <button
                onClick={() =>
                  generateInvoice({
                    orderId:
                      order.id,
                    total:
                      order.total,
                    items: [
                      {
                        name:
                          "Fresh Vegetables",
                        quantity:
                          order.items,
                        price:
                          order.total,
                      },
                    ],
                  })
                }
                className="bg-[#6DBB04] hover:bg-[#8DCE05] transition px-6 py-4 rounded-2xl text-black font-bold flex items-center gap-3"
              >

                <Download className="w-5 h-5" />

                Download Invoice

              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}