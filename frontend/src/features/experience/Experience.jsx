import React from "react";
import Partition from "../../components/Partition";
import { IoMdArrowDropright } from "react-icons/io";
import Experiences from "../../components/Experiences";

const Experience = () => {
  const name = "Freelance";
  const year = "2021-Present";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias ut voluptatem dolore quo excepturi saepe ullam sit labore voluptatum veniam!";
  return (
    <section id="experience">
      <Partition name={"~work/experience"} />
      <Experiences name={name} year={year} description={description} />
      <Experiences name={name} year={year} description={description} />
      <Experiences name={name} year={year} description={description} />
    </section>
  );
};

export default Experience;
