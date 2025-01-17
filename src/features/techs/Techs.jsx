import React from "react";
import TechCard from "../../components/TechCard";
import Partition from "../../components/Partition";

const Techs = () => {
  const techs = [
    {
      id: 1,
      name: "HTML",
      category: "language",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      id: 2,
      name: "CSS",
      category: "language",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 3,
      name: "JavaScript",
      category: "language",
      image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    },
    {
      id: 4,
      name: "React",
      category: "framework",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 5,
      name: "Tailwind",
      category: "framework",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 6,
      name: "Bootstrap",
      category: "framework",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 7,
      name: "Node",
      category: "language",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 8,
      name: "MongoDB",
      category: "database",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 9,
      name: "Express",
      category: "framework",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 10,
      name: "Git",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 11,
      name: "GitHub",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 12,
      name: "Netlify",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 13,
      name: "Vercel",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 14,
      name: "Figma",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      id: 15,
      name: "Adobe XD",
      category: "tool",
      image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
  ];

  return (
    <section className="w-full flex flex-col gap-4" id="techs">
      <Partition name="~/techs/❤️" />
      <h1 className="block text-3xl font-[700]">Languages:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          ?.filter((tech) => tech?.category === "language")
          .map((tech) => {
            return <TechCard key={tech.id} data={tech} />;
          })}
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Framerworks:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          .filter((tech) => tech?.category === ("framework" || "library"))
          .map((tech) => {
            return <TechCard key={tech.id} data={tech} />;
          })}
      </div>
      <h1 className="block text-3xl font-[700] md:mt-6">Tools:</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {techs
          .filter((tech) => tech?.category === "tool")
          .map((tech) => {
            return <TechCard key={tech.id} data={tech} />;
          })}
      </div>
      {techs.filter((tech) => tech.category === "other").length > 0 && (
        <>
          <h1 className="block text-3xl font-[700] md:mt-6">Others:</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
            {techs
              .filter((tech) => tech?.category === "other")
              .map((tech) => {
                return <TechCard key={tech.id} data={tech} />;
              })}
          </div>
        </>
      )}
    </section>
  );
};

export default Techs;
