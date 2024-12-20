import React from "react";
import Partition from "../../components/Partition";

const About = () => {
  return (
    <div className="w-full h-full md:h-screen lg:h-[85vh] flex flex-col justify-between gap-4 mt-4">
      <div className="w-full flex items-center justify-between gap-4">
        <span className="text-[30px] font-[700]">~/about/me</span>
      </div>
      <div className="flex lg:items-center md:gap-4 lg:flex-row lg:justify-between flex-col-reverse">
        <div className="w-full lg:w-1/2 font-[500] text-2xl text-pretty">
          <p>
            Hi, I'm Safeer Ullah Khan, an undergraduate Software Engineering
            student and a passionate fullstack web developer. I specialize in
            creating beautiful, SEO-optimized, and dynamic websites that are
            both authentic and functional. I have the skills to turn any design
            concept into a stunning reality.
          </p>
          <div className="mt-8 flex items-center gap-4 *:text-xl mb-6">
            <a
              href="https://github.com/xKhanDev"
              target="_blank"
              className="border-white border-2 py-2 px-4 rounded-xl bg-[#131313] hover:bg-[#1f325e] hover:text-white ease-in-out duration-300"
            >
              Leave a ⭐
            </a>
            <a
              href="https://drive.google.com/file/d/1D1qVaL1C3hcBIn2tjpqBGA6Gs59AnopP/view?usp=drive_link"
              target="_blank"
              className="border-white border-2 py-2 px-4 rounded-xl"
            >
              Download CV
            </a>
          </div>
        </div>
        <img src="/my.png" alt="my image" className="md:h-[60vh] lg:h-[75vh]" />
      </div>
    </div>
  );
};

export default About;
