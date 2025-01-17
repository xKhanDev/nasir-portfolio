import React, { useState } from "react";

const CertificateCard = ({ data, index }) => {
  const [loading, setLoading] = useState(true);

  const swap = index % 2 !== 0;

  return (
    <>
      <h1 className="block text-3xl font-[700] text-pretty mt-6 text-[#70e7d6]">
        {data?.title}
      </h1>
      <div
        className={`w-full flex flex-col-reverse lg:flex-row ${
          swap && "lg:flex-row-reverse"
        } justify-between items-center`}
      >
        <p className={`text-xl font-medium text-gray-300 ${swap && "ml-4"}`}>
          {data?.description}
        </p>
        <div className="relative w-full h-64">
          <img
            src={data?.image}
            alt="certificate image"
            className="w-full my-2 lg:w-1/2 lg:h-1/2 object-cover bg-cover bg-center rounded-lg"
            onLoad={() => setLoading(false)}
          />
          {loading && (
            <div className="absolute top-0 left-0 w-full h-64 flex items-center justify-center">
              <div className="w-16 h-16 border-t-2 border-b-2 border-cyan-300 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
      <span className="w-full bg-gray-300 h-[1px]"></span>
    </>
  );
};

export default CertificateCard;
