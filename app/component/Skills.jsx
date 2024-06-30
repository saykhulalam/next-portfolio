"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Skills = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section id="Skills" className="bg-white dark:bg-dark-bg py-20 duration-200">
      <Container>
        <Title Name="My SKILLS" className="xl:mb-20 mb-14" />
        <Slider {...settings}>
          <SkillItem
            key="javascript"
            Icon={<IoLogoJavascript />}
            Name="Javascript"
          />
          <SkillItem key="react" Icon={<FaReact />} Name="React" />
          <SkillItem key="nextjs" Icon={<SiNextdotjs />} Name="Next.js" />
          <SkillItem key="html5" Icon={<FaHtml5 />} Name="HTML5" />
          <SkillItem key="css3" Icon={<IoLogoCss3 />} Name="CSS3" />
          <SkillItem key="tailwind" Icon={<SiTailwindcss />} Name="Tailwind" />
          <SkillItem key="bootstrap" Icon={<SiBootstrap />} Name="Bootstrap" />
          <SkillItem key="github" Icon={<FaGithub />} Name="Github" />
          <SkillItem key="firebase" Icon={<IoLogoFirebase />} Name="Firebase" />
          <SkillItem key="tailwind2" Icon={<SiTailwindcss />} Name="Tailwind" />
          <SkillItem key="Netlify" Icon={<SiNetlify />} Name="Netlify" />
        </Slider>
      </Container>
    </section>
  );
};

export default Skills;
