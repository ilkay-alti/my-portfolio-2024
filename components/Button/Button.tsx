import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "px-[14px]",
    "py-[10px]",
    "rounded-lg",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-[#FEA55F]", "text-[#01080E]", "hover:bg-[#FFAC6B]"],
        default: ["bg-[#1C2B3A]", " text-[#FFFFFF]", "hover:bg-[#263B50]"],
        ghost: ["bg-transparent", "text-[#FFFFFF]", " hover:opacity-50"],
      },
    },

    defaultVariants: {
      intent: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,

  ...props
}) => <button className={twMerge(button({ intent, className }))} {...props} />;
