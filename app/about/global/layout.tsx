"use client";
import { Folder } from "@/components/Folder/Folder";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { FaFolderClosed } from "react-icons/fa6";

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const nameData = [
  {
    pathname: "/about/global",
    data: "Introduction",
  },
  {
    pathname: "/about/global/work",
    data: "Work Experience",
  },
  {
    pathname: "/about/global/education",
    data: "Education",
  },
];

const contactsData = [
  {
    title: "ilkayalti@hotmail.com",
    href: "ilkayalti@hotmail.com",
    icon: "/mailIcon.svg",
  },
  {
    title: "+905555555555",
    href: "905555555555",
    icon: "/phoneIcon.svg",
  },
];

const personelİnfoData = [
  {
    title: "introduction",
    href: "/about/global",
    icon: <FaFolderClosed className="text-[#E99287]" />,
  },
  {
    title: "work-experience",
    href: "/about/global/work",
    icon: <FaFolderClosed className="text-[#43D9AD]" />,
  },
  {
    title: "education",
    href: "/about/global/education",
    icon: <FaFolderClosed />,
  },
];

const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex h-full">
        <div className="flex flex-col w-[276px] h-full  border-r border-[#1E2D3D]">
          <Folder folderTitle="personal-info" image="down">
            <div className="p-[22px] flex flex-col gap-3">
              {personelİnfoData.map((data, i) => {
                return (
                  <Link
                    key={i}
                    href={data.href}
                    className="flex gap-2 text-[#607B96] group"
                  >
                    {data.icon}
                    <label
                      className={`group-hover:text-white hover:cursor-pointer ${
                        (pathname === data.href ||
                          pathname.startsWith(data.href + "/*")) &&
                        "text-white "
                      }`}
                    >
                      {data.title}
                    </label>
                  </Link>
                );
              })}
            </div>
          </Folder>
          <Folder folderTitle="contacts" image="down" intent={"doubleBorder"}>
            <div className="p-[22px] flex flex-col gap-3">
              {contactsData.map((data, i) => {
                return (
                  <Link
                    key={i}
                    href={data.href}
                    className="flex gap-2 text-[#607B96] group"
                  >
                    <Image
                      src={data.icon}
                      alt={i.toString()}
                      height={17}
                      width={15}
                    />
                    <label className="group-hover:text-white hover:cursor-pointer ">
                      {data.title}
                    </label>
                  </Link>
                );
              })}
            </div>
          </Folder>
        </div>
      </div>
      <div className="flex-grow  ">
        <div className="flex h-[41px] border-b border-[#1E2D3D] ">
          <div className="flex px-[14px] items-center gap-11 border-[#1E2D3D] border-r h-full">
            <label className="text-[#607B96]">
              {nameData.find((data) => data.pathname === pathname)?.data}
            </label>
            <Image src="/close-icon.svg" alt="1" width={18} height={18} />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default GlobalLayout;
