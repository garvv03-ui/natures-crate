"use client";

import {
  ShoppingCart,
  Menu,
  Search,
  X,
  Heart,
  User,
} from "lucide-react";

import { useState } from "react";

import Link from "next/link";

import { useCart } from "../context/CartContext";

import CartDrawer from "./CartDrawer";

export default function Navbar() {

  const { cartCount } =
    useCart();

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [cartOpen, setCartOpen] =
    useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-[#1A1A1A]">

        <div className="max-w-7xl mx-auto px-4 py-4">

          <div className="flex items-center justify-between gap-4">

            {/* LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0"
            >

              <img
                src="/logo.png"
                alt="Nature's Crate"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />

              <h1 className="text-xl sm:text-2xl font-black leading-none">

                <span className="text-[#6DBB04]">
                  Nature&apos;s
                </span>

                {" "}

                <span className="text-[#B8743A]">
                  Crate
                </span>

              </h1>

            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">

              <Link
                href="/"
                className="text-white hover:text-[#6DBB04] transition font-medium"
              >
                Home
              </Link>

              <Link
                href="/bulk-orders"
                className="text-white hover:text-[#6DBB04] transition font-medium"
              >
                Bulk Orders
              </Link>

              <Link
                href="/wishlist"
                className="text-white hover:text-[#6DBB04] transition font-medium"
              >
                Wishlist
              </Link>

              <Link
                href="/profile"
                className="text-white hover:text-[#6DBB04] transition font-medium"
              >
                Profile
              </Link>

            </div>

            {/* SEARCH */}
            <div className="hidden xl:flex items-center bg-[#111111] border border-[#222222] rounded-full px-4 py-3 w-80">

              <Search className="text-[#6DBB04] w-5 h-5 shrink-0" />

              <input
                type="text"
                placeholder="Search vegetables..."
                className="bg-transparent outline-none text-white px-3 w-full"
              />

            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3 sm:gap-5">

              {/* WISHLIST */}
              <Link
                href="/wishlist"
                className="hidden sm:flex text-white hover:text-[#6DBB04] transition"
              >

                <Heart className="w-6 h-6" />

              </Link>

              {/* PROFILE */}
              <Link
                href="/profile"
                className="hidden sm:flex text-white hover:text-[#6DBB04] transition"
              >

                <User className="w-6 h-6" />

              </Link>

              {/* CART */}
              <button
                className="relative"
                onClick={() =>
                  setCartOpen(true)
                }
              >

                <ShoppingCart className="text-white w-7 h-7" />

                <span className="absolute -top-2 -right-2 bg-[#E81F16] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">

                  {cartCount}

                </span>

              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className="lg:hidden"
                onClick={() =>
                  setMobileMenu(
                    !mobileMenu
                  )
                }
              >

                {mobileMenu ? (

                  <X className="text-white w-7 h-7" />

                ) : (

                  <Menu className="text-white w-7 h-7" />

                )}

              </button>

            </div>

          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (

          <div className="lg:hidden border-t border-[#222222] bg-black">

            <div className="px-4 py-6 flex flex-col gap-5">

              {/* MOBILE SEARCH */}
              <div className="flex items-center bg-[#111111] border border-[#222222] rounded-2xl px-4 py-4">

                <Search className="text-[#6DBB04] w-5 h-5 shrink-0" />

                <input
                  type="text"
                  placeholder="Search vegetables..."
                  className="bg-transparent outline-none text-white px-3 w-full"
                />

              </div>

              <Link
                href="/"
                className="text-white text-lg font-medium"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Home
              </Link>

              <Link
                href="/bulk-orders"
                className="text-white text-lg font-medium"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Bulk Orders
              </Link>

              <Link
                href="/wishlist"
                className="text-white text-lg font-medium"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Wishlist
              </Link>

              <Link
                href="/profile"
                className="text-white text-lg font-medium"
                onClick={() =>
                  setMobileMenu(false)
                }
              >
                Profile
              </Link>

              <Link
                href="/auth"
                onClick={() =>
                  setMobileMenu(false)
                }
                className="bg-[#6DBB04] text-black py-4 rounded-2xl font-bold text-center mt-3"
              >
                Login / Signup
              </Link>

            </div>

          </div>

        )}

      </nav>

      {/* CART DRAWER */}
      <CartDrawer
        open={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
      />

    </>
  );
}