"use client";
import Link from "next/link";
import React from "react";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

import { usePathname } from "next/navigation";

const Navber = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="btm-nav shadow-orange-top rounded-lg bg-transparent text-slate-300">
        <div>
          <div className="text-white font-semibold text-xl">
            <i>
              Sharmin&apos;s <span className="text-orange-300">P</span>ortfolio
            </i>
          </div>
        </div>

        <Link
          href="/"
          className={` ${pathname === "/" ? "text-orange-300" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>
        <Link
          href="/projects"
          className={`transition-transform hover:translate-x-1 ${
            pathname === "/projects" ? "text-orange-300" : ""
          }`}
        >
          <GoProjectSymlink />
          <span className="btm-nav-label">Projects</span>
        </Link>
        <Link
          href="/about-me"
          className={`transition-transform hover:translate-x-1 ${
            pathname === "/about-me" ? "text-orange-300" : ""
          }`}
        >
          <MdOutlineRoundaboutRight />
          <span className="btm-nav-label">About me</span>
        </Link>
        <Link
          href="/contact"
          className={`transition-transform hover:translate-x-1 ${
            pathname === "/contact" ? "text-orange-300" : ""
          }`}
        >
          <GiSkills />
          <span className="btm-nav-label">Experience</span>
        </Link>

        <div>
          <p className="text-slate-600">© All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Navber;
