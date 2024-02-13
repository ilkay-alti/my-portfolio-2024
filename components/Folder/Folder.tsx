import React, { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Chilanka } from "next/font/google";
import Link from "next/link";

const folder = cva(["leading-none"], {
  variants: {
    intent: {
      default: ["text-white"],
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

interface FolderProps extends VariantProps<typeof folder> {
  className?: string;
  image?: string;
  folderTitle?: string;
  data: DataItem[];
}

interface DataItem {
  title: string;
  href: string;
  icon: string;
}

export const Folder: React.FC<FolderProps> = ({
  className,
  intent,
  image,
  folderTitle,
  data,
  ...props
}) => (
  <div className={twMerge(folder({ intent, className }))} {...props}>
    <div
      className="
       pl-[22px]
       gap-4
       border-b 
       border-[#1E2D3D]
       hover:cursor-pointer
        flex
        items-center
        h-[41px]
        
        "
    >
      <Image src="/arrowDown.svg" alt="1" height={6} width={8.5} />
      <p>{folderTitle}</p>
    </div>
    <div className="p-[22px] flex flex-col gap-3">
      {data.map((data, i) => {
        return (
          <Link
            key={i}
            href={data.href}
            target="_blank"
            className="flex gap-2 text-[#607B96] group"
          >
            <Image src={data.icon} alt={i.toString()} height={17} width={15} />
            <label className="group-hover:text-white hover:cursor-pointer ">
              {data.title}
            </label>
          </Link>
        );
      })}
    </div>
  </div>
);
