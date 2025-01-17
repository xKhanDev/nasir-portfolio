import React, { useEffect, useState } from "react";
import Partition from "../../components/Partition";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      date: "2021 - 2025",
      githubLink: "",
      demoLink: "",
      description: "Description for Project 1",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e3631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "frontend",
    },
    {
      id: 2,
      title: "Project 2",
      date: "2021 - 2025",
      githubLink: "",
      demoLink: "",
      description: "Description for Project 2",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e3631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Project 3",
      date: "2021 - 2025",
      githubLink: "",
      demoLink: "",
      description: "Description for Project 3",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e3631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "backend",
    },
    {
      id: 4,
      title: "Project 4",
      date: "2021 - 2025",
      githubLink: "",
      demoLink: "",
      description: "Description for Project 4",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e3631?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category: "frontend",
    },
  ];
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState("all");

  const handleFilter = (filter) => {
    setActive(filter);
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project?.category === filter
      );
      setFilteredProjects(filteredProjects);
    }
  };

  useEffect(() => {
    handleFilter("all");
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-8" id="project">
      <Partition name={"~/work/projects"} />
      <div className="no_scroll overflow-x-scroll w-full flex items-center gap-4 *:py-2 *:px-4">
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "all"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "frontend"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
          onClick={() => handleFilter("frontend")}
        >
          Fontend
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "fullstack"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
          onClick={() => handleFilter("fullstack")}
        >
          Full Stack
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "ai"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
          onClick={() => handleFilter("ai")}
        >
          Ai
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "blockchain"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
          onClick={() => handleFilter("blockchain")}
        >
          Blockchain
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects?.length > 0 ? (
          filteredProjects?.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))
        ) : (
          <p className="text-2xl font-semibold text-center">
            No projects found
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
