import React, { useEffect, useState } from "react";
import axios from "axios";
import Partition from "../../components/Partition";
import CertificateCard from "../../components/CertificateCard";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await axios.get("/dashboared/certificate/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.data;
        if (data.error) throw new Error(data.error);
        setCertificates(data.certificates);
        console.log(data.certificates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCertificates();
  }, []);
  return (
    <div className="w-full flex flex-col gap-4" id="certificates">
      <Partition name="~/certificates/❤️" />
      <div className="flex flex-col gap-4">
        {certificates.length === 0 ? (
          <h1 className="block text-3xl font-[700] text-pretty mt-6 text-[#70e7d6]">
            No certificates found
          </h1>
        ) : (
          certificates.map((certificate, index) => {
            return (
              <CertificateCard
                key={certificate._id}
                data={certificate}
                index={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Certificates;
