import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../../../components/Loading";
import useAuthStore from "../../../zustand/useAuth";

const UploadExperience = ({ setStatus }) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    from: "",
    to: "",
  });

  const accessToken = useAuthStore((state) => state.accessToken);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!inputs.title || !inputs.description || !inputs.from || !inputs.to) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(
        "/dashboared/experience/upload",
        inputs,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data?.error) throw new Error(response.data.error);

      toast.success("Experience added successfully");
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
    <div className="w-full h-screen lg:h-full bg-black opacity-60 flex flex-col items-center justify-center">
      <span
        className="absolute top-2 lg:top-4 right-2 lg:right-4 text-black bg-white z-20 rounded-full p-2 text-2xl cursor-pointer hover:bg-[#58629d] hover:text-white ease-in-out duration-200"
        onClick={() => setStatus(false)}
      >
        <AiOutlineClose />
      </span>
      <div className="mt-4 w-full md:w-[70%] lg:w-1/3 flex flex-col items-center gap-4 rounded-2xl border-gray-400 border-2 p-8 *:text-[18px]">
        <input
          type="text"
          placeholder="Enter Title..."
          value={inputs.title}
          className="w-full input bg-transparent border-b-2 border-white"
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <textarea
          value={inputs.description}
          name=""
          cols="30"
          rows="10"
          placeholder="Enter Description..."
          className="w-full bg-transparent border-[1px] border-white rounded-xl p-4 focus:outline-none"
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
        ></textarea>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputs.from}
            placeholder="Enter Start Date..."
            className="w-full input bg-transparent border-b-2 border-white"
            onChange={(e) => setInputs({ ...inputs, from: e.target.value })}
          />
          <input
            type="text"
            value={inputs.to}
            placeholder="Enter End Date..."
            className="w-full input bg-transparent border-b-2 border-white"
            onChange={(e) => setInputs({ ...inputs, to: e.target.value })}
          />
        </div>
        <button
          className="w-full bg-[#58629d] mt-4 h-12 rounded-lg transition hover:bg-white hover:text-[#58629d] duration-300 ease-in-out"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <Loading /> : "Add Experience"}
        </button>
      </div>
    </div>
  );
};

export default UploadExperience;
