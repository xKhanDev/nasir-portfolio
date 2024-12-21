import React from "react";

const Experiences = ({ experienceData }) => {
  return (
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title text-[25px] font-[600]">
        {experienceData?.title}
      </div>
      <div className="collapse-content">
        <div className="flex">
          <span className="text-[18px] font-[500]">
            {experienceData?.from}-{experienceData?.to}
          </span>
        </div>
        <p className="text-[18px] font-[200]">{experienceData?.description}</p>
      </div>
    </div>
  );
};

export default Experiences;
