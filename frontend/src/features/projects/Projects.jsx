import React from "react";
import Partition from "../../components/Partition";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <Partition name={"~/work/projects"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
