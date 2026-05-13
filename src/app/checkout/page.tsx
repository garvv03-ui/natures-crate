"use client";

import {
  MapPin,
  User,
  Mail,
  Phone,
} from "lucide-react";

import { useCart } from "./../context/CartContext";

import { useUser } from "./../context/UserContext";

import { useState } from "react";

import toast from "react-hot-toast";

export default function CheckoutPage() {

  const { cart, totalPrice, clearCart } =
    useCart();

  const {
    addOrder,
  } = useUser();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [address, setAddress] =
    useState("");

  const placeOrder =
    async () => {

      if (
        !name ||
        !email ||
        !phone ||
        !address
      ) {

        toast.error(
          "Fill all fields"
        );

        return;
      }

      await addOrder({
        id: Date.now(),
        date:
          new Date().toLocaleDateString(),
        total:
          totalPrice,
        items:
          cart.length,
        status:
          "Processing",
        progress: 25,
      });

      toast.success(
        "Order Placed 🎉"
      );

      clearCart();

      setTimeout(() => {

        window.location.href =
          "/profile";

      }, 1500);
    };

  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-10 sm:mb-14">

          Checkout

        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* FORM */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8">

            <h2 className="text-3xl font-bold text-white mb-8">

              Delivery Details

            </h2>

            <div className="space-y-6">

              {/* NAME */}
              <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                <User className="text-[#6DBB04] w-5 h-5" />

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none text-white w-full"
                />

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                <Mail className="text-[#6DBB04] w-5 h-5" />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none text-white w-full"
                />

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                <Phone className="text-[#6DBB04] w-5 h-5" />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none text-white w-full"
                />

              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

                <MapPin className="text-[#6DBB04] w-5 h-5 mt-1" />

                <textarea
                  placeholder="Delivery Address"
                  rows={5}
                  value={address}
                  onChange={(e) =>
                    setAddress(
                      e.target.value
                    )
                  }
                  className="bg-transparent outline-none text-white w-full resize-none"
                />

              </div>

            </div>

          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-8 h-fit">

            <h2 className="text-3xl font-bold text-white mb-8">

              Order Summary

            </h2>

            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center gap-4"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="text-white font-bold">

                      {item.name}

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Qty:
                      {" "}
                      {item.quantity}

                    </p>

                  </div>

                  <p className="text-[#6DBB04] font-bold text-lg">

                    ₹
                    {item.price *
                      item.quantity}

                  </p>

                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="border-t border-[#222222] mt-8 pt-8 flex items-center justify-between">

              <h3 className="text-2xl font-bold text-white">

                Total

              </h3>

              <span className="text-4xl font-black text-[#6DBB04]">

                ₹{totalPrice}

              </span>

            </div>

            {/* BUTTON */}
            <button
              onClick={placeOrder}
              className="w-full mt-8 bg-[#6DBB04] hover:bg-[#8DCE05] transition py-5 rounded-2xl text-black font-bold text-lg"
            >

              Place Order

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}