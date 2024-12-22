import React, { useEffect } from "react";
import axios from "axios";
import Partition from "../../components/Partition";
import Experiences from "../../components/Experiences";

const Experience = () => {
  const [experiences, setExperiences] = React.useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get("/dashboared/experience/", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.data.error) throw new Error(res.data.error);

        setExperiences(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExperiences();
  }, []);
  return (
    <section id="experience">
      <Partition name={"~work/experience"} />
      {experiences?.length === 0 ? (
        <span className="text-[20px]">No experience found</span>
      ) : (
        experiences.map((experience) => {
          return (
            <Experiences key={experience?._id} experienceData={experience} />
          );
        })
      )}
    </section>
  );
};

export default Experience;
