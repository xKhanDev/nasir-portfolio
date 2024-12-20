import React from "react";
import CardLoading from "./SmallSkeletonLoading";

const TechCard = () => {
  return (
    <div className="rounded-lg border-white border-[1px] p-3 bg-[#1f325e]">
      <img src="/pr.svg" alt="" className="w-full rounded-lg" />
      <span className="w-full bg-white h-[1px]"></span>
      <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold capitalize mt-4">
        Javascript
      </h3>
      <span className="hover:text-yellow-300">Expert</span>
    </div>
  );
};

export default TechCard;
