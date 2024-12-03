import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import arrow from "../assets/arrow.png";
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI for frontend development using React.",
    links: { site: "#", github: "#" },
  },
  {
    img: project2,
    title: "Project #2",
    description: "A fullstack application built with Node.js and MongoDB.",
    links: { site: "#", github: "#" },
  },
  {
    img: project3,
    title: "Project #3",
    description: "A responsive website designed with modern CSS.",
    links: { site: "#", github: "#" },
  },
  {
    img: project4,
    title: "Project #4",
    description: "An e-commerce platform with various features.",
    links: { site: "#", github: "#" },
  },
  {
    img: project5,
    title: "Project #5",
    description: "A mobile-friendly application using React Native.",
    links: { site: "#", github: "#" },
  },
  {
    img: project6,
    title: "Project #6",
    description: "A data visualization project using D3.js and other libraries.",
    links: { site: "#", github: "#" },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
  className="max-w-[1200px] mx-auto p-4 grid gap-6 grid-cols-1 md:grid-cols-8 md:py-20"
  id="portfolio"
>
  {/* Left Section */}
  <div className="col-span-3 flex flex-col items-center space-y-6 md:space-y-8">
    <p className="text-primary-color font-bold text-2xl md:text-4xl -skew-y-6">
      Select Project
    </p>
    <img
      src={arrow}
      className="w-12 md:w-16 animate-bounce"
      alt="Arrow pointing to the project list"
    />
    <ul className="flex flex-wrap justify-center md:flex-col gap-4 text-lg md:text-xl">
      {projects.map((project, index) => (
        <li
          key={index}
          onClick={() => setCurrentProject(index)}
          className={`cursor-pointer text-light-text px-4 py-2 rounded-lg transition-all duration-300 hover:bg-secondary-color ${
            currentProject === index
              ? "bg-primary-color text-white font-bold"
              : ""
          }`}
        >
          {project.title}
        </li>
      ))}
    </ul>
  </div>

  {/* Right Section */}
  <div className="col-span-5 glass rounded-lg shadow-card overflow-hidden">
    <div className="w-full aspect-video bg-gray-700">
      <img
        src={projects[currentProject].img}
        alt={projects[currentProject].title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 space-y-4">
      <h3 className="text-xl md:text-2xl text-light-text font-bold">
        {projects[currentProject].title}
      </h3>
      <p className="text-light-text text-sm md:text-base">
        {projects[currentProject].description}
      </p>
      <div className="flex space-x-4">
        <a
          href={projects[currentProject].links.site}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-primary-color text-white rounded-lg hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-primary-color transition duration-300"
        >
          View Site
        </a>
        <a
          href={projects[currentProject].links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-secondary-color text-light-text rounded-lg hover:bg-opacity-80 transition duration-300"
        >
          <AiFillGithub className="text-xl" />
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Portfolio;
