import React from "react";
import Title from "./Title";
import Container from "./Container";
import List from "./List";
import ListItem from "./ListItem";
import { FaCheck } from "react-icons/fa";
const Services = () => {
  return (
    <section id="Services" className=" bg-dark-bg xl:py-20 py-16">
      <Container>
        <Title Name="SERVICES" />
        <div className="one">
          <h1 className=" text-blue-600 font-poppins text-[30px] underline font-semibold mt-10">
            1. Figma Design to HTML Conversion
          </h1>
          <h2 className=" text-white font-poppins text-[25px] font-semibold mt-5">
            <span className="text-white font-poppins text-[25px] font-bold underline">
              Tools:
            </span>{" "}
            Figma, HTML, CSS, JavaScript
          </h2>
          <List className="mt-5">
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Figma to HTML Conversion: I accurately convert Figma designs into
              HTML, CSS, and JavaScript.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Responsive Web Design: I create responsive designs that look great
              on all devices.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              HTML/CSS Development: I write clean, well-structured code using
              semantic HTML and CSS.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              JavaScript Integration: I develop dynamic, interactive web pages
              using JavaScript.
            </ListItem>
          </List>
        </div>
        <div className="tow">
          <h1 className=" text-blue-600 font-poppins text-[30px] underline font-semibold mt-10">
            2. Frontend Development
          </h1>
          <h2 className=" text-white font-poppins text-[25px] font-semibold mt-5">
            <span className="text-white font-poppins text-[25px] font-bold underline">
              Technologies:
            </span>{" "}
            Tailwind CSS, React, Next.js
          </h2>
          <List className="mt-5">
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Tailwind CSS: I use Tailwind CSS to quickly and efficiently
              develop beautiful, custom designs.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              React Development: I develop scalable and efficient web
              applications using React.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Next.js Development: I use Next.js to include server-side
              rendering (SSR) and static site generation (SSG) functionalities
              for optimized performance.
            </ListItem>
          </List>
        </div>
        <div className="three">
          <h1 className=" text-blue-600 font-poppins text-[30px] underline font-semibold mt-10">
            3. Additional Services
          </h1>
          <List className="mt-5">
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Website Maintenance: I provide regular website updates, bug fixes,
              and performance optimization services.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Code Review & Optimization: I review existing codebases and
              provide performance optimization suggestions.
            </ListItem>
            <ListItem className=" text-white flex xl:items-center gap-4 mt-4 font-poppins text-[20px] font-normal">
              <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white ">
                <FaCheck className="text-black text-[15px]" />
              </div>
              Web Performance Auditing: I conduct web performance audits and
              provide recommendations for improving load time, accessibility,
              and SEO.
            </ListItem>
          </List>
        </div>
      </Container>
    </section>
  );
};

export default Services;
