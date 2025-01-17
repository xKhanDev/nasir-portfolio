import React from "react";
import {
  About,
  Contact_Us,
  Experience,
  Hero,
  Markee,
  Navbar,
  Projects,
  Certificates,
  Techs,
} from "./features/constant";

const App = () => {
  return (
    <div className="text-white h-full selection:bg-[#70e7d6] selection:text-[#131313]">
      <Navbar />
      <div className="px-2 md:px-4 lg:px-12 flex flex-col gap-8">
        <Hero />
        <Markee />
        <About />
        <Techs />
        <Experience />
        <Projects />
        <Certificates />
        <Contact_Us />
      </div>
    </div>
  );
};

export default App;
