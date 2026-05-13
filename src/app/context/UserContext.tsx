"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface Order {
  id: number;
  date: string;
  total: number;
  items: number;
  status: string;
  progress: number;
}

interface UserContextType {
  name: string;
  email: string;
  address: string;

  setName: (
    value: string
  ) => void;

  setEmail: (
    value: string
  ) => void;

  setAddress: (
    value: string
  ) => void;

  orders: Order[];

  addOrder: (
    order: Order
  ) => Promise<void>;
}

const UserContext =
  createContext<UserContextType | undefined>(
    undefined
  );

export function UserProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [orders, setOrders] =
    useState<Order[]>([]);

  /* LOAD PROFILE */
  useEffect(() => {

    const savedName =
      localStorage.getItem(
        "nc-user-name"
      );

    const savedEmail =
      localStorage.getItem(
        "nc-user-email"
      );

    const savedAddress =
      localStorage.getItem(
        "nc-user-address"
      );

    const savedOrders =
      localStorage.getItem(
        "nc-orders"
      );

    if (savedName)
      setName(savedName);

    if (savedEmail)
      setEmail(savedEmail);

    if (savedAddress)
      setAddress(savedAddress);

    if (savedOrders)
      setOrders(
        JSON.parse(savedOrders)
      );

  }, []);

  /* SAVE PROFILE */
  useEffect(() => {

    localStorage.setItem(
      "nc-user-name",
      name
    );

    localStorage.setItem(
      "nc-user-email",
      email
    );

    localStorage.setItem(
      "nc-user-address",
      address
    );

    localStorage.setItem(
      "nc-orders",
      JSON.stringify(
        orders
      )
    );

  }, [
    name,
    email,
    address,
    orders,
  ]);

  const addOrder =
    async (
      order: Order
    ) => {

      setOrders((prev) => [
        order,
        ...prev,
      ]);
    };

  return (
    <UserContext.Provider
      value={{
        name,
        email,
        address,
        setName,
        setEmail,
        setAddress,
        orders,
        addOrder,
      }}
    >

      {children}

    </UserContext.Provider>
  );
}

export function useUser() {

  const context =
    useContext(UserContext);

  if (!context) {

    throw new Error(
      "useUser must be used inside UserProvider"
    );
  }

  return context;
}