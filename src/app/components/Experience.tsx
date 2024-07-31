import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Experiencedata } from "../constant";
import Link from "next/link";

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Make sure to parse the index correctly as a number
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting && index !== null) {
            setActiveIndex(parseInt(index));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <div id="experience" className="w-full pb-20 bg-[#0f172c]">
      <div className="w-[90%] sm:w-[80%] flex flex-col m-auto">
        <h1 className="font-bold sm:text-4xl text-3xl md:text-5xl -mt-6 dk-dirrrty tracking-wider">
          Experience
        </h1>
        <div className="flex flex-col mt-10 sm:mt-20">
          {Experiencedata.map((data, index) => {
            return (
              <div
                ref={sectionRefs.current[index]}
                data-index={index}
                key={index}
                className="mt-12 w-full sm:w-[85%] md:w-[70%] flex flex-col md:flex-row m-auto items-start gap-5"
              >
                <div className="sm:w-[60%] w-[80%] md:w-[30%] flex flex-col gap-4 items-end justify-end px-0 md:px-7">
                  <div className="flex gap-7">
                    <div className="w-48 h-10 bg-[#0b1120] flex items-center justify-center rounded-md">
                      {data.date}
                    </div>
                    <div
                      className={`sm:w-8 sm:h-8 w-6 h-6 rounded-full -mr-3 transition-colors duration-700 ease-in-out ${
                        activeIndex == index
                          ? "bg-[#d21624] cardshadow"
                          : "bg-white"
                      }`}
                    ></div>
                  </div>
                  <div
                    className={`items-end justify-end h-72 w-1 border-2 md:flex hidden ${
                      activeIndex == index
                        ? "border-[#d21624] animate-fade-down"
                        : "border-white"
                    }`}
                  ></div>
                </div>
                <div className="md:w-[70%] w-full flex flex-col">
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`font-bold text-xl md:text-3xl work-sans-bold transition-colors duration-700 ease-in-out ${
                        activeIndex == index
                          ? "text-[#d21624] animate-fade-down"
                          : "text-white"
                      }`}
                    >
                      {data.designation}
                    </h3>
                    <Link href={data.link} target="_blank">
                      <h4 className="text:md sm:text-xl font-medium hover:text-red-600 transition duration-300 ease-in-out w-fit border-b-2">
                        {data.companyName}
                      </h4>
                    </Link>
                    <div className="flex flex-col gap-3">
                      {data.description.map((para) => {
                        return (
                          <div className="flex gap-2">
                            <div className="mt-2">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                            <p className="text-md font-light text-gray-400 work-sans-regular">
                              {para.para}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <h2 className="text-xl font-medium">Technologies</h2>
                    <div className="flex gap-6 -mt-2 bg-[#2c3c71] w-fit px-6 rounded-md py-2">
                      {data.skills.map(({ tech }) => {
                        return (
                          <div className="flex gap-2 items-center">
                            <Image
                              alt="Image"
                              src={tech}
                              width={30}
                              height={30}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
