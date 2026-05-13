"use client";

import {
  Mail,
  Lock,
} from "lucide-react";

import { useState } from "react";

import toast from "react-hot-toast";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "./../lib/firebase";

export default function AuthPage() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [isLogin, setIsLogin] =
    useState(true);

  const handleAuth =
    async () => {

      try {

        if (isLogin) {

          await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          toast.success(
            "Login Successful 🎉"
          );

        } else {

          await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          toast.success(
            "Account Created 🎉"
          );
        }

        setTimeout(() => {

          window.location.href =
            "/";

        }, 1500);

      } catch (error: any) {

        toast.error(
          error.message
        );
      }
    };

  const googleLogin =
    async () => {

      try {

        const provider =
          new GoogleAuthProvider();

        await signInWithPopup(
          auth,
          provider
        );

        toast.success(
          "Google Login Successful 🎉"
        );

        setTimeout(() => {

          window.location.href =
            "/";

        }, 1500);

      } catch (error: any) {

        toast.error(
          error.message
        );
      }
    };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-[#111111] border border-[#222222] rounded-3xl p-10">

        <h1 className="text-4xl font-bold text-white text-center">

          {isLogin
            ? "Welcome Back"
            : "Create Account"}

        </h1>

        <p className="text-gray-400 text-center mt-4">

          Nature&apos;s Crate Authentication

        </p>

        <div className="space-y-6 mt-10">

          {/* Email */}
          <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

            <Mail className="text-[#6DBB04] w-5 h-5" />

            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              className="bg-transparent outline-none text-white w-full"
            />

          </div>

          {/* Password */}
          <div className="flex items-center gap-4 bg-black border border-[#222222] rounded-2xl px-5 py-4">

            <Lock className="text-[#6DBB04] w-5 h-5" />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="bg-transparent outline-none text-white w-full"
            />

          </div>

          {/* Auth Button */}
          <button
            onClick={handleAuth}
            className="w-full bg-[#6DBB04] hover:bg-[#8DCE05] transition py-4 rounded-2xl text-black font-bold text-lg"
          >

            {isLogin
              ? "Login"
              : "Create Account"}

          </button>

          {/* Google */}
          <button
            onClick={googleLogin}
            className="w-full border border-[#222222] hover:border-[#6DBB04] transition py-4 rounded-2xl text-white font-semibold"
          >

            Continue With Google

          </button>

          {/* Switch */}
          <button
            onClick={() =>
              setIsLogin(
                !isLogin
              )
            }
            className="text-[#6DBB04] text-center w-full"
          >

            {isLogin
              ? "Create new account"
              : "Already have an account?"}

          </button>

        </div>

      </div>

    </div>
  );
}