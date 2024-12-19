import React, { useState } from "react";
import { FaRegHandPointDown, FaAward, FaLaptopCode } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineContactMail } from "react-icons/md";
import { TbHomeFilled } from "react-icons/tb";
import { BiSolidUser } from "react-icons/bi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 border-b-[1px] text-white md:px-4 lg:px-12 bg-[#050736]/60 backdrop-blur-md shadow-lg">
      {/* This is a navbar for web */}
      <div className="w-full h-full flex justify-between items-center px-2">
        <span className="logo md:text-2xl lg:text-2xl lg:font-bold">
          xKhanDev
        </span>
        <button
          className="-mt-10 text-2xl lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaRegHandPointDown title="Scroll Down" />
        </button>
        <ul className="hidden w-[45%] lg:flex justify-between items-center *:text-center *:font-semibold *:flex *:items-center *:gap-[5px]">
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px] *:text-[20px] *:font-[500]">
            <TbHomeFilled /> home
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <BiSolidUser /> About
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <FaLaptopCode /> techs
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <FaAward /> experience
          </li>
          <li className="uppercase hover:border-b-2 border-[#70e7d6] ease-in-out duration-100 hover:-translate-y-[2px]">
            <MdOutlineContactMail /> contact us
          </li>
        </ul>
        <button className="font-semibold py-2 px-6 lg:px-8 bg-transparent hover:bg-[#1f325e] ease-in-out duration-300 border-white border-[1px] rounded-3xl">
          Admin
        </button>
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
        <ul className="w-full h-screen flex flex-col items-center mt-20 gap-4 *:text-center md:*:text-3xl md:*:py-4">
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            home
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            about
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            techs
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            experience
          </li>
          <li className="w-full h-14 md:h-20 content-center uppercase hover:bg-[#252766] ease-in-out duration-300">
            contact us
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
