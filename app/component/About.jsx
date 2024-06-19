import React from "react";
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";
import Image from "next/image";
import aboutImage from "../assats/aboutImage.png";

const About = () => {
  return (
    <section id="About" className=" bg-dark-bg py-10">
      <Container>
        <Title Name="ABOUT" />
        <Flex className="mt-14 xl:mt-20 gap-5 items-center xl:flex-row flex-col">
          <div className="xl:w-[40%]">
            <Image
              quality={75}
              placeholder="blur"
              className="border-[1px]"
              src={aboutImage}
              layout="responsive"
              alt="aboutImage"
            />
          </div>
          <div className="xl:w-[60%]">
            <h2 className="text-[30px] text-white font-inter tracking-[1px] mb-5 font-semibold">
              About Me
            </h2>
            <p className=" font-poppins text-white text-[20px] leading-8 xl:text-left text-balance  font-normal ">
              I am a passionate student and frontend developer from Bangladesh.
              Currently, I am actively engaged in various aspects of web
              development, continuously enhancing my skills. I am proficient in
              React.js, JavaScript, Next.js, Tailwind CSS, and Bootstrap. Using
              these technologies, I have developed several e-commerce websites.
              My education and wor experience drive my eagerness to learn new
              things. My goal is to create creative and interactive web
              experiences for users. I constantly learn about new technologies
              and tools and apply them to real-world projects. I have worked on
              various projects, including responsive layouts, dynamic content
              management, and user-friendly designs. Through my work, I always
              strive to improve the user experience. I am always ready to
              contribute to the development of the information technology sector
              in Bangladesh. My aim is to build an international-standard
              portfolio that showcases the innovative and creative aspects of my
              work. I believe that through creative thinking, we can pave new
              ways for progress, not just through the use of technology. I am
              dedicated to my work and always keen to take on new challenges. My
              dream is to create something that will impact people and bring
              lasting change to society. Feel free to contact me. Let's create
              something amazing together!
            </p>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
