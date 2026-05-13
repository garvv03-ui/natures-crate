"use client";

import {
  Star,
  ShoppingCart,
  Minus,
  Plus,
  ArrowLeft,
} from "lucide-react";

import { useParams } from "next/navigation";

import { useProducts } from "./../../context/ProductContext";

import { useCart } from "./../../context/CartContext";

import { useState } from "react";

export default function ProductDetailPage() {

  const params =
    useParams();

  const { products } =
    useProducts();

  const { addToCart } =
    useCart();

  const [quantity, setQuantity] =
    useState(1);

  const product =
    products.find(
      (item) =>
        item.id ===
        Number(
          params.id
        )
    );

  if (!product) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">

        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">

          Product Not Found

        </h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black px-4 py-8 sm:py-12">

      <div className="max-w-7xl mx-auto">

        {/* BACK BUTTON */}
        <button
          onClick={() =>
            window.history.back()
          }
          className="flex items-center gap-3 text-white mb-8 sm:mb-10 hover:text-[#6DBB04] transition"
        >

          <ArrowLeft className="w-5 h-5" />

          Back

        </button>

        {/* PRODUCT SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">

          {/* IMAGE */}
          <div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[320px] sm:h-[500px] lg:h-[650px] object-cover rounded-[30px] lg:rounded-[40px]"
            />

          </div>

          {/* DETAILS */}
          <div>

            {/* CATEGORY */}
            <p className="text-[#6DBB04] text-base sm:text-lg font-semibold mb-4">

              {product.category}

            </p>

            {/* NAME */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">

              {product.name}

            </h1>

            {/* RATING */}
            <div className="flex items-center gap-3 mt-5 sm:mt-6">

              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />

              <span className="text-white text-lg sm:text-xl">

                {product.rating} Rating

              </span>

            </div>

            {/* PRICE */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mt-6 sm:mt-8">

              <span className="text-[#6DBB04] text-4xl sm:text-5xl font-black">

                ₹{product.price}

              </span>

              <span className="text-gray-500 line-through text-xl sm:text-2xl">

                ₹{product.originalPrice}

              </span>

            </div>

            {/* STOCK */}
            <p className="text-gray-400 text-base sm:text-lg mt-5 sm:mt-6">

              Available Stock:
              {" "}
              {product.stock}

            </p>

            {/* DESCRIPTION */}
            <div className="mt-8 sm:mt-10">

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-5">

                Product Description

              </h2>

              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">

                Fresh farm-picked {product.name.toLowerCase()}
                delivered directly to your doorstep.
                Rich in nutrients, naturally grown,
                and perfect for healthy daily meals.

              </p>

            </div>

            {/* QUANTITY */}
            <div className="mt-8 sm:mt-10">

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">

                Quantity

              </h2>

              <div className="flex items-center gap-5">

                <button
                  onClick={() =>
                    setQuantity(
                      quantity > 1
                        ? quantity - 1
                        : 1
                    )
                  }
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#111111] border border-[#222222] flex items-center justify-center text-white"
                >

                  <Minus className="w-5 h-5" />

                </button>

                <span className="text-white text-2xl sm:text-3xl font-bold min-w-10 text-center">

                  {quantity}

                </span>

                <button
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#111111] border border-[#222222] flex items-center justify-center text-white"
                >

                  <Plus className="w-5 h-5" />

                </button>

              </div>

            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                addToCart({
                  id:
                    product.id,
                  name:
                    product.name,
                  image:
                    product.image,
                  price:
                    product.price,
                  quantity,
                })
              }
              className="w-full sm:w-auto mt-10 sm:mt-12 bg-[#6DBB04] hover:bg-[#8DCE05] transition px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-black font-bold text-lg sm:text-xl flex items-center justify-center gap-3"
            >

              <ShoppingCart className="w-6 h-6" />

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}