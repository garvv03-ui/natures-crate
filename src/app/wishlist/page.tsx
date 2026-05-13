"use client";

import {
  Heart,
  ShoppingCart,
} from "lucide-react";

import { useWishlist } from "./../context/WishListContext";

import { useCart } from "./../context/CartContext";

export default function WishlistPage() {

  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-black px-4 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-12">

          <Heart className="text-red-500 fill-red-500 w-10 h-10" />

          <h1 className="text-5xl font-bold text-white">
            Wishlist
          </h1>

        </div>

        {/* Empty */}
        {wishlist.length === 0 && (
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-16 text-center">

            <Heart className="text-gray-500 w-20 h-20 mx-auto mb-6" />

            <h2 className="text-3xl font-bold text-white">
              Your wishlist is empty
            </h2>

            <p className="text-gray-400 mt-4">
              Save your favorite vegetables here.
            </p>

          </div>
        )}

        {/* Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {wishlist.map((product, index) => (
            <div
              key={index}
              className="bg-[#111111] rounded-3xl overflow-hidden border border-[#222222]"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="text-[#6DBB04] text-2xl font-bold mt-4">
                  ₹{product.price}
                </p>

                <div className="flex gap-3 mt-6">

                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                      })
                    }
                    className="flex-1 bg-[#6DBB04] hover:bg-[#8DCE05] transition py-3 rounded-2xl text-black font-bold flex items-center justify-center gap-2"
                  >

                    <ShoppingCart className="w-5 h-5" />

                    Add

                  </button>

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="bg-red-500 hover:bg-red-600 transition px-4 rounded-2xl"
                  >

                    <Heart className="text-white fill-white w-5 h-5" />

                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}