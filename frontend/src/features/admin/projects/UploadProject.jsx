import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../../../components/Loading";

const UploadProject = ({ setStatus }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    githubLink: "",
    previewLink: "",
    category: "",
    projectImage: "",
  });

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.value = inputs.projectImage;
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = setSelectedImage(URL.createObjectURL(file));
      setInputs({ ...inputs, projectImage: file });
    };
    input.click();
  };

  const user = localStorage.getItem("admin");
  const accessToken = JSON.parse(user)?.accessToken;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !inputs.title ||
      !inputs.githubLink ||
      !inputs.previewLink ||
      !inputs.category ||
      !inputs.projectImage
    ) {
      return toast.error("Please fill all the fields");
    }

    try {
      const formData = new FormData();
      formData.append("title", inputs.title);
      formData.append("githubLink", inputs.githubLink);
      formData.append("previewLink", inputs.previewLink);
      formData.append("category", inputs.category);
      formData.append("projectImage", inputs.projectImage);

      const response = await axios.post(
        "/dashboared/projects/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data?.error) throw new Error(response.data.error);
      toast.success("Project added successfully");
      setLoading(false);
      setStatus(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-black opacity-60 flex flex-col items-center justify-center h-screen lg:h-full lg:py-4">
      <span
        className="absolute top-2 lg:top-4 right-2 lg:right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200"
        onClick={() => setStatus(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="w-full md:w-[70%] lg:w-1/3 flex flex-col items-center gap-4 rounded-2xl border-gray-400 border-2 p-8 *:text-[18px]">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-40 object-cover"
          />
        ) : (
          <span
            className="w-full h-40 border-dashed border-2 p-4 flex justify-center items-center cursor-pointer"
            onClick={handleSelectImage}
          >
            Select Image
          </span>
        )}
        <input
          type="text"
          value={inputs.title}
          placeholder="Enter name..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <input
          type="text"
          value={inputs.githubLink}
          placeholder="Enter GitHub Link..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setInputs({ ...inputs, githubLink: e.target.value })}
        />
        <input
          type="text"
          value={inputs.previewLink}
          placeholder="Enter Live Preview Link..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) =>
            setInputs({ ...inputs, previewLink: e.target.value })
          }
        />
        <label htmlFor="category" className="w-full">
          <select
            name="category"
            value={inputs.category}
            className="w-full border-2 border-white p-3 rounded-lg text-[18px]"
            onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
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
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loading /> : "Upload"}
        </button>
      </div>
    </div>
  );
};

export default UploadProject;
