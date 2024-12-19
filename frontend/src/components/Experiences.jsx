import React from "react";

const Experiences = ({ name, year, description }) => {
  return (
    <div className="collapse collapse-arrow">
      <input type="radio" name="my-accordion-1" defaultChecked />
      <div className="collapse-title text-[25px] font-[600]">{name}</div>
      <div className="collapse-content">
        <span className="text-[18px] font-[500]">{year}</span>
        <p className="text-[18px] font-[200]">{description}</p>
      </div>
    </div>
  );
};

export default Experiences;
