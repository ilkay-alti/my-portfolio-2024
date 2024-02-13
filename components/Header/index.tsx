"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderComponent = () => {
  const menuData = [
    {
      title: "_hello",
      href: "/",
    },
    {
      title: "_about-me",
      href: "/about",
    },
    {
      title: "_projects",
      href: "/projects",
    },
  ];

  const pathname = usePathname();

  return (
    <div className=" text-[#607B96] border-b border-[#1E2D3D] h-14 flex items-center rounded-t-3xl">
      <div className="flex  px-6 items-center h-full w-1/4 border-r border-[#1E2D3D] ">
        ilkay-altinisik
      </div>
      <div className="flex w-3/4 h-14 items-center justify-between">
        <div className="flex h-14">
          {menuData.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.href}
                className={
                  "flex items-center justify-center h-full px-8 border-r border-[#1E2D3D] " +
                  (pathname === item.href &&
                    "text-white border-b-[3px] border-b-[#FEA55F]")
                }
              >
                {item.title}
              </Link>
            );
          })}

          <div className="h-full  w-14" />
        </div>
        <Link
          href={"/contact"}
          className={
            "flex items-center justify-center h-full px-8 border-l border-[#1E2D3D] " +
            (pathname === "/contact" &&
              "text-white border-b-[3px] border-b-[#FEA55F]")
          }
        >
          _contact-me
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
