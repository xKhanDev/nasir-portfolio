import React, { useEffect, useState } from "react";
import axios from "axios";
import Partition from "../../components/Partition";
import ProjectCard from "../../components/ProjectCard";
import toast from "react-hot-toast";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState("all");
  const user = localStorage.getItem("admin");
  const accessToken = JSON.parse(user)?.accessToken;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "/dashboared/projects/",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProjects(response?.data.projects);
        setFilteredProjects(response?.data.projects);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

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

  return (
    <div className="w-full h-full flex flex-col gap-8">
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
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard project={project} key={project._id} />
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
