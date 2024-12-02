"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import TypingAnimation from "../ui/typing-animation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Links data array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about-me" },
    { name: "Blogs", href: "/blogs" },

  ];

  // Check active link
  const isActive = (path:any) => pathname === path;

  return (
    <div className="bg-gradient-to-r from-[#001f3f] via-[#000000] to-[#9c40ff] py-4 ">
      <div className="mx-auto max-w-[1200px] flex justify-between items-center px-4 min-h-[40px]">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold text-white">
            <TypingAnimation
              className="text-[20px] italic font-[DancingScript] text-orange-300"
              text="Sharmin's Portfolio"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                isActive(link.href) ? "text-orange-300 font-bold" : "text-white"
              } hover:text-orange-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-10 right-0 w-48 bg-black/80 rounded shadow-lg text-center text-white space-y-4 py-4 z-50">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)} // Close menu on click
                  className={`block ${
                    isActive(link.href)
                      ? "text-orange-300 font-bold"
                      : "text-white"
                  } hover:text-orange-300`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
