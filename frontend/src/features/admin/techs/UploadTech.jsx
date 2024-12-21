import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import Loading from "../../../components/Loading";
import useAuthStore from "../../../zustand/useAuth";

// /dashboared/techs/upload
const UploadTech = ({ setStatus }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    category: "",
    techImage: "",
    level: "",
  });
  const accessToken = useAuthStore((state) => state.accessToken);
  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = setSelectedImage(URL.createObjectURL(file));
      setInput({ ...input, techImage: file });
    };
    input.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!input.name || !input.category || !input.level || !input.techImage)
      return toast.error("Please fill all the fields");

    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("category", input.category);
      formData.append("level", input.level);
      formData.append("techImage", input.techImage);

      const response = await axios.post("/dashboared/techs/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data?.error) throw new Error(response.data.error);
      toast.success("Tech added successfully");
      setLoading(false);
      setStatus(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-black opacity-60 flex flex-col items-center justify-center">
      <span
        className="absolute top-4 right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200"
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
          placeholder="Enter name..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <label htmlFor="category" className="w-full">
          <select
            name="category"
            id="category"
            className="w-full border-2 border-white p-3 rounded-lg text-[18px]"
            onChange={(e) => setInput({ ...input, category: e.target.value })}
          >
            <option value="language">Language</option>
            <option value="framework">Framework</option>
            <option value="library">Library</option>
            <option value="tool">Tool</option>
            <option value="others">others</option>
          </select>
        </label>
        <div className="w-full flex items-center justify-between *:text-sm">
          <input
            type="radio"
            name="level"
            value="beginner"
            className="mr-2 radio border-white border-[2px]"
            checked={input.level === "beginner"}
            onChange={(e) => setInput({ ...input, level: e.target.value })}
          />
          <label htmlFor="beginner" className="mr-4">
            Beginner
          </label>
          <input
            type="radio"
            name="level"
            value="intermediate"
            className="mr-2 radio border-white border-[2px]"
            checked={input.level === "intermediate"}
            onChange={(e) => setInput({ ...input, level: e.target.value })}
          />
          <label htmlFor="intermediate" className="mr-4">
            Intermediate
          </label>
          <input
            type="radio"
            name="level"
            value="expert"
            className="mr-2 radio border-white border-[2px]"
            checked={input.level === "expert"}
            onChange={(e) => setInput({ ...input, level: e.target.value })}
          />
          <label htmlFor="expert" className="mr-4">
            Expert
          </label>
        </div>
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

export default UploadTech;
