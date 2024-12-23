import React from "react";
import SmallSkeletonLoading from "../SmallSkeletonLoading";

const TechsLoading = () => {
  return (
    <div className="w-full flex gap-4 flex-wrap">
      <SmallSkeletonLoading />
      <SmallSkeletonLoading />
      <SmallSkeletonLoading />
      <SmallSkeletonLoading />
    </div>
  );
};

export default TechsLoading;
