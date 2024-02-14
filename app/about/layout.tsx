"use client";
import React, { FC } from "react";
import Link from "next/link";
import { IoTerminalSharp, IoLibrarySharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { PiGlobeHemisphereWestFill } from "react-icons/pi";

interface InfoLayoutProps {
  children: React.ReactNode;
}

const menuData = [
  { href: "/about/global", icon: <PiGlobeHemisphereWestFill /> },
  { href: "/about/terminal", icon: <IoTerminalSharp /> },
  { href: "/about/book", icon: <IoLibrarySharp /> },
];

const RootLayout: FC<InfoLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex h-full">
      <div className="w-[68px] border-r border-[#1E2D3D] flex flex-col items-center gap-[33px] pt-5 ">
        {menuData.map((item, i) => (
          <Link href={item.href} key={i} className="w-6 h-6">
            <h3
              className={`flex flex-col items-center gap-2 text-[#607b9664] ${
                pathname === item.href && "text-[#607b96]"
              }`}
            >
              {item.icon}
            </h3>
          </Link>
        ))}
      </div>

      {children}
    </div>
  );
};

export default RootLayout;
