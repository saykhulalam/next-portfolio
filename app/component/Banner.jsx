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
    <section className=" bg-dark-bg py-8 ">
      <Container>
        <Flex className="justify-between xl:items-center xl:flex-row flex-col sm:flex-row sm:items-center">
          <div className="xl:w-[50%]">
            <h1 className="text-[30px] font-bold text-white flex tracking-[3px] font-inter gap-1 mb-5">
              Hi...
              <CgHello />
            </h1>
            <h3 className="text-white text-[25px] font-inter font-bold tracking-[1px] mb-4">
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
                color: " white",
                fontWeight: "600",
              }}
              repeat={Infinity}
            />
            <h3 className="text-white xl:text-[25px] text-[20px] font-poppins font-semibold tracking-[1px] mt-4">
              {" "}
              beside in Bangladesh
            </h3>
            <p className="xl:text-[20px] sm:w-[350px] text-white mt-4 font-poppins xl:text-left">
              Passionate about crafting sleek, responsive web interfaces.
              Dedicated to turning complex problems into elegant solutions.
              Bringing visions to life with clean, modern code.
            </p>
            <Flex className=" gap-4 mt-4 xl:items-center xl:flex-row flex-col">
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/towsif.hridoy.12?mibextid=ZbWKwL"
                >
                  <FaFacebookSquare className="text-[50px] text-white" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/8801966266966"
                >
                  <FaWhatsappSquare className="text-[50px] text-white" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/saykhulalam"
                >
                  <FaSquareGithub className="text-[50px] text-white" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/saykhul-alam-25a1312a8/"
                >
                  <FaLinkedin className="text-[50px] text-white" />
                </Link>
              </div>
              <Link href="/projects">
                <button className="text-white font-poppins font-bold rounded-br-[20px] rounded-tl-[20px] border py-4 px-4 hover:bg-blue-600 duration-100">
                  {" "}
                  VIEW MY PRJECTS
                </button>
              </Link>
            </Flex>
          </div>
          <div className="xl:w-[50%] flex justify-end">
            <Image
              quality={75}
              placeholder="blur"
              layout="responsive"
              className="border-[1px] mt-10 xl:mt-0"
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
