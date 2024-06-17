import React from "react";
import Flex from "./Flex";
import Image from "next/image";
import { SiNetlify } from "react-icons/si";
import Link from "next/link";

const ProjectsItemLeft = ({ ImageUrl, Name, Peragraph, LinkUrl }) => {
  return (
    <div>
      <Flex className="gap-5 items-center xl:flex-row flex-col lg:flex-row md:flex-row">
        <div className="xl:w-[50%] lg:w-[50%] md:w-[50%]">
          <Image
            quality={75}
            placeholder="blur"
            layout="responsive"
            src={ImageUrl}
          />
        </div>
        <div className="xl:w-[50%] lg:w-[50%] md:w-[50%]">
          <h2 className="text-[30px] text-blue-600 font-inter font-semibold">
            {Name}
          </h2>
          <p className="text-white font-normal font-poppins text-[20px] mt-5">
            {Peragraph}
          </p>
          <Link target="_blank" rel="noopener noreferrer" href={`${LinkUrl}`}>
            <button className="text-[20px] text-white font-inter font-semibold border-[1px] py-3 px-6 rounded-br-[20px] rounded-tl-[20px] flex items-center gap-3 mt-10 hover:bg-blue-600 duration-200">
              {" "}
              <SiNetlify className="text-[30px]" />
              LIVE DEMO
            </button>
          </Link>
        </div>
      </Flex>
      <hr className="mt-10" />
    </div>
  );
};

export default ProjectsItemLeft;
