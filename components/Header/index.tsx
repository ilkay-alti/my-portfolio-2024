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
    <div className=" text-[#607B96] border-b border-[#1E2D3D] h-14 flex items-center justify-between rounded-t-3xl">
      <div className="flex h-full  px-6">
        <div className="flex items-center h-full w-[311px] border-r border-[#1E2D3D] ">
          ilkay-altinisik
        </div>
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
  );
};

export default HeaderComponent;
