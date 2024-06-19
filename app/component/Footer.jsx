import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";

const Footer = () => {
  return (
    <section className=" bg-blue-600">
      <Container>
        <Flex className=" justify-between items-center py-10 lg:flex-row flex-col gap-4 sm:flex-row">
          <Link href="/">
            <span className="self-center text-[20px] font-semibold text-white font-inter">
              Saykhul-Alam
            </span>
          </Link>
          <List className="flex lg:gap-5 lg:flex-row flex-col sm:flex-row ">
            <ListItem className="ml-3">
              <Link href="/">
                <span className="block py-2 px-3 md:p-0 text-white">
                  Home
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
            <ListItem className="ml-3">
              <Link href="/about">
                <span className="block py-2 px-3 md:p-0 text-white">
                  About
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
            <ListItem className="ml-3">
              <Link href="/servic">
                <span className="block py-2 px-3 md:p-0 text-white">
                  Services
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
            <ListItem className="ml-3">
              <Link href="/projects">
                <span className="block py-2 px-3 md:p-0 text-white">
                  Projects
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
            <ListItem className="ml-3">
              <Link href="/skills">
                <span className="block py-2 px-3 md:p-0 text-white">
                  Skills
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
            <ListItem className="ml-3">
              <Link href="/contact">
                <span className="block py-2 px-3 md:p-0 text-white">
                  Contact
                  <span className="block mx-auto mt-1 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            </ListItem>
          </List>
          <Link href="/resume">
            <button className="hover:bg-blue-700 duration-200 flex items-center gap-2 font-inter text-white text-[12px] border-white border-[1px] px-2 py-2 rounded-lg">
              Resume <IoDocumentText />
            </button>
          </Link>
        </Flex>
        <p className="text-[15px] text-white font-poppins text-center pb-4">
          {" "}
          &#169; copyright-2024
        </p>
      </Container>
    </section>
  );
};

export default Footer;
