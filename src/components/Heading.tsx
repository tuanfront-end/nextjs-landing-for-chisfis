import React, { FC } from "react";

export interface HeadingProps {
  sub?: string;
  className?: string;
  children: React.ReactNode;
}
const Heading: FC<HeadingProps> = ({ sub, children, className }) => {
  return (
    <div className={className}>
      <p className="text-xs font-bold text-blue-600 uppercase sm:text-normal sm:font-bold">
        {sub}
      </p>
      <h3 className="mt-1 font-bold text-3xl md:text-4xl lg:text-5xl sm:mx-0">
        {children}
      </h3>
    </div>
  );
};

export default Heading;
