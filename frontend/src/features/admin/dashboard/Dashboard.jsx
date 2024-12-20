import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-[#111111] p-8 flex flex-col gap-6 overflow-hidden h-screen">
      <div className="w-full flex items-center justify-between gap-4">
        <span className="text-[30px] font-[700]">~/admin/dashboard</span>
        <span className="w-full bg-gray-300 h-[1px]"></span>
      </div>
      <div className="flex justify-between p-4 border-[1px] border-white">
        <button className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100">
          Upload Project
        </button>
        <button className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100">
          Upload Tech
        </button>
        <button className="p-2 hover:bg-gray-800 hover:border-b-2 hover:border-[#70e7d6] ease-in-out duration-100">
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
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">
                john.doe@example.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Inquiry</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">
                jane.smith@example.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Feedback</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
