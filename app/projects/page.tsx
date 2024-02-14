"use client";
import { Card } from "@/components/Card/Card";
import { Folder } from "@/components/Folder/Folder";
import Image from "next/image";
import { useState } from "react";
import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";

const ProjectData = [
  {
    name: "Project 1",
    subject: "_ui-animations",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    techStack: ["React"],
    img: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.google.com",
  },
  {
    name: "Project 2",
    subject: "_ui-animations",

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techStack: ["Angular", "CSS", "TypeScript"],
    img: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.com",
  },
  {
    name: "Project 3",
    subject: "_ui-animations",

    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    techStack: ["Vue", "JavaScript", "SCSS"],
    img: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.example.org",
  },
];

const technologies = [
  { title: "React", icon: <FaReact /> },
  { title: "Angular", icon: <FaHtml5 /> },
  { title: "Vue", icon: <FaCss3 /> },
];

const ProjectPage = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([
    technologies[0].title,
    technologies[1].title,
    technologies[2].title,
  ]);

  const handleCheckboxChange = (title: string) => {
    if (selectedTechnologies.includes(title)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((tech) => tech !== title)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, title]);
    }
  };

  const filteredProjects = ProjectData.filter((project) =>
    selectedTechnologies.some((tech) => project.techStack.includes(tech))
  );

  console.log("Selected Technologies:", selectedTechnologies);
  console.log("Filtered Projects:", filteredProjects);
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-1/4 h-full border-r border-[#1E2D3D]">
        <div className="p-[22px] flex flex-col gap-3">
          {technologies.map((data, i) => (
            <div key={i} className="flex items-center group">
              <input
                type="checkbox"
                checked={selectedTechnologies.includes(data.title)}
                onChange={() => handleCheckboxChange(data.title)}
                id={data.title}
                className="peer w-[18px] h-[18px] px-[3px] py-[5px] border-[1px] cursor-pointer shrink-0 appearance-none checked:bg-[#607B96] checked:bg-input-check bg-no-repeat bg-center group-hover:border-2 border-[#607B96]"
              />
              <label
                htmlFor={data.title}
                className="flex pl-6 pr-2 cursor-pointer text-[#273e53] peer-checked:text-[#607B96]"
              >
                {data.icon}
              </label>
              <label
                htmlFor={data.title}
                className="flex cursor-pointer text-[#607B96] peer-checked:text-white"
              >
                {data.title}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex h-[44px] border-b border-[#1E2D3D] ">
          <div className="flex px-[14px] items-center gap-11 border-[#1E2D3D] border-r h-full">
            <label className="text-[#607B96]">
              {selectedTechnologies.map((project) => project).join("; ") ||
                "Nothing Selected"}
            </label>
            <Image src="/close-icon.svg" alt="1" width={18} height={18} />
          </div>
        </div>
        <div className="max-h-[calc(100vh-224px)]   flex justify-center p-14  overflow-y-auto scrollbar-thin scrollbar-webkit  ">
          <div className="h-full grid grid-cols-2 gap-20">
            {filteredProjects.map((project, i) => (
              <Card key={i} data={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
