import React, { useState } from "react";
import { FaRegHandPointDown } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full h-16 bg-[#050736]">
      <div className="w-full h-full flex justify-between items-center  px-2">
        <span className="logo">xKhanDev</span>
        <button className="-mt-10 text-2xl" onClick={() => setOpen(!open)}>
          <FaRegHandPointDown title="Scroll Down" />
        </button>
        <button>Admin</button>
      </div>
      <div
        className={`${
          open
            ? "flex w-full h-[80vh] z-40 bg-[#050736] ease-in-out duration-300 absolute top-0 left-0"
            : "hidden"
        }`}
      >
        <span
          onClick={() => setOpen(false)}
          className={`absolute top-5 right-5 cursor-pointer size-10 flex items-center justify-center text-2xl z-50 bg-white text-[#050736] rounded-full p-3`}
        >
          X
        </span>
        <ul className="w-full h-screen flex flex-col mt-28 items-center *:text-center">
          <li className="w-full h-10 py-2 px-4 capitalize hover:bg-[#252766] ease-in-out duration-300">
            HOME
          </li>
          <li className="w-full h-10 py-2 px-4 capitalize hover:bg-[#252766] ease-in-out duration-300">
            EXPERIENCE
          </li>
          <li className="w-full h-10 py-2 px-4 capitalize hover:bg-[#252766] ease-in-out duration-300">
            TECHS
          </li>
          <li className="w-full h-10 py-2 px-4 capitalize hover:bg-[#252766] ease-in-out duration-300">
            CONTACT US
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
