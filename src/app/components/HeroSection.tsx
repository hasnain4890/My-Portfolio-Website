import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="py-12 w-[90%] m-auto flex mt-20">
      <div className="left-0 md:block hidden absolute pointer-events-none select-none -mt-20">
        <Image
          src="/Gridherotwo.webp"
          alt="Hero Section Image"
          width={3840}
          height={1806}
          loading="eager"
        />
      </div>
      <div className="w-[90%] sm:w-[50%] h-full flex flex-col gap-5 justify-center ml-10 sm:ml-20">
        <h1 className="text-2xl md:text-4xl font-bold animate-fade-down work-sans-bold">
          {"I'M  "}
          <span className="text-[#d21624] text-5xl dk-dirrrty pl-2">
            Hasnain Ahmad
          </span>
        </h1>
        <TypeAnimation
          className="font-bold dk-dirrrty"
          sequence={[
            "Mern Stack Developer",
            1000,
            "React Developer",
            1000,
            "Node js Developer",
            1000,
          ]}
          speed={20}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />

        <button className="border-0.5 text-sm font-light border-[#d21624] text-[#d21624] rounded-md bg-[#1e293b] hover:border-transparent transition duration-300 ease-in-out p-2 w-36">
          Contact
        </button>
      </div>
      <div className="w-[50%] relative z-20 -mt-20 md:block hidden">
        <Image
          src="/Hasnainimage-removebg.png"
          alt="Hasnian Ahmad image"
          width={400}
          height={400}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
