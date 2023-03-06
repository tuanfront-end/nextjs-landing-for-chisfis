import React, { FC, ReactNode } from "react";

export interface BadgeProps {
  className?: string;
  name: ReactNode;
  children?: ReactNode;
  color?: string;
}

const Badge: FC<BadgeProps> = ({ className = "", name, color, children }) => {
  const BACKGROUNDS = [
    "bg-blue-800",
    "bg-pink-800",
    "bg-green-800",
    "bg-orange-800",
    "bg-purple-800",
    "bg-indigo-800",
    "bg-teal-800",
    "bg-red-800",
    "bg-yellow-800",
  ];

  const COLOR =
    color || BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];

  return (
    <span
      className={`nc-Badge inline-flex items-center justify-center px-2.5 py-1 rounded-full font-bold text-[10px] text-white leading-0 ${className} ${COLOR}`}
    >
      {children || name}
    </span>
  );
};

export default Badge;
