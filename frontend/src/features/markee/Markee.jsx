import React from "react";

const Markee = () => {
  return (
    <div className="w-full h-32 mt-16">
      <marquee
        behavior="scroll"
        direction="left"
        className="w-full h-1/2 text-2xl rotate-[1deg] bg-[#1f325e] flex justify-center items-center z-10"
      >
        💻<span className="font-semibold">Hey Buddy!</span> 🚀 I’m a{" "}
        <span className="font-semibold">Bug-Smasher</span> 🐛 & Code-Crafter 🎉,
        ready to make your project a{" "}
        <span className="font-semibold">Cross-Compatible Masterpiece ✨</span>.
        Need a Fix? 🔥 <span className="font-bold">I’m Your Pick!</span> 💪
      </marquee>
    </div>
  );
};

export default Markee;
