import React, { Children } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { Button } from "../Button/Button";
import Link from "next/link";

const card = cva([], {
  variants: {
    intent: {
      default: ["text-white"],
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

interface CardrProps extends VariantProps<typeof card> {
  className?: string;
  image?: string;
  folderTitle?: string;
  children?: React.ReactNode;
  data: dataProps;
}

interface dataProps {
  name: string;
  subject: string;
  description: string;
  techStack: string[];
  img: string;
  link: string;
}

export const Card: React.FC<CardrProps> = ({
  className,
  intent,
  children,
  data,

  ...props
}) => (
  <div className={twMerge(card({ intent, className }))} {...props}>
    <label className="text-[#5565E8] font-bold">
      {data.name}{" "}
      <a className="text-[#607B96] font-normal">// {data.subject}</a>
    </label>
    <div className="w-[370px] bg-[#011221] stroke-2 stroke-[#1E2D3D] rounded-2xl mt-4">
      <Image
        src={data.img}
        alt={data.name}
        width={370}
        height={145}
        className="rounded-t-2xl max-h-[145px] object-cover"
      />
      <div className="px-8 pt-5 pb-8 ">
        <label className="text-[#607B96]">{data.description}</label>
        <Link href={data.link}>
          <Button className="mt-5">view-project</Button>
        </Link>
      </div>
    </div>
  </div>
);
