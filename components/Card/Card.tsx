import React from "react";
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

interface CardProps extends VariantProps<typeof card> {
  className?: string;
  data: DataProps;
  children?: React.ReactNode;
}

interface DataProps {
  name: string;
  subject: string;
  description: string;
  techStack: string[];
  img: string;
  link: string;
}

export const Card: React.FC<CardProps> = ({
  className,
  intent,
  children,
  data,
  ...props
}) => (
  <div className={twMerge(card({ intent, className }))} {...props}>
    {/* Card Header */}
    <div className="text-[#5565E8] font-bold">
      {data.name}{" "}
      <span className="text-[#607B96] font-normal">// {data.subject}</span>
    </div>

    {/* Card Body */}
    <div className="w-[370px] bg-[#011221] border-2 border-[#1E2D3D] rounded-2xl mt-4">
      {/* Image */}
      <Image
        src={data.img}
        alt={data.name}
        width={370}
        height={145}
        className="rounded-t-2xl max-h-[145px] object-cover"
      />

      {/* Content */}
      <div className="px-8 pt-5 pb-8">
        <p className="text-[#607B96]">{data.description}</p>

        {/* Button */}
        <Link href={data.link} passHref legacyBehavior>
          <Button className="mt-5">view-project</Button>
        </Link>
      </div>
    </div>

    {/* Children (if any) */}
    {children}
  </div>
);
