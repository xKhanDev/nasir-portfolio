import React, { useEffect } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaW } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { TbBrandFiverr } from "react-icons/tb";

const Hero = () => {
  const [text, setText] = React.useState("Hello");
  // generating hello in 7 languages
  const hello = [
    "Bonjour",
    "Hola",
    "Olá",
    "Namaste",
    "Ciao",
    "Aloha",
    "Salamaleikum",
  ];

  useEffect(() => {
    let i = 0;
    const setHello = () => {
      setTimeout(() => {
        setText(hello[i]);
        i = (i + 1) % hello.length;
        setHello();
      }, 2000);
    };
    setHello();
  }, [setText]);

  return (
    <section
      className="w-full flex justify-between gap-8 flex-col md:flex-row mt-16"
      id="home"
    >
      <div className="w-full flex flex-col gap-4 lg:w-1/2 *:text-[60px] *:font-[600]">
        <span className="text-line-height">{text}</span>
        <h1 className="text-line-height">I'm Safeer Ullah</h1>
        <div className="w-1/2 flex justify-between items-center *:text-4xl *:cursor-pointer *:p-1">
          <a href="https://github.com/xKhanDev" target="_blank">
            <FaGithub className="hover:bg-gray-600 ease-in-out duration-100 hover:rotate-[360deg]" />
          </a>
          <a href="https://www.linkedin.com/in/safeer-khan-x/" target="_blank">
            <FaLinkedin className="hover:bg-blue-500 ease-in-out duration-100 hover:rotate-[360deg]" />
          </a>
          <a href="mailto:safeerkhanxofficialgmail.com" target="_blank">
            <HiOutlineMail className="hover:bg-gray-600 ease-in-out duration-100 hover:rotate-[360deg]" />
          </a>
          <a href="https://www.fiverr.com/s/m5VaW0Z" target="_blank">
            <TbBrandFiverr className="hover:bg-green-500 ease-in-out duration-100 hover:rotate-[360deg]" />
          </a>
          <a href="https://wa.me/message/ZVUHTB6BCUX2N1" target="_blank">
            <FaWhatsapp className="hover:bg-green-500 ease-in-out duration-100 hover:rotate-[360deg]" />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-start lg:w-1/2">
        <p className="text-balance text-[25px] font-[400]">
          A full-stack Developer, squashing bugs and crafting stunning websites.
          Turning client dreams into pixel-perfect reality!
        </p>
      </div>
    </section>
  );
};

export default Hero;
