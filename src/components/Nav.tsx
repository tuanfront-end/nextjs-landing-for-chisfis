import React from "react";

import { CONSTANTS } from "@/constants/constants";
import Logo from "./Logo";
import Button from "./Button";

export const Nav = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 pt-6">
      <div className="flex sm:items-center justify-between ">
        <a href="#home">
          <span className="sr-only">chisfis</span>
          <Logo />
        </a>
        <div className="flex items-center justify-end flex-wrap text-sm space-x-4 md:space-x-8 ml-2">
          <a
            href={CONSTANTS.documentationUrl}
            className="block  font-medium hover:text-blue-500"
          >
            Docs
          </a>
          <a
            href={CONSTANTS.supportUrl}
            className=" block font-medium  hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helps
          </a>
          <a
            href={CONSTANTS.liveDemoUrl}
            className=" block font-medium  hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <abbr className="" title="Live Demo">
              Live Demo
            </abbr>
          </a>
          <Button className="text-sm my-2 " href={CONSTANTS.purchaseUrl}>
            Purchase now
          </Button>
        </div>
      </div>
    </section>
  );
};
