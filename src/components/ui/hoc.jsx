import React from "react";
import { Navbar } from "./navbar";
import Footer from "./footer";

function HOC({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default HOC;
