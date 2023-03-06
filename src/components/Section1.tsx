import { CONSTANTS } from "@/constants/constants";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import React from "react";

const Section1 = () => {
  return (
    <section className="md:max-w-none text-center">
      <div className="relative inline-flex rounded-full py-1 px-5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        {process.env.NEXT_PUBLIC_FRAMEWORK === "next"
          ? "Chisfis - Next.js 13 version"
          : "Chisfis - React 18 version"}
      </div>
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white mt-6">
        <span className="block">Modern & Creative</span>
        <span className="block text-indigo-700">
          Booking online, Real Estate
        </span>
      </h1>
      <p className="block mt-7 md:text-lg text-slate-700 max-w-3xl mx-auto ">
        {`Modern & Creative, Chisfis is an ${
          process.env.NEXT_PUBLIC_FRAMEWORK !== "next"
            ? "React 18 + Typescript"
            : "Nextjs 13 + Typescript"
        } template, a perfect
        starting point for your next Booking online and Real Estate site. Stay,
        Car, Experiences, Real Estate, Flight, Property, Travel, Tour, Hotel...`}
      </p>
      <div className="flex gap-3 flex-wrap items-center mt-12 justify-center">
        <a
          href="#demos"
          className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium leading-6 text-white bg-indigo-700 hover:bg-indigo-600 rounded-full shadow-md"
        >
          Demos
          <ArrowDownIcon className="h-5 w-5 ml-2" />
        </a>
        <a
          href={CONSTANTS.purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium flex items-center p-3"
        >
          Purchase Now
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </a>
      </div>
      {/* <!-- End Main Hero Content --> */}
    </section>
  );
};

export default Section1;
