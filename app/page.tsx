import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-full items-center justify-center gap-32">
      <div className="text-left flex flex-col gap-28">
        <div>
          <h2>Hi all. I am</h2>
          <h1 className="text-6xl">Ilkay ALTINISIK</h1>
          <p className="text-[#4D5BCE] text-3xl">&#62; Front-end developer</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[#607B96]">// complete the game to continue</p>
          <p className="text-[#607B96]">
            // you can also see it on my Github page
          </p>
          <p>
            <a className="text-[#4D5BCE]">const</a>{" "}
            <a className="text-[#43D9AD]">githubLink</a> ={" "}
            <a className="text-[#E99287]">“https://github.com/example/url”</a>
          </p>
        </div>
      </div>
      <div className="w-[510px] h-[475px] bg-[#43D9AD]  relative ">
        <div className="bg-[#43D9AD] w-32 h-32 blur-[160px] absolute top-0 left-0 " />
        <div className="bg-[#43D9AD] w-32 h-32 blur-[80px] absolute top-12 left-12 " />
        <div className="bg-[#4D5BCE] w-32 h-32 blur-[80px] absolute bottom-0 right-0 " />
        <div className="bg-[#4D5BCE] w-32 h-32 blur-[160px] absolute bottom-12 right-12 " />
        <h1>GAME</h1>
      </div>
    </div>
  );
};

export default HomePage;
