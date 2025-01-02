"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Projects", href: "projects" },
    // { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-gray-900 bg-opacity-90 sticky top-0 shadow-lg lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-white">
          {/* Logo */}
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-red-500 font-bold text-2xl"
          >
            MOHAMED FRIKHA
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 w-6 rounded-lg text-center text-xs transition-all hover:bg-transparent focus:bg-transparent"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="#home"
                className="text-red-500 font-bold text-xl pt-4 ps-4"
              >
                MOHAMED FRIKHA
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-lg text-white hover:text-red-500"
                >
                  <Link href={item.href} onClick={toggleMobileMenu}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-row items-center gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="text-lg text-white hover:text-red-500"
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;