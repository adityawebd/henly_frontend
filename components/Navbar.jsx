"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Menu,
  User,
  GraduationCap,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  MapPin,
  ShoppingBasket,
  BellRing,
  HandCoins,
  Heart
} from "lucide-react";
import Image from "next/image";
import { Ticket } from "lucide-react";
// import SearchBar from "./SearchBar";

const menuItems = [
  {
    name: "Shop Now",
    href: "/shop/all",
    subMenu: [
      { name: "High Protein Peanut Butter", href: "#" },
      { name: "Supernatural Protein", href: "#" },
      { name: "Coated Peanuts", href: "#" },
      { name: "Peanut Butter", href: "#" },
      { name: "Super Oats", href: "#" },
      { name: "Super Museli", href: "#" },
      {
        name: "Preparation for Professionals",
        href: "/buy-study-material/celpip",
      },
    ],
  },
  {
    name: "More",
    subMenu: [
      { name: "Combos", href: "#" },
      { name: "Recipes & Blogs", href: "/blogs" },
      { name: "Our Story ", href: "#" },
      { name: "Track Order", href: "#" },
    ],
  },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // For mobile accordion
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menuItem) => {
    setActiveSubMenu(activeSubMenu === menuItem ? null : menuItem);
  };

  // Calculate the scroll progress
  const handleScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    if (scrollTotal > 0) {
      setScrollProgress((currentScroll / scrollTotal) * 100);
    } else {
      setScrollProgress(0);
    }
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      closeSearch();
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="fixed top-0 left-0 w-full bg-primary z-50 border-b">
      <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ">
        {/* Mega menu for desktop */}
        {/* <div className="border w-full flex justify-between"> */}
        <div className="hidden  items-start lg:flex ">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-sm font-semibold text-white uppercase transition-all duration-500 hover:text-secondary hover:cursor-pointer"
                >
                  {item.name}
                </a>
                {/* Check if the menu item has a submenu */}
                {item.subMenu && (
                  <div className="absolute left-0 top-full mt-2 hidden w-56 bg-white shadow-xl rounded-lg opacity-0 transform translate-y-4 transition-transform duration-700 ease-in-out group-hover:opacity-100 group-hover:-translate-y-1 group-hover:block  z-50  border-l-primary border-r-primary">
                    <ul className="grid grid-cols-1 gap-4 p-4">
                      {item.subMenu.map((subItem) => (
                        <li
                          key={subItem.name}
                          className="transition duration-500 rounded-lg"
                        >
                          <a
                            href={subItem.href}
                            className="text-sm font-semibold text-primary transition duration-500 hover:text-secondary"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="items-center space-x-2 hidden lg:block  ">
          <Logo />
        </div>
        <div className="hidden lg:block ">
          <div className="flex gap-4 items-center">
            <button
              onClick={toggleSearch}
              className="text-white transition-all duration-500 flex justify-center align-middle hover:text-secondary py-2 hover:bg-whiteClr hover:rounded-full hover:shadow-gray-900 hover:shadow-whiteClr"
            >
              <Search />
            </button>
            <Link
              href="#"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-white text-primary p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <Heart size={16} />
            </Link>
            <Link
              href="#"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-white text-primary p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <BellRing size={16} />
            </Link>
            <Link
              href="/cart"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-white text-primary p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ShoppingBasket size={16} />
            </Link>
            <Link
              href="/login"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-white text-primary p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <User size={16} />
            </Link>
          </div>
        </div>
        {/* </div> */}

        <div className="lg:hidden flex items-center justify-between  gap-4 w-full">
          {/* <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer " /> */}
          <button
            onClick={toggleSearch}
            className=" text-primary transition-all duration-500 bg-white rounded-3xl p-2 flex justify-center items-center hover:text-primaryClr hover:bg-whiteClr hover:rounded-full hover:text-secondary"
          >
            <Search />
          </button>

          <div className="inline-flex items-center space-x-2 ">
            <Logo />
          </div>

          <div className=" flex gap-4 items-center">
            <Link
              href="#"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-primary text-white p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {/* <ShoppingBasket size={16} /> */}
              <HandCoins size={16} />
            </Link>
            <Link
              href="#"
              className="rounded-3xl flex justify-center items-center border-2 border-primary  bg-primary text-white p-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <BellRing size={16} />
              {/* <span>Login</span> */}
            </Link>
          </div>
        </div>

        {/* Mobile accordion menu */}
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        src="/assets/logo/logo_main.png"
                        alt="Logo"
                        height=""
                        width="100px"
                      />
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href || "#"}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                          onClick={() =>
                            item.subMenu && toggleSubMenu(item.name)
                          }
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                          {item.subMenu && (
                            <>
                              {activeSubMenu === item.name ? (
                                <ChevronUp className="ml-auto" />
                              ) : (
                                <ChevronDown className="ml-auto" />
                              )}
                            </>
                          )}
                        </a>
                        {item.subMenu && activeSubMenu === item.name && (
                          <ul className="ml-6 mt-2">
                            {item.subMenu.map((subItem) => (
                              <li key={subItem.name} className="py-2">
                                <a
                                  href={subItem.href}
                                  className="text-sm text-gray-700 hover:text-gray-900"
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>
                {/* <div className="flex mt-4">
                  <Link
                    href="/signup-tutor"
                    className="rounded-3xl flex gap-2 justify-center items-center border-2 border-primary  bg-primary text-white px-5 py-2 text-xs uppercase font-semibold transition ease-in-out duration-500 hover:border-2 hover:border-primary hover:bg-white hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <GraduationCap size={20} />
                    <span>Signup as Tutor</span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>



      {/* Progress bar */}
      <div className="relative w-full h-[2px] bg-gray-200">
        <div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-secondary transition-width duration-300"
        />
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-30 z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg transition-transform duration-500 transform translate-y-0 h-[100vh]">
          <div
            ref={searchBarRef}
            className="bg-white py-10 sm:p-6 md:p-8 lg:px-48 max-sm:px-4"
          >
            <SearchBar />
            {/* <hr className="text-textClr mt-5 mb-4" /> */}
          </div>
        </div>
      )}
    </div>
  );
}
