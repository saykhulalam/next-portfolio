import React from "react";
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
import Container from "./Container";
import Title from "./Title";
import Flex from "./Flex";

const SocendSkills = () => {
  return (
    <section id="Skills" className="bg-dark-bg py-20">
      <Container>
        <Title Name="My SKILLS" className="xl:mb-20 mb-14" />

       <Flex className="justify-between flex-wrap gap-5">
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
       </Flex>
      </Container>
    </section>
  );
};

export default SocendSkills;
