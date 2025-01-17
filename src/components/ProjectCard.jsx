import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ project }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative border-white border-2 rounded-xl card_img_bg">
      <div className="border-b-[#7f87c1] border-b-2 p-2">
        <img
          src={project?.image}
          className="w-full h-64 rounded-xl bg-cover object-cover"
          alt="Project Image"
          onLoad={() => setLoading(false)}
        />
        {loading && (
          <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center">
            <div className="w-16 h-16 border-t-2 border-b-2 border-cyan-300 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="w-full lg:h-56 flex justify-end flex-col gap-2 card_bg p-8 rounded-b-xl">
        <div className="w-full flex justify-between items-center *:capitalize">
          <h2 className="text-2xl font-medium">{project.title}</h2>
          <span className="text-lg">{project.date}</span>
        </div>
        <span className="text-lg">{project?.category}</span>
        <div className="w-full flex justify-between items-center">
          <a
            href={project?.githubLink}
            target="_blank"
            className="bg-[#131313] py-2 px-4 ease-in-out duration-100 hover:border-s-4 border-white"
          >
            Github
          </a>
          <a
            href={project?.demoLink}
            target="_blank"
            className="live flex justify-between items-center s_text"
          >
            Live <MdArrowOutward className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
