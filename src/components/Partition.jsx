import React from "react";

const Partition = ({ name }) => {
  return (
    <div className="w-full flex items-center justify-between gap-4 mt-16">
      <span className="text-[30px] font-[700]">{name}</span>
      <span className="w-full bg-gray-300 h-[1px]"></span>
    </div>
  );
};

export default Partition;
