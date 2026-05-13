"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  stock: number;
  category: string;
}

interface ProductContextType {
  products: Product[];

  addProduct: (
    product: Product
  ) => void;

  deleteProduct: (
    id: number
  ) => void;
}

const ProductContext =
  createContext<ProductContextType | undefined>(
    undefined
  );

export function ProductProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [products, setProducts] =
    useState<Product[]>([]);

  /* LOAD */
  useEffect(() => {

    const savedProducts =
      localStorage.getItem(
        "nc-products"
      );

    if (savedProducts) {

      setProducts(
        JSON.parse(
          savedProducts
        )
      );

    } else {

      setProducts([
        {
          id: 1,
          name:
            "Fresh Tomatoes",
          image:
            "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1200&auto=format&fit=crop",
          price: 40,
          originalPrice: 60,
          rating: 4.8,
          stock: 120,
          category:
            "Vegetables",
        },

        {
          id: 2,
          name:
            "Organic Broccoli",
          image:
            "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1200&auto=format&fit=crop",
          price: 80,
          originalPrice: 120,
          rating: 4.7,
          stock: 80,
          category:
            "Organic",
        },

        {
          id: 3,
          name:
            "Fresh Carrots",
          image:
            "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1200&auto=format&fit=crop",
          price: 50,
          originalPrice: 70,
          rating: 4.9,
          stock: 100,
          category:
            "Vegetables",
        },

        {
          id: 4,
          name:
            "Green Capsicum",
          image:
            "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop",
          price: 65,
          originalPrice: 90,
          rating: 4.6,
          stock: 60,
          category:
            "Fresh",
        },
      ]);
    }

  }, []);

  /* SAVE */
  useEffect(() => {

    localStorage.setItem(
      "nc-products",
      JSON.stringify(
        products
      )
    );

  }, [products]);

  const addProduct = (
    product: Product
  ) => {

    setProducts((prev) => [
      product,
      ...prev,
    ]);
  };

  const deleteProduct = (
    id: number
  ) => {

    setProducts((prev) =>
      prev.filter(
        (product) =>
          product.id !== id
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
      }}
    >

      {children}

    </ProductContext.Provider>
  );
}

export function useProducts() {

  const context =
    useContext(ProductContext);

  if (!context) {

    throw new Error(
      "useProducts must be used inside ProductProvider"
    );
  }

  return context;
}