import React from "react";
import Flex from "./Flex";
import Image from "next/image";
import { SiNetlify } from "react-icons/si";
import Link from "next/link";

const ProjectsItemRight = ({ ImageUrl, Name, Peragraph, LinkUrl }) => {
  return (
    <div>
      <Flex className="gap-5 items-center xl:flex-row flex-col lg:flex-row md:flex-row">
        <div className=" xl:text-right lg:w-[50%] xl:w-[50%] md:w-[50%]">
          <h2 className="text-[30px] text-blue-600 font-inter font-bold">
            {Name}
          </h2>
          <p className="text-black dark:text-white font-normal font-poppins text-[20px] mt-5">
            {Peragraph}
          </p>
          <Link target="_blank" rel="noopener noreferrer" href={`${LinkUrl}`}>
            <div className=" xl:ml-[65%]">
              <button className="text-[20px] text-black dark:text-white border-black dark:border-white hover:text-white font-inter font-semibold border-[1px] py-3 px-6 rounded-br-[20px] rounded-tl-[20px] flex items-center gap-3 mt-5 hover:bg-blue-600 duration-200">
                {" "}
                <SiNetlify className="text-[30px]" />
                LIVE DEMO
              </button>
            </div>
          </Link>
        </div>
        <div className="xl:w-[50%] lg:w-[50%] md:w-[50%]">
          <Image
            quality={75}
            placeholder="blur"
            layout="responsive"
            src={ImageUrl}
            alt="demoImage"
          />
        </div>
      </Flex>
      <hr className="mt-10 mb-10" />
    </div>
  );
};

export default ProjectsItemRight;
