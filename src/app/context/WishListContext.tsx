"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  stock: number;
  category: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];

  addToWishlist: (
    item: WishlistItem
  ) => void;

  removeFromWishlist: (
    id: number
  ) => void;

  isWishlisted: (
    id: number
  ) => boolean;
}

const WishlistContext =
  createContext<WishlistContextType | undefined>(
    undefined
  );

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [wishlist, setWishlist] =
    useState<WishlistItem[]>([]);

  /* LOAD */
  useEffect(() => {

    const savedWishlist =
      localStorage.getItem(
        "natures-crate-wishlist"
      );

    if (savedWishlist) {

      setWishlist(
        JSON.parse(savedWishlist)
      );

    }

  }, []);

  /* SAVE */
  useEffect(() => {

    localStorage.setItem(
      "natures-crate-wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  const addToWishlist = (
    item: WishlistItem
  ) => {

    setWishlist((prev) => {

      const exists = prev.find(
        (i) => i.id === item.id
      );

      if (exists) return prev;

      return [...prev, item];
    });
  };

  const removeFromWishlist = (
    id: number
  ) => {

    setWishlist((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const isWishlisted = (
    id: number
  ) => {

    return wishlist.some(
      (item) => item.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {

  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}