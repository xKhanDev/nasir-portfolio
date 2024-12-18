import React from "react";

const TechCard = () => {
  return (
    <div className="w-[20%] flex flex-col justify-center rounded-lg border-white border-[1px] p-4">
      <img src="/pr.svg" alt="" className="w-full my-3" />
      <span className="w-full bg-white h-[1px]"></span>
      <h3 className="text-3xl font-semibold capitalize mt-4">Javascript</h3>
      <span className="hover:text-yellow-300">Expert</span>
    </div>
  );
};

export default TechCard;
