import React, { useEffect, useState } from "react";
import axios from "axios";
import Partition from "../../components/Partition";
import ProjectCard from "../../components/ProjectCard";
import toast from "react-hot-toast";
import useAuthStore from "../../zustand/useAuth";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("all");
  const accessToken = useAuthStore((state) => state.accessToken);

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
        console.log(response.data.projects);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

    fetchProjects();
  }, []);

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
        >
          All
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "frontend"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
        >
          Fontend
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "fullstack"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
        >
          Full Stack
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "ai"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
        >
          Ai
        </button>
        <button
          className={`ease-in-out duration-100 hover:border-s-4 ${
            active === "blockchain"
              ? "bg-[#58629d] border-[#70e7d6]"
              : "bg-[#1f325e] border-white"
          }`}
        >
          Blockchain
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.length > 0 ? (
          projects.map((project) => (
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
