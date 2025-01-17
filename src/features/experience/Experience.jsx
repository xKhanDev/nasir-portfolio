import React, { useEffect, useState } from "react";
import axios from "axios";
import Partition from "../../components/Partition";
import Experiences from "../../components/Experiences";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      from: "2022",
      to: "present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    },
    {
      id: 2,
      title: "System Developer",
      from: "2022",
      to: "present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    },
    {
      id: 3,
      title: "Backend Developer",
      from: "2022",
      to: "present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.",
    },
  ];
  return (
    <section id="experience">
      <Partition name={"~work/experience"} />
      {experiences?.length === 0 ? (
        <span className="text-[20px]">No experience found</span>
      ) : (
        experiences?.map((experience, index) => {
          return <Experiences key={index} experienceData={experience} />;
        })
      )}
    </section>
  );
};

export default Experience;
