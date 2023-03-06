import { CONSTANTS } from "@/constants/constants";
import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const data = [
  {
    desc: `Awesome theme, and very professional customer support! I'm a very happy customer, thanks.`,
    name: "ProwAB2012",
    job: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1623330188314-8f4645626731?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80",
  },
  {
    desc: `Really nice, clean and good looking Template. Easy to set up if you read the documentation ;)`,
    name: "Pixelpoldi",
    job: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&aauto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    desc: `These guys are awesome. New generation of Booking listings site. Cheers :)`,
    name: "Jotiduli",
    job: "Customer",
    avatar:
      "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60",
  },
];

const Section3 = () => {
  return (
    <section className="flex items-center justify-center py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full sm:pr-8 mb-10 lg:mb-0 lg:w-1/2">
            <Heading sub=" Our customers love our product">
              Testimonials
            </Heading>

            <p className="my-6 text-lg text-gray-400">
              Don&apos;t just take our word for it, read from our extensive{" "}
              <br /> list of case studies and customer testimonials.
            </p>

            <a
              href={CONSTANTS.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium leading-none text-white transition duration-150 ease-in-out bg-blue-700 border border-transparent shadow hover:bg-blue-600 focus:outline-none focus:border-blue-800 md:py-4 md:text-lg md:px-10 rounded-full"
            >
              Purchase now
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            {data.map((item, index) => (
              <blockquote
                key={index}
                className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-slate-800/60 rounded-3xl"
              >
                <div className="flex flex-col sm:pr-10 overflow-hidden">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-blue-600 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p className="mt-2 text-sm text-slate-300 sm:text-base lg:text-sm xl:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-slate-200 truncate sm:text-base lg:text-base">
                    {item.name}
                    <span className="mt-1 text-sm leading-5 text-slate-400 truncate">
                      {` - `} {item.job}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-slate-500 truncate"></p>
                </div>
                <Image
                  width={80}
                  height={80}
                  className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-20 sm:h-20 bg-gray-300 rounded-full object-cover"
                  src={item.avatar}
                  alt=""
                />
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
