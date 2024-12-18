import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = () => {
  return (
    <div className="w-full lg:w-1/2 border-white border-2 rounded-xl card_img_bg">
      <div className="border-b-[#7f87c1] border-b-2 w-full h-full p-8">
        <img src="/pr.svg" className="w-full h-full" alt="" />
      </div>
      <div className="w-full flex flex-col gap-2 card_bg p-8 rounded-b-xl">
        <div className="w-full flex justify-between items-center *:capitalize">
          <h2 className="text-2xl font-medium">project name</h2>
          <span className="text-lg">time</span>
        </div>
        <span className="text-lg">category</span>
        <div className="w-full flex justify-between items-center">
          <button className="bg-[#131313] py-2 px-4 ease-in-out duration-100 hover:border-s-4 border-white">
            Github
          </button>
          <button className="flex justify-between items-center s_text hover:scale-x-110 ease-in-out duration-100">
            Live <MdArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
