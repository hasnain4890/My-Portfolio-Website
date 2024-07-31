import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-32 bg-[#0f172c] border-b border-[#d21624]">
      <div className="flex justify-between m-auto">
        <div className="w-[40%]">
          <hr className="border-[#d21624] border"></hr>
        </div>
        <h1 className="text-4xl font-bold dk-dirrrty -mt-4 text-[#d21624]">
          Contact Me
        </h1>
        <div className="w-[40%]">
          <hr className="border-[#d21624] border"></hr>
        </div>
      </div>
      <div className="mt-20 flex justify-center gap-5 flex-wrap w-[80%] m-auto pb-12">
        <div className="h-16 w-96 bg-[#0b1120] text-gray-400 hover:text-white rounded-xl hover:bg-[#151c2f] duration-300 transition ease-in-out cursor-pointer flex items-center justify-center gap-4">
          <span>
            <MdOutlineMailOutline className="w-7 h-7" />
          </span>
          <span>hasnainahmad4890@gmail.com</span>
        </div>
        <a
          href="tel:+(92)-348 9074379"
          className="h-16 w-96 bg-[#0b1120] text-gray-400 hover:text-white rounded-xl hover:bg-[#151c2f] duration-300 transition ease-in-out cursor-pointer flex items-center justify-center gap-4"
        >
          <span>
            <IoCallOutline className="w-7 h-7" />
          </span>
          <span className="">+92 348 9074379</span>
        </a>
        <Link
          href="https://www.linkedin.com/in/hasnain-ahmad-a66456178/"
          target="_blank"
        >
          <div className="h-16 w-96 bg-[#0b1120] text-gray-400 hover:text-white rounded-xl hover:bg-[#151c2f] duration-300 transition ease-in-out cursor-pointer flex items-center justify-center gap-4">
            <span>
              <CiLinkedin className="w-7 h-7" />
            </span>
            <span className="">LinkedIn</span>
          </div>
        </Link>
        <Link href="https://github.com/hasnain4890" target="_blank">
          <div className="h-16 w-96 bg-[#0b1120] text-gray-400 hover:text-white rounded-xl hover:bg-[#151c2f] duration-300 transition ease-in-out cursor-pointer flex items-center justify-center gap-4">
            <span>
              <FaGithub className="w-7 h-7" />
            </span>
            <span>GitHub</span>
          </div>
        </Link>

        <div className="h-16 w-96 bg-[#0b1120] text-gray-400 hover:text-white hover:bg-[#151c2f] duration-300 transition ease-in-out cursor-pointer rounded-xl flex items-center justify-center gap-4">
          <FaLocationDot className="w-5 h-5" />

          <span>Islamabad,</span>
          <span>Pakistan</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
