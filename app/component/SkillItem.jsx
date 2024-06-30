import Link from "next/link";
import React from "react";

const SkillItem = ({ Icon, Name}) => {
  return (
    <div className="xl:w-[170px] w-[140px] h-[150px] xl:h-[150px] border-[1px] border-black dark:border-white rounded-lg cursor-pointer">
      <div className="text-black dark:text-white text-[70px] xl:ml-12 ml-8 mt-3">{Icon}</div>
      <h2 className="xl:text-[25px] text-[23px] text-black font-semibold dark:text-white text-center mt-2 select-none cursor-pointer">
        {Name}
      </h2>
    </div>
  );
};

export default SkillItem;
