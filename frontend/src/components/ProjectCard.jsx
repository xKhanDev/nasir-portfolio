import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { MdArrowOutward, MdOutlineDeleteSweep } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import useProjectStore from "../zustand/useProject";

const ProjectCard = ({ project }) => {
  const user = localStorage.getItem("admin");
  const setSelectedProject = useProjectStore(
    (state) => state.setSelectedProject
  );
  const accessToken = JSON.parse(user)?.accessToken;

  const navigate = useNavigate();
  const handleEdit = (project) => {
    setSelectedProject(project);
    navigate("/admin/project/edit");
  };

  const handleDelete = async (projectId) => {
    try {
      const response = await axios.delete(
        `/dashboared/projects/delete/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response?.data?.error) throw new Error(response?.data?.error);

      toast.success("Project deleted successfully");
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative border-white border-2 rounded-xl card_img_bg">
      {user && (
        <div className="dropdown dropdown-end absolute top-0 right-1">
          <div tabIndex={0} role="button" className="text-3xl">
            <BsThreeDots />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] shadow bg-[#1f325e] *:cursor-pointer"
          >
            <div
              className="font-semibold p-2 hover:bg-[#2e457b] rounded-lg"
              onClick={() => handleEdit(project)}
            >
              <span className="flex items-center gap-1 *:text-base">
                <CiEdit /> Edit
              </span>
            </div>
            <div className="font-semibold p-2 hover:bg-[#2e457b] rounded-lg">
              <span
                className="flex items-center gap-1 *:text-base"
                onClick={() => handleDelete(project?._id)}
              >
                <MdOutlineDeleteSweep /> Delete
              </span>
            </div>
          </ul>
        </div>
      )}
      <div className="border-b-[#7f87c1] border-b-2 p-2">
        {project?.image ? (
          <img
            src={project?.image}
            className="w-full h-64 rounded-xl bg-cover object-cover"
            alt="Project Image"
          />
        ) : (
          <div className="skeleton h-64 w-full"></div>
        )}
      </div>
      <div className="w-full lg:h-56 flex justify-end flex-col gap-2 card_bg p-8 rounded-b-xl">
        <div className="w-full flex justify-between items-center *:capitalize">
          <h2 className="text-2xl font-medium">{project.title}</h2>
          <span className="text-lg">
            {new Date(project?.createdAt).toLocaleDateString()}
          </span>
        </div>
        <span className="text-lg">{project?.category}</span>
        <div className="w-full flex justify-between items-center">
          <a
            href={project?.githubLink}
            target="_blank"
            className="bg-[#131313] py-2 px-4 ease-in-out duration-100 hover:border-s-4 border-white"
          >
            Github
          </a>
          <a
            href={project?.previewLink}
            target="_blank"
            className="live flex justify-between items-center s_text"
          >
            Live <MdArrowOutward className="arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
