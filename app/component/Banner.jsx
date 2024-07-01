"use client";
import Container from "./Container";
import BannerImage from "../assats/bannerimg.png";
import Image from "next/image";
import Flex from "./Flex";
import React, { useState, useEffect } from "react";
import { CgHello } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section className=" bg-white dark:bg-dark-bg py-8 duration-200">
      <Container>
        <Flex className="justify-between xl:items-center lg:items-center lg:flex-row xl:flex-row flex-col sm:flex-row sm:items-center gap-5">
          <div className="xl:w-[50%]">
            <h1 className="text-[30px] font-bold text-black dark:text-white flex tracking-[3px] font-inter gap-1 mb-3">
              Hi...
              <CgHello />
            </h1>
            <h3 className="text-black dark:text-white text-[25px] font-inter font-bold tracking-[1px] mb-3">
              I AM SAYKHUL-ALAM
            </h3>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "front end web developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "front end web developer",
                1000,
                "react js developer",
                1000,
                "next js developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{
                fontSize: "25px",
                display: "inline-block",
                fontFamily: " poppins",
                color: "red",
                fontWeight: "600",
              }}
              repeat={Infinity}
            />
            <h3 className="text-black dark:text-white xl:text-[25px] text-[20px] font-poppins font-semibold tracking-[1px] mt-4">
              {" "}
              beside in Bangladesh
            </h3>
            <p className="xl:text-[20px] sm:w-[350px] dark:text-white text-black font-semibold mt-4 font-poppins xl:text-left">
              Passionate about crafting sleek, responsive web interfaces.
              Dedicated to turning complex problems into elegant solutions.
              Bringing visions to life with clean, modern code.
            </p>
            <Flex className=" gap-8 mt-4 xl:flex-col flex-col">
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/towsif.hridoy.12?mibextid=ZbWKwL"
                >
                  <FaFacebookSquare className="text-[50px] dark:text-white text-black" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/8801966266966"
                >
                  <FaWhatsappSquare className="text-[50px] dark:text-white text-black" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/saykhulalam"
                >
                  <FaSquareGithub className="text-[50px] dark:text-white text-black" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/saykhul-alam-25a1312a8/"
                >
                  <FaLinkedin className="text-[50px] dark:text-white text-black" />
                </Link>
              </div>
              <Link href="/projects">
                <button className="dark:text-white text-black font-poppins font-bold rounded-br-[20px] rounded-tl-[20px] border-black border-[1px] dark:border-white py-4 px-4 hover:bg-blue-600 hover:text-white duration-100">
                  {" "}
                  VIEW MY PRJECTS
                </button>
              </Link>
            </Flex>
          </div>
          <div className=" border-[1px] border-black dark:border-white xl:w-[50%] flex justify-end bg-black dark:bg-dark-bg">
            <Image
              quality={75}
              placeholder="blur"
              layout="responsive"
              className=" mt-10 xl:mt-0"
              src={BannerImage}
              alt="bannerImage"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
