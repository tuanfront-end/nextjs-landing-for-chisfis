import React, { FC } from "react";
import logoImg from "@/images/logo.svg";
import Image from "next/image";

export interface LogoProps {
  src?: string;
}
const Logo: FC<LogoProps> = ({ src }) => {
  return (
    <Image className="w-28 flex-shrink-0" src={src || logoImg} alt="logo" />
  );
};

export default Logo;
