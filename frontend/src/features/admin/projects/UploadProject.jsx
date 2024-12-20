import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const UploadProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = setSelectedImage(URL.createObjectURL(file));
    };
    input.click();
  };
  return (
    <div className="w-full bg-black opacity-60 flex flex-col items-center justify-center h-screen lg:h-full lg:py-4">
      <span className="absolute top-2 lg:top-4 right-2 lg:right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200">
        <AiOutlineClose />
      </span>
      <div className="w-full md:w-[70%] lg:w-1/3 flex flex-col items-center gap-4 rounded-2xl border-gray-400 border-2 p-8 *:text-[18px]">
        <span
          className="w-full h-40 border-dashed border-2 p-4 flex justify-center items-center cursor-pointer"
          onClick={handleSelectImage}
        >
          Select Image
        </span>
        <input
          type="text"
          placeholder="Enter name..."
          className="w-full input bg-transparent border-b-2 border-white"
        />
        <input
          type="text"
          placeholder="Enter GitHub Link..."
          className="w-full input bg-transparent border-b-2 border-white"
        />
        <input
          type="text"
          placeholder="Enter Live Preview Link..."
          className="w-full input bg-transparent border-b-2 border-white"
        />
        <label htmlFor="category" className="w-full">
          <select
            name="category"
            className="w-full border-2 border-white p-3 rounded-lg text-[18px]"
          >
            <option value="category1">category1</option>
            <option value="category2">category2</option>
            <option value="category3">category3</option>
          </select>
        </label>
        <button className="w-full bg-[#58629d] mt-4 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadProject;
