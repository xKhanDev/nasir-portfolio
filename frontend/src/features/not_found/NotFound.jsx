import React from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img src="/not_found.svg" alt="Not Found" className="w-full lg:w-1/2" />
      <button
        type="submit"
        className="flex items-center gap-2 mt-4 mx-auto text-xl s_text bg-[#1f325e] py-2 px-4 rounded-xl hover:bg-[#70e7d6] hover:text-[#1f325e] ease-in-out duration-300"
        onClick={() => Navigate("/")}
      >
        Home <IoReturnDownBack />
      </button>
    </div>
  );
};

export default NotFound;
