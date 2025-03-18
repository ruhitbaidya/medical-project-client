"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-white text-2xl font-bold cursor-pointer">
                MedBook
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                About
              </span>
            </Link>
            <Link href="/alldoctors">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                All Doctors
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Contact Us
              </span>
            </Link>
            <Link href="/register">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Register
              </span>
            </Link>
            <Link href="/login">
              <span className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <span className="text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/register">
              <span className="text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Register
              </span>
            </Link>
            <Link href="/login">
              <span className="text-white hover:bg-purple-700 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                Login
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
