"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import List from "./List";
import ListItem from "./ListItem";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeFromStorage = localStorage.getItem("darkMode") === "true";
    setDarkMode(darkModeFromStorage);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`bg-white dark:bg-dark-bg duration-200 ${darkMode && "dark"}`}>
      <Container>
        <div className="border-gray-200 py-5">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/">
              <span className="self-center text-[20px] font-bold whitespace-nowrap text-black dark:text-white font-inter">
                Saykhul-Alam
              </span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-10 mt-5 sm:m-0 md:pt-5 xl:p-0">
              <Link href="/resume">
                <button
                  className="hover:bg-blue-700 duration-200 flex items-center gap-2 font-inter text-black dark:text-white text-[15px] border-black dark:border-white border-[1px] px-2 py-2 rounded-lg font-semibold hover:text-white"
                  onClick={handleLinkClick}
                >
                  Resume <IoDocumentText />
                </button>
              </Link>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  onClick={handleDark}
                  type="checkbox"
                  checked={darkMode}
                  onChange={handleDark}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="ms-3 text-sm font-bold text-gray-900 dark:text-gray-300">
                  {darkMode ? "light" : "dark"}
                </span>
              </label>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={open ? "true" : "false"}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                open ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
              id="navbar-cta"
            >
              <List className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black dark:border-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      Home
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/about" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      About
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/servic" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      Services
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/projects" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      Projects
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/skills" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      Skills
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group font-semibold">
                  <Link href="/contact" onClick={handleLinkClick}>
                    <span className="block py-2 px-3 md:p-0 text-black dark:text-white">
                      Contact
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
