import React, { useState } from "react";

const CertificateCard = ({ data, index }) => {
  const [loaded, setLoaded] = useState(false);

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
        {!loaded && (
          <div className="skeleton h-1/2 w-full my-2 lg:w-1/2 lg:h-1/2 object-cover bg-cover bg-center rounded-lg"></div>
        )}
        <img
          src={data?.image}
          alt="certificate image"
          className="w-full my-2 lg:w-1/2 lg:h-1/2 object-cover bg-cover bg-center rounded-lg"
          onLoad={() => setLoaded(true)}
        />
      </div>
      <span className="w-full bg-gray-300 h-[1px]"></span>
    </>
  );
};

export default CertificateCard;
