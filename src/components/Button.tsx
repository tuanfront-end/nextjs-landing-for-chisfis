import React, { FC } from "react";

export interface ButtonProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  className = "text-sm",
  children,
  href = "#",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-4 md:px-6 py-3 font-medium text-white bg-blue-700 hover:bg-blue-600 focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-blue-700 rounded-full ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
