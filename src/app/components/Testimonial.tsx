import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="mt-20 w-full flex flex-col md:flex-row gap-10 md:gap-0">
      <div className="w-[90%] md:w-[50%] flex flex-col pl-0 md:pl-20 gap-5 m-auto">
        <h1 className="sm:text-3xl text-2xl md:text-4xl font-bold dk-dirrrty tracking-wider">
          TESTIMONIALS
        </h1>
        <div className="flex gap-3 flex-col">
          <p className="w-28 border-2 h-1 border-[#d21624] mt-2"></p>
          <p className="font-normal text-base text-green-50  work-sans-regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            nostrum facilis repellat animi. Rem voluptatem mollitia unde
            repellendus facere natus nam rerum voluptatum eius itaque, aperiam
            dolore laborum laudantium voluptate.
          </p>
          <div className="flex flex-col gap-1 mt-4">
            <h2 className="text-xl font-bold">Josep omini</h2>
            <div className="flex gap-2">
              <p className="w-7 border-2 h-1 border-[#d21624] mt-2"></p>

              <p>CEO, Omisoft</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] m-auto md:w-[50%] h-full">
        <Image
          src="/Hasnainimage.jpg"
          alt="Hasnian Ahmad image"
          width={300}
          height={300}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Testimonial;
