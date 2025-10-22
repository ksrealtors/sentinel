import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="relative h-[450px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-[450px] w-full">
        <div className="bg-orange-100 py-10 px-12 h-full w-full flex flex-col justify-between text-gray-900">
          <div className="flex flex-wrap justify-between gap-16">
            {/* About Section */}
            <div className="flex flex-col max-w-sm">
              <h3 className="mb-3 uppercase text-orange-600">
                About K S Realtors
              </h3>
              <p className="text-sm leading-relaxed text-gray-800 text-justify">
                K S Realtors is a leading real estate company specializing in
                residential and commercial properties. With years of experience
                and a commitment to excellence, we help clients find their
                perfect homes and investment opportunities, ensuring quality,
                trust, and transparency in every transaction.
              </p>
            </div>

            {/* About Links */}
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 uppercase text-orange-600">Quick Links</h3>
              <a
                href="#home"
                className="hover:text-orange-700 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="hover:text-orange-700 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="hover:text-orange-700 transition-colors"
              >
                About us
              </a>
              <a
                // href="catalog"
                className="hover:text-orange-700 transition-colors"
              >
                Catalog
              </a>
              <a
                // href="contact"
                className="hover:text-orange-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-3">
              <h3 className="uppercase text-orange-600">Follow Us</h3>
              <div className="flex gap-4 text-xl">
                <a href="#" className="hover:text-orange-400 transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-orange-700 transition-colors">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-400 mt-8 pt-4 text-center text-sm text-gray-800">
            © {new Date().getFullYear()} K S Realtors. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
