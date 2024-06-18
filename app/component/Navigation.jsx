// components/Navigation.js
"use client";
import React from "react";
import Container from "./Container"; // Ensure these imports are correct
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import List from "./List"; // Ensure these imports are correct
import ListItem from "./ListItem"; // Ensure these imports are correct

const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-dark-bg">
      <Container>
        <div className="border-gray-200 py-5">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-inter">
                Saykhul-alam
              </span>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link href="/resume">
                <button className="hover:bg-blue-700 duration-200 flex items-center gap-2 font-inter text-white text-[12px] border-white border-[1px] px-2 py-2 rounded-lg">
                  Resume <IoDocumentText />
                </button>
              </Link>
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
              <List className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <ListItem className="font-inter text-[15px] select-none group">
                  <Link href="/">
                    <span className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white">
                      Home
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group">
                  <Link href="/">
                    <span className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white">
                      About
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group">
                  <Link href="/">
                    <span className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white">
                      Services
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group">
                  <Link href="/">
                    <span className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white">
                      Skills
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </ListItem>
                <ListItem className="font-inter text-[15px] select-none group">
                  <Link href="/">
                    <span className="block py-2 px-3 md:p-0 text-gray-900 dark:text-white">
                      Contact
                      <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
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
