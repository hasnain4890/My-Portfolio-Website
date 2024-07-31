import Reactimg from "../../public/React-logo.png";
import Nodeimg from "../../public/Node.png";
import Nextjsimg from "../../public/Nextjs.svg";
import Nextjs2 from "../../public/nestjsicon.svg";
import Tailwindimg from "../../public/tailwind.svg";
import materialimg from "../../public/material.svg";
import javascript from "../../public/javascript.svg";
import Html5 from "../../public/Html5.svg";
import wordpress from "../../public/wordpress.png";
import express from "../../public/expressjs-ar21.svg";
import docker from "../../public/docker.svg";
import nestjs from "../../public/nestjs.svg";
import redis from "../../public/redis.svg";
import typescript from "../../public/typescript.svg";
import mongodb from "../../public/mongodb.svg";
import Mysql from "../../public/mysql.svg";
import Prisma from "../../public/prisma.svg";
import git from "../../public/Git.svg";
import redux from "../../public/redux.svg";

export const NAV_BAR_CONTENT = [
  {
    id: 2,
    content: "About",
    pathName: "/#about",
  },
  {
    id: 3,
    content: "Skills",
    pathName: "/#skills",
  },
  {
    id: 4,
    content: "Portfolio",
    pathName: "/#portfolio",
  },
  {
    id: 5,
    content: "Experience",
    pathName: "/#experience",
  },
];

export const Frontendskills = [
  {
    id: 1,
    image: Reactimg,
    name: "React js",
  },
  {
    id: 2,
    image: Nextjsimg,
    name: "Next js",
  },
  {
    id: 3,
    image: javascript,
    name: "Vanilla JavaScript",
  },
  {
    id: 4,
    image: typescript,
    name: "TypeScript",
  },
  {
    id: 5,
    image: Tailwindimg,
    name: "Tailwind Css",
  },
  {
    id: 6,
    image: Html5,
    name: "HTML5",
  },
  {
    id: 7,
    image: wordpress,
    name: "Wordpress",
  },
  {
    id: 8,
    image: materialimg,
    name: "Material UI",
  },
  {
    id: 9,
    image: redux,
    name: "Redux toolkit",
  },
];
export const Backendskills = [
  {
    id: 1,
    image: Nodeimg,
    name: "Node js",
  },
  {
    id: 2,
    image: express,
    name: "Express js",
  },
  {
    id: 3,
    image: nestjs,
    name: "Nest js",
  },
  {
    id: 4,
    image: docker,
    name: "Docker",
  },
  {
    id: 5,
    image: redis,
    name: "Redis",
  },
  {
    id: 6,
    image: mongodb,
    name: "Mongo DB",
  },
  {
    id: 7,
    image: Mysql,
    name: "MySQL",
  },
  {
    id: 8,
    image: Prisma,
    name: "Prisma",
  },
  {
    id: 8,
    image: git,
    name: "Git",
  },
];
export const Otherskills = [
  {
    id: 1,
    image: "",
    name: "GIT",
  },
  {
    id: 2,
    image: "",
    name: "Headless CMS",
  },
  {
    id: 3,
    image: "",
    name: "MYSQL",
  },
  {
    id: 4,
    image: "",
    name: "Docker",
  },
  {
    id: 5,
    image: "",
    name: "AWS",
  },
];

export const Experiencedata = [
  {
    id: 1,
    date: "Aug 2022 - Nov 2022",
    link: "https://syntecx.com/",
    designation: "Front End Intern",
    companyName: "SyntecX",
    description: [
      {
        id: 1,
        para: "Developed and maintained front-end features using React.js, ensuring responsive and user-friendly interfaces.",
      },
      {
        id: 1,
        para: "Enhanced problem-solving skills by tackling data structures and algorithms (DSA) challenges, contributing to efficient coding practices.",
      },
      {
        id: 1,
        para: "Worked closely with senior developers, learning industry best practices and modern development techniques to ensure high-quality code.",
      },
    ],
    skills: [
      {
        id: 1,
        tech: Reactimg,
      },
      {
        id: 2,
        tech: Tailwindimg,
      },
      {
        id: 3,
        tech: typescript,
      },
      {
        id: 3,
        tech: redux,
      },
    ],
  },
  {
    id: 2,
    link: "https://www.texinity.com/",
    date: "Dec 2022 - July 2023",
    designation: "Associate Software Engineer",
    companyName: "Texinity Technologies",
    description: [
      {
        id: 1,
        para: "Developed dynamic web applications using React.js and Next.js, ensuring seamless performance and scalability.",
      },
      {
        id: 2,
        para: "Styled components efficiently with Tailwind CSS, resulting in consistent and responsive designs across the application.",
      },
      {
        id: 3,
        para: "Managed application state with Redux, optimizing data flow and improving the overall maintainability of the codebase.",
      },
    ],
    skills: [
      {
        id: 1,
        tech: Reactimg,
      },
      {
        id: 2,
        tech: Nextjs2,
      },
      {
        id: 3,
        tech: Tailwindimg,
      },
      {
        id: 4,
        tech: typescript,
      },
      {
        id: 5,
        tech: materialimg,
      },
    ],
  },
  {
    id: 3,
    link: "https://www.futurenostics.com/",
    date: "Aug 2023 - Present",
    designation: "Software Engineer",
    companyName: "Futurenostics",
    description: [
      {
        id: 1,
        para: "Built and maintained full-stack web applications using the MERN stack, enhancing both front-end and back-end functionality.",
      },
      {
        id: 2,
        para: "Utilized React and Next.js to create dynamic and responsive user interfaces, ensuring a seamless user experience.",
      },
      {
        id: 3,
        para: "Leveraged Docker for containerization, streamlining the development and deployment processes, and used Redux for efficient state management.",
      },
    ],
    skills: [
      {
        id: 1,
        tech: Reactimg,
      },
      {
        id: 2,
        tech: Nextjsimg,
      },
      {
        id: 3,
        tech: express,
      },
      {
        id: 4,
        tech: nestjs,
      },
      {
        id: 5,
        tech: docker,
      },
      {
        id: 6,
        tech: mongodb,
      },
      {
        id: 7,
        tech: git,
      },
    ],
  },
];
