import type { Metadata } from "next";

import Script from "next/script";

import "./globals.css";

import { Toaster } from "react-hot-toast";

import { CartProvider } from "./context/CartContext";

import { ProductProvider } from "./context/ProductContext";

import { WishlistProvider } from "./context/WishListContext";

import { SearchProvider } from "./context/SearchContext";

import { UserProvider } from "./context/UserContext";

import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "Nature's Crate",
  description:
    "Fresh vegetables delivered fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        {/* Razorpay */}
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />

        <ThemeProvider>

          <CartProvider>

            <ProductProvider>

              <WishlistProvider>

                <SearchProvider>

                  <UserProvider>

                    <Toaster
                      position="top-right"
                      toastOptions={{
                        style: {
                          background:
                            "#111111",
                          color:
                            "#ffffff",
                          border:
                            "1px solid #6DBB04",
                          borderRadius:
                            "16px",
                          padding:
                            "16px",
                        },
                      }}
                    />

                    {children}

                  </UserProvider>

                </SearchProvider>

              </WishlistProvider>

            </ProductProvider>

          </CartProvider>

        </ThemeProvider>

      </body>

    </html>
  );
}