import React from "react";
import { IoSend } from "react-icons/io5";
import Partition from "../../components/Partition";

const Contact_Us = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex flex-col items-center gap-4 mb-4" id="contact">
      <Partition name={"~/contact/get-in-touch"} />
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="w-full md:w-[70%] lg:w-1/2 flex flex-col gap-4 border-white border-2 p-8 rounded-xl"
      >
        <input
          type="text"
          placeholder="Enter Name..."
          className="input bg-transparent border-b-2 border-white"
        />
        <input
          type="email"
          placeholder="Enter Email..."
          className="input bg-transparent border-b-2 border-white"
        />
        <input
          type="text"
          placeholder="Enter Subject..."
          className="input bg-transparent border-b-2 border-white"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Your Message"
          className="bg-transparent border-2 border-white rounded-xl p-4 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 mt-4 mx-auto text-xl s_text bg-[#1f325e] py-2 px-4 rounded-xl hover:bg-[#70e7d6] hover:text-[#1f325e] ease-in-out duration-300"
        >
          Send <IoSend />
        </button>
      </form>
      <div className="mt-16">
        <span>All Right Reserved by safeer ullah @2024</span>
      </div>
    </div>
  );
};

export default Contact_Us;
