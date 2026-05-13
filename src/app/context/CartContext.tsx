"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];

  cartCount: number;

  addToCart: (
    item: CartItem
  ) => void;

  removeFromCart: (
    id: number
  ) => void;

  increaseQuantity: (
    id: number
  ) => void;

  decreaseQuantity: (
    id: number
  ) => void;

  clearCart: () => void;

  totalPrice: number;
}

const CartContext =
  createContext<CartContextType | undefined>(
    undefined
  );

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [cart, setCart] =
    useState<CartItem[]>([]);

  /* LOAD */
  useEffect(() => {

    const savedCart =
      localStorage.getItem(
        "natures-crate-cart"
      );

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);

  /* SAVE */
  useEffect(() => {

    localStorage.setItem(
      "natures-crate-cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (
    item: CartItem
  ) => {

    setCart((prev) => {

      const existing =
        prev.find(
          (i) => i.id === item.id
        );

      if (existing) {

        return prev.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity:
                  i.quantity +
                  item.quantity,
              }
            : i
        );

      }

      return [...prev, item];
    });
  };

  const removeFromCart = (
    id: number
  ) => {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const increaseQuantity = (
    id: number
  ) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id: number
  ) => {

    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const clearCart = () => {

    setCart([]);
  };

  const cartCount = cart.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (acc, item) =>
      acc +
      item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {

  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}