import React, { useState } from "react";

const Portfolio = () => {
  const [show, setShow] = useState<any>({});

  const handleMouseEnter = (index: any) => {
    setShow((prev: any) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index: any) => {
    setShow((prev: any) => ({ ...prev, [index]: false }));
  };

  return (
    <div
      id="portfolio"
      style={{ backgroundImage: "url(/Grid.svg)" }}
      className="w-full pb-32 py-9 bg-cover bg-no-repeat"
    >
      <div className="w-[85%] m-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl text-[#d21624] sm:text-5xl font-bold tracking-wider dk-dirrrty">
          PORTFOLIO
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[90%]">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="relative flex gap-4 flex-col bg-[#0f172c] h-80 transition duration-300 ease-out cursor-pointer rounded-md items-center justify-center"
              key={index}
            >
              {/* Background Image Container */}
              <div
                style={{ backgroundImage: "url(/image1.jpg)" }}
                className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-500 ease-in-out rounded-md ${
                  show[index] ? "opacity-20" : "opacity-100"
                }`}
              />
              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                <h1 className="text-3xl font-bold text-[#d21624] text-center">
                  NNT-BOT
                </h1>
                <h1 className="text-3xl font-bold text-[#d21624] text-center">
                  This is Some Title
                </h1>
                <button className="p-3 px-4 rounded-xl bg-[#d21624]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="p-3 w-36 bg-[#d21624] rounded-md mt-12 text-white hover:bg-transparent border border-[#d21624] transition duration-300 ease-in-out">
          View More
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
