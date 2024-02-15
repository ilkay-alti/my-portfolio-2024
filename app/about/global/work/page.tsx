import Work from "@/components/work/Work";
import React from "react";

const workData = [
  {
    title: "Freelance Developer and Designer",
    company: "GoldLight",
    date: "Jan 2021 - Present",
    description: `I am a freelance professional undertaking graphic design and software
    development projects tailored to meet client needs on various
    freelance platforms. As a full-stack developer, I initiate the design
    and carry out both front-end and back-end developments for web-based
    applications. In my role as a graphic designer, I create unique and
    impactful designs to fulfill client brand identity and visual design
    requirements. Focused on customer satisfaction, I leverage project
    management, communication, and time management skills. I strive to
    deliver up-to-date and user-friendly solutions in my projects by
    staying abreast of technology trends.`,
  },
  {
    title: "Intern",
    company: "AdWorld Inc.",
    date: "Jan 2021 - Feb 2021",
    description: `I have worked with departments across the company, 
    including marketing and project management, in developing new ideas,
    initiatives, products and services.Social media managment, web design 
    and development processes, Search engine optimization, advertising
    managment intership.`,
  },
  {
    title: "Computer Laboratory Technician",
    company: "Yalova University",
    date: "Jan 2020 - May 2020",
    description: `I gained experience in maintaining, repairing and updating
    computer labs to ensure their equipment is properly cleaned and their computers 
    are safe. Tables in databases checked and data integrity not verified.
    I ve searched extensively for ideas on how it improves performance and productivity.
    Helped management identify workflow issues and students problems and find solutions.
    I gained experience in the maintenance, repair, update, backup, partitioning procedures and 
    security standards applied to ensure the proper cleanliness and security of the school s servers.`,
  },
];
const WorkPage = () => {
  return (
    <div className="max-h-[calc(100vh-218px)] flex flex-col overflow-y-auto  scrollbar-thin scrollbar-webkit  items-center gap-20 py-[50px] ">
      {workData.map((work, i) => {
        return <Work key={i} data={work} />;
      })}
    </div>
  );
};

export default WorkPage;
