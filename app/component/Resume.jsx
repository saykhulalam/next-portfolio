import React from "react";
import Container from "./Container";
import Image from "next/image";
import cbOne from "../assats/1.png";
import cbTow from "../assats/2.png";

const Resume = () => {
  return (
    <section className="bg-white dark:bg-dark-bg py-10 duration-200">
      <Container>
        <a href="/saykhul-alam-resume.pdf" download>
          <button className="w-[150px] h-10 bg-blue-600 text-white hover:bg-transparent hover:border-black  dark:hover:border-white hover:text-black border-[1px] dark:hover:text-white font-poppins font-bold mb-7">
            DOWNLOAD
          </button>
        </a>
        <div className="mb-5">
          <Image
            quality={75}
            placeholder="blur"
            layout="responsive"
            src={cbOne}
            alt="First image"
          />
        </div>
        <div>
          <Image
            quality={75}
            placeholder="blur"
            layout="responsive"
            src={cbTow}
            alt="Second image"
          />
        </div>
      </Container>
    </section>
  );
};

export default Resume;
