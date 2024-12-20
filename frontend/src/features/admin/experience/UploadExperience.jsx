import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const UploadExperience = () => {
  return (
    <div className="w-full h-full bg-black opacity-60 flex flex-col items-center justify-center">
      <span className="absolute top-4 right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200">
        <AiOutlineClose />
      </span>
      <div className="w-full md:w-[70%] lg:w-1/3 flex flex-col items-center gap-4 rounded-2xl border-gray-400 border-2 p-8 *:text-[18px]">
        <input
          type="text"
          placeholder="Enter Title..."
          className="w-full input bg-transparent border-b-2 border-white"
        />
        <textarea
          name=""
          cols="30"
          rows="10"
          placeholder="Enter Description..."
          className="w-full bg-transparent border-[1px] border-white rounded-xl p-4 focus:outline-none"
        ></textarea>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter Start Date..."
            className="w-full input bg-transparent border-b-2 border-white"
          />
          <input
            type="text"
            placeholder="Enter End Date..."
            className="w-full input bg-transparent border-b-2 border-white"
          />
        </div>
        <button className="w-full bg-[#58629d] mt-4 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadExperience;
