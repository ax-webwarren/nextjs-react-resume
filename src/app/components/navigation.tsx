"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function NavigationComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 w-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={handleClick}
            className="text-white focus:outline-none"
          >
            {/* Icon SVG (e.g., Heroicons) */}
            {isOpen ? (
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="www.w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
            <a
              href="#about"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2"
            >
              ABOUT
            </a>
            <a
              href="WarrenDano.pdf"
              download="Warren Dano.pdf"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2"
            >
              DOWNLOAD
            </a>
            <a
              href="#projects"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2"
            >
              CONTACT
            </a>
            <a
              href="mailto:warrentulangdano@gmail.com"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2"
            >
              EMAIL
            </a>
          </div>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="#about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          >
            ABOUT
          </a>
          <a
            href="WarrenDano.pdf"
            download="Warren Dano.pdf"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          >
            DOWNLOAD
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          >
            CONTACT
          </a>
          <a
            href="mailto:warrentulangdano@gmail.com"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
          >
            EMAIL
          </a>
        </div>
      </div>
    </nav>
  );
}
