"use client";

import {
  Star,
  ShoppingCart,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

import Link from "next/link";

import { useCart } from "../context/CartContext";

import { useProducts } from "../context/ProductContext";

import { useState } from "react";

export default function Products() {

  const { addToCart } =
    useCart();

  const { products } =
    useProducts();

  /* FILTER STATES */
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("");

  /* UNIQUE CATEGORIES */
  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  /* FILTERED PRODUCTS */
  let filteredProducts =
    products.filter(
      (product) => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          category === "All"
            ? true
            : product.category ===
              category;

        return (
          matchesSearch &&
          matchesCategory
        );
      }
    );

  /* SORTING */
  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }

  if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  return (
    <section className="bg-black py-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">

          <div>

            <h2 className="text-4xl font-bold text-white">

              Best{" "}

              <span className="text-[#6DBB04]">

                Sellers

              </span>

            </h2>

            <p className="text-gray-400 mt-3">

              Most loved fresh products by our customers.

            </p>

          </div>

          {/* SEARCH + FILTERS */}
          <div className="flex flex-col md:flex-row gap-4">

            {/* SEARCH */}
            <div className="flex items-center gap-3 bg-[#111111] border border-[#222222] rounded-2xl px-5 py-4">

              <Search className="text-[#6DBB04] w-5 h-5" />

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="bg-transparent outline-none text-white"
              />

            </div>

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              className="bg-[#111111] border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
            >

              {categories.map(
                (
                  item,
                  index
                ) => (

                  <option
                    key={index}
                    value={item}
                  >

                    {item}

                  </option>
                )
              )}

            </select>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
              className="bg-[#111111] border border-[#222222] rounded-2xl px-5 py-4 text-white outline-none"
            >

              <option value="">
                Sort By
              </option>

              <option value="low">
                Price Low To High
              </option>

              <option value="high">
                Price High To Low
              </option>

            </select>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map(
            (
              product,
              index
            ) => (

              <Link
                key={index}
                href={`/product/${product.id}`}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="bg-[#111111] rounded-3xl overflow-hidden border border-[#222222] hover:border-[#6DBB04] transition cursor-pointer"
                >

                  {/* IMAGE */}
                  <div className="relative">

                    <img
                      src={
                        product.image
                      }
                      alt={
                        product.name
                      }
                      className="w-full h-64 object-cover"
                    />

                    <div className="absolute top-4 left-4 bg-[#E81F16] text-white px-3 py-1 rounded-full text-sm font-semibold">

                      SALE

                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    {/* CATEGORY */}
                    <p className="text-[#6DBB04] text-sm font-semibold mb-3">

                      {product.category}

                    </p>

                    {/* RATING */}
                    <div className="flex items-center gap-2 mb-3">

                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

                      <span className="text-white text-sm">

                        {product.rating}

                      </span>

                    </div>

                    {/* NAME */}
                    <h3 className="text-xl font-bold text-white">

                      {product.name}

                    </h3>

                    {/* STOCK */}
                    <p className="text-gray-400 mt-2 text-sm">

                      Stock Available:
                      {" "}
                      {product.stock}

                    </p>

                    {/* PRICE */}
                    <div className="flex items-center gap-3 mt-4">

                      <span className="text-[#6DBB04] text-2xl font-bold">

                        ₹{product.price}

                      </span>

                      <span className="text-gray-500 line-through">

                        ₹{product.originalPrice}

                      </span>

                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={(e) => {

                        e.preventDefault();

                        e.stopPropagation();

                        addToCart({
                          id:
                            product.id,

                          name:
                            product.name,

                          image:
                            product.image,

                          price:
                            product.price,

                          quantity: 1,
                        });
                      }}
                      className="w-full mt-6 bg-[#6DBB04] hover:bg-[#8DCE05] transition py-3 rounded-2xl text-black font-bold flex items-center justify-center gap-2"
                    >

                      <ShoppingCart className="w-5 h-5" />

                      Add To Cart

                    </button>

                  </div>

                </motion.div>

              </Link>
            )
          )}

        </div>

        {/* EMPTY */}
        {filteredProducts.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-white">

              No Products Found

            </h2>

            <p className="text-gray-400 mt-4">

              Try changing filters or search.

            </p>

          </div>

        )}

      </div>

    </section>
  );
}