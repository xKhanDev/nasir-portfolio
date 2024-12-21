import React from "react";
import CardLoading from "./SmallSkeletonLoading";

const TechCard = ({ data }) => {
  return (
    <div className="rounded-lg border-white border-[1px] p-3 bg-[#1f325e]">
      <img
        src={data?.image}
        alt=""
        className="w-full h-32 bg-cover bg-center rounded-lg"
      />
      <span className="w-full bg-white h-[1px]"></span>
      <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold capitalize mt-4">
        {data?.name}
      </h3>
      <span className="hover:text-yellow-300">{data?.level}</span>
    </div>
  );
};

export default TechCard;
