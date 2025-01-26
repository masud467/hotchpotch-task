"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow gap-2"
            >
              {navItems.map((item) => (
                <Link
                  className="font-semibold hover:text-primary duration-300 hover:underline text-white"
                  href={item.path}
                  key={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="text-white text-2xl font-semibold">
           <Image src="/assets/images/Logo.png" alt="logo" width={70} height={70} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-5 items-center justify-center">
          {navItems.map((item) => (
            <Link
              className="font-semibold hover:text-primary duration-300 hover:underline text-white"
              href={item.path}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-5">
           
          <button
                
                className="btn btn-outline text-white font-semibold"
              >
                Sign in
              </button>
            <a className="btn   text-white bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] border-none hover:bg-gradient-to-r hover:from-[#5C7FFF] hover:to-[#CB5CFF] active:bg-gradient-to-r active:from-[#0035F5] active:to-[#A600F5]">
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Demos",
    path: "/demos",
  },
  {
    title: "about",
    path: "/about",
  },

  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Pages",
    path: "/pages",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default Navbar;
