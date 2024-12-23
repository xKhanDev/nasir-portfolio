import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../../../components/Loading";

const UploadCertificate = ({ setStatus }) => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    certificateImage: "",
  });

  const user = localStorage.getItem("admin");
  const accessToken = JSON.parse(user)?.accessToken;

  const handleSelectImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(URL.createObjectURL(file));
        setInputs((prev) => ({ ...prev, certificateImage: file }));
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("certificateImage", inputs.certificateImage);

    try {
      const res = await axios.post("/dashboared/certificate/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.data?.error) throw new Error(res.data.error);
      toast.success("Certificate added successfully");
      setStatus(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full bg-black opacity-60 flex flex-col items-center justify-center">
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
          placeholder="Enter title..."
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <textarea
          value={inputs.description}
          cols="30"
          rows="10"
          placeholder="Enter Description..."
          className="w-full bg-transparent border-[1px] border-white rounded-xl p-4 focus:outline-none"
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
        ></textarea>
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

export default UploadCertificate;
