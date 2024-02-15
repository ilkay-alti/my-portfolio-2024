import React, { FC } from "react";
interface WorkProps {
  data: {
    title: string;
    company: string;
    date: string;
    description: string;
  };
}
const Work: FC<WorkProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-between items-center text-[#607B96] max-w-[664px]">
        <div>
          <div className="font-bold text-lg text-[#5565E8]">{data.title}</div>
          <div className="text-[#607B96] text-sm">{data.company}</div>
        </div>
        <div className="text-lg">{data.date}</div>
      </div>
      <div className=" p-7 rounded-2xl bg-[#011221] w-[664px]">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Work;
