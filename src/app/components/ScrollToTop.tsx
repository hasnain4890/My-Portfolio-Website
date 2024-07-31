"use client";
import React from "react";
import { useEffect, useState } from "react";
import GoUpIcon from "../../../public/svg/GoUpIcon";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-2 sm:right-10 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="cursor-pointer right-0 absolute bottom-1 transition duration-300 ease-in-out hover:bg-opacity-80 animate-bounce"
        >
          <span className="mt-[6px] border-black">
            <GoUpIcon />
          </span>
        </div>
      )}
    </div>
  );
}
