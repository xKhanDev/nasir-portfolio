import React, { useEffect, useState } from "react";
import axios from "axios";
import TechCard from "../../components/TechCard";
import Partition from "../../components/Partition";

const Techs = () => {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    const fetchTechs = async () => {
      try {
        const response = await axios.get("/dashboared/techs/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.data;
        if (data.error) throw new Error(data.error);
        setTechs(data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTechs();
  }, []);

  return (
    <section className="w-full flex flex-col gap-4" id="techs">
      <Partition name="~/techs/❤️" />
      <h1 className="block text-3xl font-[700]">Languages:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          .filter((tech) => tech?.category === "language")
          .map((tech) => {
            return <TechCard key={tech._id} data={tech} />;
          })}
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Framerworks:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          .filter((tech) => tech?.category === ("framework" || "library"))
          .map((tech) => {
            return <TechCard key={tech._id} data={tech} />;
          })}
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Tools:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          .filter((tech) => tech?.category === "tool")
          .map((tech) => {
            return <TechCard key={tech._id} data={tech} />;
          })}
      </div>
      {techs.filter((tech) => tech.category === "other").length > 0 && (
        <>
          <h1 className="block text-3xl font-[700] md:mt-6">Others:</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {techs
              .filter((tech) => tech?.category === "other")
              .map((tech) => {
                return <TechCard key={tech._id} data={tech} />;
              })}
          </div>
        </>
      )}
    </section>
  );
};

export default Techs;
