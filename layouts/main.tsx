import React, { Children } from "react";
import { Navbar } from "../components/navBar";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main></main>
      <div className="w-full h-52 bg-slate-500 bg-gradient-to-t from-slate-700 rounded-t-full"></div>
    </>
  );
};
