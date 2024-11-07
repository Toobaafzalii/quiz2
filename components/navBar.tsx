"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.currentTarget.textContent;

    switch (buttonText) {
      case "HOME":
        router.push("/");
        break;
      case "POSTS":
        router.push("/posts");
        break;
      case "USERS":
        router.push("/users");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="w-[98%] flex justify-center items-center gap-x-6 lg:gap-x-16 bg-slate-600 bg-gradient-to-b from-slate-400  py-3 text-xl font-semibold rounded-b-full mx-auto shadow-lg text-gray-50">
      <button
        className="hover:underline  hover:shadow-white shadow-inner rounded-3xl px-3 py-1"
        onClick={handleOnClick}
      >
        HOME
      </button>

      <button
        className="hover:underline hover:shadow-white shadow-inner rounded-3xl px-3 py-1"
        onClick={handleOnClick}
      >
        POSTS
      </button>

      <button
        className="hover:underline  hover:shadow-white shadow-inner rounded-3xl px-3 py-1"
        onClick={handleOnClick}
      >
        USERS
      </button>
    </nav>
  );
};
