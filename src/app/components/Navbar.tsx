import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./style.css";
import { NavbarProps } from "../interfaces";
import { NAV_BAR_CONTENT } from "../constant";

const Navbar: React.FC<NavbarProps> = ({
  setIsContentVisible,
  isContentVisible,
}) => {
  const [activeNavItem, setActiveNavItem] = useState<string>("");

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
    if (!isContentVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    setActiveNavItem(window.location.pathname);

    const handleResize = () => {
      setIsContentVisible(window.innerWidth > 767 ? false : isContentVisible);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isContentVisible, setIsContentVisible]);

  return (
    <div className="flex flex-row-reverse md:flex-row w-screen justify-end md:gap-20 md:justify-between p-5 px-5 md:px-20 bg-dark-blue">
      <div
        className="absolute size-96 left-[35%] z-10 -mt-36 rounded-full bg-[#5eb0ef] opacity-50 md:block hidden"
        style={{ filter: "blur(100px)" }}
      ></div>
      <div className="m-auto cursor-pointer relative z-20 h-8">
        <Link href="/">
          <div>
            <h1 className="dk-dirrrty text-3xl cursor-pointer font-bold tracking-wider text-[#d21624]">
              HASNAIN
            </h1>
          </div>
        </Link>
      </div>
      <div
        onClick={() => {
          document.body.style.overflow = "auto";
        }}
        className={`absolute right-0 top-0 !z-20 m-auto flex w-screen flex-col md:relative md:z-0 md:flex md:flex-row items-center md:gap-6 md:space-x-3 lg:justify-center ${
          isContentVisible
            ? "m-0 h-screen w-screen bg-[#030B15] backdrop-blur-sm duration-200 ease-in-out pt-20"
            : "hidden opacity-0 md:opacity-100"
        }`}
      >
        {NAV_BAR_CONTENT?.map(({ id, content, pathName }: any) => (
          <Link key={id} href={pathName}>
            <p
              key={id}
              className={`nav-item-animation whitespace-nowrap uppercase work-sans-regular  ${
                activeNavItem === pathName && "active"
              } flex cursor-pointer items-center justify-center py-1 pt-4 align-middle font-semibold text-primary-green transition-transform md:mb-2 md:py-0 md:pt-2 md:text-sm md:font-normal  ${
                isContentVisible && "text-light text-xl my-4"
              } `}
            >
              {content}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex gap-2 items-center relative z-30">
        <div className="hidden md:block">
          <Link href="/services">
            <button
              aria-label="Our Services"
              className="bg-[#1e293b] text-sm font-light px-5 cursor-pointer whitespace-nowrap rounded-lg p-3 transition duration-300 ease-in-out text-center flex hover:bg-gray-600 items-center justify-center"
              id="nav-button"
            >
              Our Services
            </button>
          </Link>
        </div>
        <div className="!z-50 relative flex cursor-pointer justify-end md:hidden">
          <button
            aria-label="hamburger"
            className="duration-600  rounded-md p-3 transition ease-in-out hover:border-gray-500 hover:bg-gray-500 hover:bg-opacity-30 hover:bg-clip-padding"
            onClick={toggleContentVisibility}
          >
            <div
              className={`hamburger-icon ${isContentVisible ? "toggled" : ""}`}
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
