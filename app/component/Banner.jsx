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

const skills = [
  "front end web developer.....",
  "next JS developer.....",
  "react JS developer.....",
];

const Banner = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
    }, 5000); // Change skill seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" bg-dark-bg py-8 ">
      <Container>
        <Flex className="justify-between xl:items-center xl:flex-row flex-col sm:flex-row sm:items-center">
          <div className="xl:w-[50%]">
            <h1 className="text-[30px] font-bold text-white flex tracking-[3px] font-inter gap-1 mb-5">
              Hi...
              <CgHello />
            </h1>
            <h3 className="text-white text-[25px] font-inter font-bold tracking-[1px]">
              I AM SAYKHUL-ALAM
            </h3>
            <h2
              className="typing-text duration-200 bg-blue-600 text-white py-1 tracking-[5px] mt-4 font-poppins xl:text-[30px] font-bold "
              key={currentSkill}
            >
              {skills[currentSkill]}
            </h2>
            <h3 className="text-white xl:text-[25px] text-[20px] font-poppins font-bold tracking-[1px] mt-4">
              {" "}
              beside in Bangladesh
            </h3>
            <p className="xl:text-[20px] sm:w-[350px] text-white mt-4 font-poppins xl:text-left">
              Passionate about crafting sleek, responsive web interfaces.
              Dedicated to turning complex problems into elegant solutions.
              Bringing visions to life with clean, modern code.
            </p>
            <Flex className=" gap-4 mt-4">
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
            </Flex>
          </div>
          <div className="XL:w-[50%] flex justify-end">
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
