"use client";

import {
  XCircle,
  ArrowLeft,
} from "lucide-react";

export default function PaymentFailedPage() {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="max-w-2xl w-full bg-[#111111] border border-[#222222] rounded-3xl p-12 text-center">

        <XCircle className="w-28 h-28 text-red-500 mx-auto mb-8" />

        <h1 className="text-5xl font-bold text-white">

          Payment Failed ❌

        </h1>

        <p className="text-gray-400 text-lg mt-6">

          Something went wrong while processing your payment.

        </p>

        <button
          onClick={() =>
            (window.location.href =
              "/checkout")
          }
          className="mt-10 bg-red-500 hover:bg-red-600 transition px-10 py-5 rounded-2xl text-white font-bold text-lg flex items-center gap-3 mx-auto"
        >

          <ArrowLeft className="w-6 h-6" />

          Try Again

        </button>

      </div>

    </div>
  );
}