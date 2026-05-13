"use client";

import {
  X,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import Link from "next/link";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-100 transition ${
        open
          ? "visible"
          : "invisible"
      }`}
    >

      {/* OVERLAY */}
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity ${
          open
            ? "opacity-100"
            : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* DRAWER */}
      <div
        className={`absolute right-0 top-0 h-full w-full sm:w-112.5 bg-black border-l border-[#222222] transform transition-transform duration-300 flex flex-col ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-[#222222]">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">

            Your Cart

          </h2>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-[#111111] flex items-center justify-center text-white"
          >

            <X className="w-5 h-5" />

          </button>

        </div>

        {/* CART ITEMS */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-5">

          {cart.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <h3 className="text-2xl font-bold text-white">

                Cart is Empty

              </h3>

              <p className="text-gray-400 mt-3">

                Add some fresh vegetables 🥬

              </p>

            </div>

          ) : (

            cart.map((item) => (

              <div
                key={item.id}
                className="bg-[#111111] border border-[#222222] rounded-3xl p-4 flex gap-4"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-white font-bold text-lg">

                    {item.name}

                  </h3>

                  <p className="text-[#6DBB04] text-xl font-bold mt-2">

                    ₹{item.price}

                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                      className="w-9 h-9 rounded-xl bg-black border border-[#222222] flex items-center justify-center text-white"
                    >

                      <Minus className="w-4 h-4" />

                    </button>

                    <span className="text-white font-bold text-lg">

                      {item.quantity}

                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                      className="w-9 h-9 rounded-xl bg-black border border-[#222222] flex items-center justify-center text-white"
                    >

                      <Plus className="w-4 h-4" />

                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                      className="ml-auto text-red-400"
                    >

                      <Trash2 className="w-5 h-5" />

                    </button>

                  </div>

                </div>

              </div>
            ))
          )}

        </div>

        {/* FOOTER */}
        {cart.length > 0 && (

          <div className="border-t border-[#222222] p-5 sm:p-6">

            <div className="flex items-center justify-between mb-6">

              <h3 className="text-2xl font-bold text-white">

                Total

              </h3>

              <span className="text-3xl font-black text-[#6DBB04]">

                ₹{totalPrice}

              </span>

            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full bg-[#6DBB04] hover:bg-[#8DCE05] transition py-4 rounded-2xl text-black font-bold text-lg flex items-center justify-center"
            >

              Proceed To Checkout

            </Link>

          </div>

        )}

      </div>

    </div>
  );
}