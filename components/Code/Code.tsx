import React, { FC } from "react";

interface CodeProps {
  data: {
    school: string;
    degree: string;
    graduationYear: string;
    entryYear: string;
    description: string;
  };
}

const Code: FC<CodeProps> = ({ data }) => {
  return (
    <div className="flex flex-col  text-[#607B96] max-w-[664px] gap-4">
      <a className="font-normal">// {data.description}</a>
      <pre className="flex flex-col  ">
        <code>
          <span className="text-[#E99287]">private </span>
          <span className="text-red-500">static void</span>
          <span className="text-[#43D9AD]"> updateHuman</span>(
          <span className="text-purple-500">Education</span>
          <span className="text-[#FEA55F]"> {data.school}</span>) {"{"}
          <br />
        </code>
        <code>
          &nbsp;&nbsp;<span className="text-[#E99287]">int </span>
          <span className="text-green-500">entryYear </span>=
          <span className="text-[#FEA55F]"> {data.entryYear}</span>;
        </code>
        <code>
          &nbsp;&nbsp;<span className="text-[#E99287]">int </span>
          <span className="text-green-500">graduationYear </span>=
          <span className="text-[#FEA55F]"> {data.graduationYear}</span>;
        </code>
        <code>
          &nbsp;&nbsp;<span className="text-[#E99287]">String </span>
          <span className="text-green-500">degree</span>= "
          <span className="text-[#FEA55F]">{data.degree}</span>";
        </code>
        <br />
        <code>
          &nbsp;&nbsp;<span className="text-[#E99287]">int </span>
          <span className="text-green-500">year</span> =
          <span className="text-purple-500"> {data.school}</span>.getYear();
        </code>
        <br />

        <code>
          &nbsp;&nbsp;<span className="text-cyan-500">if </span>(
          <span className="text-green-500">year</span> &gt;={" "}
          <span className="text-green-500">entryYear</span>
          &amp;&amp; <span className="text-green-500">year</span> &lt;={" "}
          <span className="text-green-500">graduationYear</span>) {"{"}
        </code>
        <code>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-purple-500">{data.school}</span>
          .setDegree(<span className="text-green-500">degree</span>);
        </code>
        <code>
          &nbsp;&nbsp;&nbsp;<span className="text-[#E99287]">{`}`}</span>
        </code>
        <code>
          &nbsp;<span className="text-[#E99287]">{`}`}</span>
        </code>
      </pre>
    </div>
  );
};

export default Code;
