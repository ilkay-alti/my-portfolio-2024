import Code from "@/components/Code/Code";
import React from "react";

const EducationPage = () => {
  const codeString = `private static void updateHuman(Education yalovaUniversity) {
    int entryYear = 2000;
    int graduationYear = 2002;
    String degree = "Bachelor of Science";

    int year = yalovaUniversity.getYear();
    if (year >= entryYear && year <= graduationYear) {
      yalovaUniversity.setDegree(degree);
    }
  }`;

  const educationData = [
    {
      school: "AnadoluUniversity",
      degree: "Bachelor of Science ",
      entryYear: "2021",
      graduationYear: "2023",
      description: `I have a bachelor's degree in Management Information Systems Engineering from Yalova University.`,
    },
    {
      school: "YalovaUniversity",
      degree: "Associate's Degree",
      entryYear: "2018",
      graduationYear: "2021",
      description: `I have a Master of Associate's degree in Computer Programming from Yalova University.`,
    },
  ];

  return (
    <div className="max-h-[calc(100vh-218px)] flex flex-col overflow-y-auto  scrollbar-thin scrollbar-webkit  items-center gap-20 py-[50px] ">
      {educationData.map((education, i) => {
        return <Code key={i} data={education} />;
      })}
    </div>
  );
};

export default EducationPage;
