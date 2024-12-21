import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { UploadTech, UploadProject, UploadExperience } from "../constant";
import useAuthStore from "../../../zustand/useAuth";

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [openSection, setOpenSection] = useState("");
  const accessToken = useAuthStore((state) => state.accessToken);

  const handleOpenSection = (section) => {
    setOpenSection(section);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("/form/messages", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setMessages(response?.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [accessToken]);

  return (
    <>
      {openSection === "project" && (
        <UploadProject status={openSection} setStatus={handleOpenSection} />
      )}
      {openSection === "tech" && (
        <UploadTech status={openSection} setStatus={handleOpenSection} />
      )}
      {openSection === "experience" && (
        <UploadExperience status={openSection} setStatus={handleOpenSection} />
      )}
      <div
        className={`bg-[#111111] p-8 flex-col gap-6 overflow-hidden h-screen ${
          openSection ? "hidden" : "flex"
        }`}
      >
        <Link to="/" className="text-3xl">
          <AiFillHome className=" hover:text-[#70e7d6] cursor-pointer ease-in-out duration-300" />
        </Link>
        <div className="w-full flex items-center justify-between gap-4">
          <span className="text-[30px] font-[700]">~/admin/dashboard</span>
          <span className="w-full bg-gray-300 h-[1px]"></span>
        </div>
        <div className="flex justify-between p-4 border-[1px] border-white">
          <button
            className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100"
            onClick={() => handleOpenSection("project")}
          >
            Upload Project
          </button>
          <button
            className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100"
            onClick={() => handleOpenSection("tech")}
          >
            Upload Tech
          </button>
          <button
            className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100"
            onClick={() => handleOpenSection("experience")}
          >
            Upload Experience
          </button>
        </div>
        <div className="overflow-x-auto">
          <h1 className="text-3xl font-[700] my-2">All Messages</h1>
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-[#70e7d6]">
              <tr>
                <th
                  scope="col"
                  className="font-[700] px-6 py-3 text-left text-xs text-gray-900 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-[700] text-gray-900 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-[700] text-gray-900 uppercase tracking-wider"
                >
                  Subject
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-[700] text-gray-900 uppercase tracking-wider"
                >
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {message.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {message.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {message.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {message.message}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">No messages</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
