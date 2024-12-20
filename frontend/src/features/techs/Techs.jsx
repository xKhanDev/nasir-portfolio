import React from "react";
import TechCard from "../../components/TechCard";
import Partition from "../../components/Partition";

const Techs = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <Partition name="~/techs/❤️" />
      <h1 className="block text-3xl font-[700]">Languages:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <TechCard />
        <TechCard />
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Framerworks:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Tools:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Others:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <TechCard />
        <TechCard />
        <TechCard />
      </div>
    </section>
  );
};

export default Techs;
