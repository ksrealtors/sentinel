import React, { useEffect } from "react";
import { Navbar } from "./navbar";
import Footer from "./footer";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

let smootherInstance = null; // Keep a global reference so we don't recreate

function HOC({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (!smootherInstance) {
      const wrapper = document.querySelector("#smooth-wrapper");
      const content = document.querySelector("#smooth-content");

      if (wrapper && content) {
        smootherInstance = ScrollSmoother.create({
          content: "#smooth-content",
          wrapper: "#smooth-wrapper",
          smooth: 1.2, // tweak smoothness for better feel
          effects: true,
        });
      }
    }

    return () => {
      // Optional: if you ever want to kill smoother when unmounting
      // smootherInstance?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className="flex flex-col min-h-screen bg-gray-50">
      <div className="block" id="smooth-content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default HOC;
