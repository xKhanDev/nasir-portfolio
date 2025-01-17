import React, { useState } from "react";
import { FaRegHandPointDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 border-b-[1px] text-white md:px-4 lg:px-12 bg-[#050736]/60 backdrop-blur-md shadow-lg">
      {/* This is a navbar for web */}
      <div className="w-full h-full flex justify-between items-center px-2">
        <span className="md:text-2xl lg:text-2xl lg:font-black cursor-pointer uppercase hover:text-[#70e7d6] ease-in-out duration-100">
          xKhanDev
        </span>
        <button
          className="-mt-10 text-2xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaRegHandPointDown title="Scroll Down" />
        </button>
        {/* Web Navbar */}
        <ul className="hidden w-[50%] lg:flex justify-between items-center *:text-center">
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="/" className="text-[18px] font-medium">
              home
            </a>
          </li>

          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="#about" className="text-[18px] font-medium">
              about
            </a>
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="#techs" className="text-[18px] font-medium">
              techs
            </a>
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="#experience" className="text-[18px] font-medium">
              experience
            </a>
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="#certificates" className="text-[18px] font-medium">
              Certificate
            </a>
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <a href="#project" className="text-[18px] font-medium">
              project
            </a>
          </li>
        </ul>

        <a
          href="https://drive.google.com/file/d/1D1qVaL1C3hcBIn2tjpqBGA6Gs59AnopP/view?usp=drive_link"
          target="_blank"
          className="font-semibold py-2 px-6 lg:px-8 bg-transparent hover:bg-[#1f325e] ease-in-out duration-300 border-white border-[1px] rounded-3xl"
        >
          resume
        </a>
      </div>

      {/* Mobile Menu and Tablet Menu */}
      <div
        className={`${
          open
            ? "flex w-full h-[80vh] z-40 bg-[#050736] translate-y-0 ease-in duration-300 absolute top-0 left-0"
            : "translate-y-[-150%] ease-out duration-300"
        }`}
      >
        <span
          onClick={() => setOpen(false)}
          className={`ease-in-out duration-300 absolute top-5 right-5 cursor-pointer size-10 flex items-center justify-center text-2xl z-50 bg-white text-[#050736] rounded-full p-3`}
        >
          <IoClose />
        </span>
        <ul className="w-full h-screen flex flex-col items-center mt-24 *:text-center md:*:text-3xl md:*:py-4">
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="/">home</a>
          </li>

          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="#about">about</a>
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="#techs">techs</a>
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="#experience">experience</a>
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="#certificate">Certificate</a>
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            <a href="#project">project</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
