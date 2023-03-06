import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { CONSTANTS } from "@/constants/constants";
import React from "react";

const Section5 = () => {
  return (
    <section className="py-20">
      <div className="text-center max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
          The <i className="text-orange-600">New Standard</i> for Booking online
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-slate-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Purchase Chisfis template now and build your website
        </p>

        <div className="flex justify-center mt-8 space-x-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={CONSTANTS.purchaseUrl}
            className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold text-white bg-indigo-700 shadow-md hover:bg-indigo-800 rounded-full"
          >
            Purchase now
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={CONSTANTS.liveDemoUrl}
            className="flex-shrink-0 inline-flex items-center justify-center px-5 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold leading-6 rounded-full bg-indigo-50 text-indigo-900 shadow-md hover:bg-slate-50"
          >
            Live demo
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section5;
