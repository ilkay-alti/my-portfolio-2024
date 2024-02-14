import React, { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

const folder = cva(["leading-none"], {
  variants: {
    intent: {
      default: ["text-white"],
      doubleBorder: ["border-[#1E2D3D] border-t"],
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
  children: React.ReactNode;
}

interface DataItem {
  title: string;
  href?: string;
  icon: string;
}

export const Folder: React.FC<FolderProps> = ({
  className,
  intent,
  image,
  folderTitle,

  children,
  ...props
}) => (
  <div className={twMerge(folder({ intent, className }))} {...props}>
    <div
      className="
       flex
       items-center
       h-[41px]
       pl-[22px]
       gap-4
       border-b 
       border-[#1E2D3D]
       hover:cursor-pointer
        "
    >
      <Image src="/arrowDown.svg" alt="1" height={6} width={8.5} />
      <p>{folderTitle}</p>
    </div>
    {children}
  </div>
);
