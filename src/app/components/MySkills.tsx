import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Backendskills, Frontendskills } from "../constant";

const MySkills: React.FC = () => {
  const defaultSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const rtlSettings = {
    ...defaultSettings,
    rtl: true, // This will make the slider move from right to left
  };

  return (
    <div id="skills" className="w-full pb-28 py-9">
      <style>{`
        .slick-slide { padding: 0 15px; }  
        .slider-container .slick-list { margin: 0 -15px; }  
      `}</style>
      <div className="flex items-center justify-center w-[85%] m-auto flex-col gap-5">
        <h1 className="text-5xl font-bold dk-dirrrty tracking-wider">
          My Skills
        </h1>

        <div className="slider-container w-full md:w-[80%] mt-9">
          <h1 className="text-2xl sm:text-5xl font-bold dk-dirrrty text-[#d21624] mb-3">
            Front End Technologies
          </h1>

          <Slider {...defaultSettings}>
            {Frontendskills.map(({ id, image, name }) => {
              return (
                <div
                  className="!flex !gap-5 overflow-hidden flex-col ml-2 bg-[#0f172c] h-48 hover:bg-[#d21624] transition duration-300 ease-out cursor-pointer rounded-xl !items-center !justify-center"
                  key={id}
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt="React image"
                  />
                  <h4>{name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="slider-container w-full md:w-[80%] mt-12">
          <h1 className="text-2xl sm:text-5xl font-bold dk-dirrrty text-[#d21624] mb-3">
            Back End Technologies
          </h1>
          <Slider {...rtlSettings}>
            {Backendskills.map(({ id, name, image }) => {
              return (
                <div
                  className="!flex !gap-5 overflow-hidden flex-col ml-2 bg-[#0f172c] h-48 hover:bg-[#d21624] transition duration-300 ease-out cursor-pointer rounded-xl !items-center !justify-center"
                  key={id}
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt="React image"
                  />

                  <h4>{name}</h4>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
