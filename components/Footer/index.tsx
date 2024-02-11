import Link from "next/link";
import React from "react";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const FooterComponent = () => {
  const footerData = [
    { title: "twitter", href: "/about-me" },
    { title: "linkedin", href: "/blog" },
  ];

  return (
    <div className=" text-[#607B96] border-t border-[#1E2D3D] h-14 flex items-center justify-between rounded-b-3xl">
      <div className="flex h-full  px-6">
        <div className="flex items-center h-full pr-6 border-r border-[#1E2D3D] ">
          find me in :
        </div>
        {footerData.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.href}
              className={
                "flex items-center justify-center h-full px-8 border-r border-[#1E2D3D] group/edit "
              }
            >
              {item.title === "twitter" ? (
                <TiSocialTwitter className="h-6 w-6 text-[#607B96] group-hover/edit:text-white" />
              ) : (
                <TiSocialLinkedin className="h-6 w-6  text-[#607B96] group-hover/edit:text-white" />
              )}
            </Link>
          );
        })}

        <div className="h-full  w-14" />
      </div>
      <Link
        href={"/github"}
        className={
          "flex items-center justify-center h-full px-8 border-l border-[#1E2D3D] group/edit2 gap-3"
        }
      >
        <span className="flex items-center group-hover/edit2:text-white">
          @ilkay-alti
        </span>
        <FaGithub className="h-6 w-6  text-[#607B96] group-hover/edit2:text-white" />
      </Link>
    </div>
  );
};

export default FooterComponent;
