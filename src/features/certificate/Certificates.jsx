import React from "react";
import Partition from "../../components/Partition";
import CertificateCard from "../../components/CertificateCard";

const Certificates = () => {
  const certificates = [
    {
      title: "Certificate 1",
      description: "Description 1",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Certificate 2",
      description: "Description 2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      title: "Certificate 3",
      description: "Description 3",
      image: "https://via.placeholder.com/300x200",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4" id="certificates">
      <Partition name="~/certificates/❤️" />
      <div className="flex flex-col gap-4">
        {certificates?.length === 0 ? (
          <h1 className="block text-3xl font-[700] text-pretty mt-6 text-[#70e7d6]">
            No certificates found
          </h1>
        ) : (
          certificates.map((certificate, index) => {
            return (
              <CertificateCard key={index} data={certificate} index={index} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Certificates;
