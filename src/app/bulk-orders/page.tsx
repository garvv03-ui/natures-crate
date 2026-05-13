"use client";

import {
  Building2,
  Phone,
  Mail,
  Calendar,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

import toast from "react-hot-toast";

export default function BulkOrdersPage() {

  const [businessName, setBusinessName] =
    useState("");

  const [ownerName, setOwnerName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [requirements, setRequirements] =
    useState("");

  const [deliveryDate, setDeliveryDate] =
    useState("");

  const submitBulkOrder = () => {

    if (
      !businessName ||
      !ownerName ||
      !phone ||
      !requirements
    ) {

      toast.error(
        "Please fill all required fields"
      );

      return;
    }

    toast.success(
      "Bulk Inquiry Submitted 🎉"
    );
  };

  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:py-12">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-3 bg-[#6DBB04]/10 border border-[#6DBB04]/30 px-5 py-3 rounded-full mb-8">

              <Building2 className="text-[#6DBB04] w-5 h-5" />

              <span className="text-[#6DBB04] font-semibold text-sm sm:text-base">

                Hotel & Restaurant Supply

              </span>

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight">

              Bulk Vegetable
              <span className="text-[#6DBB04]">
                {" "}Orders
              </span>

            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mt-8 leading-relaxed">

              Fresh vegetables delivered directly to hotels,
              restaurants, cafes and catering businesses.

            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {[
                "Wholesale Pricing",
                "Next-Day Delivery",
                "Farm Fresh Vegetables",
                "Dedicated Support",
              ].map((item, index) => (

                <div
                  key={index}
                  className="bg-[#111111] border border-[#222222] rounded-2xl p-5"
                >

                  <p className="text-white font-semibold">

                    ✅ {item}

                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* FORM */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8">

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">

              Request Bulk Order

            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) =>
                  setBusinessName(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(e) =>
                  setOwnerName(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Business Email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
              />

              <input
                type="date"
                value={deliveryDate}
                onChange={(e) =>
                  setDeliveryDate(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
              />

              <textarea
                rows={5}
                placeholder="Order Requirements"
                value={requirements}
                onChange={(e) =>
                  setRequirements(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none resize-none"
              />

              <button
                onClick={submitBulkOrder}
                className="w-full bg-[#6DBB04] hover:bg-[#8DCE05] transition py-5 rounded-2xl text-black font-bold text-lg"
              >

                Submit Bulk Inquiry

              </button>

              <a
                href="https://wa.me/919131317637"
                target="_blank"
                className="w-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black transition py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3"
              >

                <MessageCircle className="w-6 h-6" />

                Order On WhatsApp

              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}