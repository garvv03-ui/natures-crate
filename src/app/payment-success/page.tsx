"use client";

import {
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

export default function PaymentSuccessPage() {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="max-w-2xl w-full bg-[#111111] border border-[#222222] rounded-3xl p-12 text-center">

        <CheckCircle2 className="w-28 h-28 text-[#6DBB04] mx-auto mb-8" />

        <h1 className="text-5xl font-bold text-white">

          Payment Successful 🎉

        </h1>

        <p className="text-gray-400 text-lg mt-6">

          Your order has been placed successfully.

        </p>

        <button
          onClick={() =>
            (window.location.href =
              "/orders")
          }
          className="mt-10 bg-[#6DBB04] hover:bg-[#8DCE05] transition px-10 py-5 rounded-2xl text-black font-bold text-lg flex items-center gap-3 mx-auto"
        >

          <ShoppingBag className="w-6 h-6" />

          Track Order

        </button>

      </div>

    </div>
  );
}