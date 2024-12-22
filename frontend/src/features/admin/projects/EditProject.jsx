import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import useProjectStore from "../../../zustand/useProject";
import Loading from "../../../components/Loading";

const EditProject = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const selectedProject = useProjectStore((state) => state.selectedProject);
  const [newData, setNewData] = useState({
    title: selectedProject?.title,
    category: selectedProject?.category,
    previewLink: selectedProject?.previewLink,
    githubLink: selectedProject?.githubLink,
    image: selectedProject?.image,
  });

  const navigate = useNavigate();
  const user = localStorage.getItem("admin");
  const accessToken = JSON.parse(user)?.accessToken;

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setNewData({ ...newData, image: e.target.result });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleUpdate = async () => {
    setLoading(true);
    if (
      newData?.title === "" ||
      newData?.category === "" ||
      newData?.previewLink === "" ||
      newData?.githubLink === "" ||
      newData?.image === ""
    ) {
      return toast.error("Please fill all the fields");
    }

    const formData = new FormData();
    formData.append("title", newData?.title);
    formData.append("category", newData?.category);
    formData.append("previewLink", newData?.previewLink);
    formData.append("githubLink", newData?.githubLink);
    formData.append("image", newData?.image);
    try {
      const response = await axios.put(
        `/dashboared/projects/edit/${selectedProject?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data?.error) throw new Error(response.data.error);

      toast.success("Project updated successfully");
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full bg-black opacity-60 flex flex-col items-center justify-center h-screen lg:h-full lg:py-4">
      <Link
        to="/"
        className="absolute top-2 lg:top-4 right-2 lg:right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200"
      >
        <AiOutlineClose />
      </Link>
      <div className="w-full md:w-[70%] lg:w-1/3 flex flex-col items-center gap-4 rounded-2xl border-gray-400 border-2 p-8 *:text-[18px]">
        <img
          src={selectedImage || newData?.image}
          alt="Selected"
          className="w-full h-40 object-cover"
          onClick={handleSelectImage}
        />
        <input
          type="text"
          value={newData?.title}
          placeholder="Enter name..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setNewData({ ...newData, title: e.target.value })}
        />
        <input
          type="text"
          value={newData?.githubLink}
          placeholder="Enter GitHub Link..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) =>
            setNewData({ ...newData, githubLink: e.target.value })
          }
        />
        <input
          type="text"
          value={newData?.previewLink}
          placeholder="Enter Live Preview Link..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) =>
            setNewData({ ...newData, previewLink: e.target.value })
          }
        />
        <label htmlFor="category" className="w-full">
          <select
            name="category"
            value={newData?.category}
            className="w-full border-2 border-white p-3 rounded-lg text-[18px]"
            onChange={(e) =>
              setNewData({ ...newData, category: e.target.value })
            }
          >
            <option value="frontend">Frontend</option>
            <option value="fullstack">Full Stack</option>
            <option value="ai">Ai</option>
            <option value="blockchain">Blockchain</option>
            <option value="others">others</option>
          </select>
        </label>
        <button
          className="w-full bg-[#58629d] mt-4 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out"
          onClick={handleUpdate}
        >
          {loading ? <Loading /> : "Update"}
        </button>
      </div>
    </div>
  );
};
export default EditProject;
