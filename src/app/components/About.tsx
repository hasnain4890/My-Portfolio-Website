import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#0f172c] mt-28">
      <div className="w-[95%] sm:w-[85%] flex flex-col gap-3 m-auto">
        <h1 className="text-3xl ml-4 sm:ml-0 sm:text-4xl font-bold mt-20 dk-dirrrty">
          About.
        </h1>
        <div className="flex gap-2 w-[90%] m-auto flex-col">
          <p className="w-20 border-2 h-1 border-[rgb(210,22,36)] mt-2"></p>
          <p className="w-[90%] text-md font-light work-sans-regular">
            Welcome! I'm <span className="text-[#d21624]">Hasnain Ahmad</span>,
            a dedicated{" "}
            <span className="text-[#d21624]">MERN stack developer</span> with
            two years of experience crafting dynamic and responsive web
            applications. My journey in web development has been fueled by a
            passion for creating seamless digital experiences using
            <span className="text-[#d21624]"> MongoDB, Express.js, React</span>,
            and <span className="text-[#d21624]">Node.js</span>.
          </p>
          <p className="w-[90%] text-md font-normal work-sans-regular">
            Over the past two years, I have worked on a variety of projects,
            from <span className="text-[#d21624]">e-commerce platforms</span> to
            innovative <span className="text-[#d21624]">AI-driven systems</span>
            . My commitment to clean code and innovative solutions has allowed
            me to adapt to different development environments and challenges
            effectively.
          </p>{" "}
          <p className="w-[90%] text-md font-normal mb-20 work-sans-regular">
            I believe in the power of{" "}
            <span className="text-[#d21624]">collaboration</span> and{" "}
            <span className="text-[#d21624]">continuous learning</span> to stay
            ahead in the ever-evolving world of web development. If you're
            looking for a developer who is passionate about creating impactful
            digital experiences, let's connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
