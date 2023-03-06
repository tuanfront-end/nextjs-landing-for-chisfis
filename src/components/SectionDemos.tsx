import React from "react";
import Heading from "./Heading";
import home1 from "@/images/home/1.png";
import home2 from "@/images/home/2.png";
import home3 from "@/images/home/3.png";
import Badge from "./Badge";
import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { CONSTANTS } from "@/constants/constants";
import Image from "next/image";

export const SectionDemos = () => {
  const data = [
    {
      img: home1,
      text: "Booking online",
      subText: "Home Default",
      link:
        process.env.NEXT_PUBLIC_FRAMEWORK === "next"
          ? "https://chisfis-nextjs.vercel.app/"
          : "https://chisfis-template.vercel.app/",
    },
    {
      img: home2,
      text: "Real Estate",
      subText: "Home Default",
      link:
        process.env.NEXT_PUBLIC_FRAMEWORK === "next"
          ? "https://chisfis-nextjs.vercel.app/home-2"
          : "https://chisfis-template.vercel.app/home-2",
      tags: ["new!"],
    },
    {
      img: home3,
      text: "Home 3",
      subText: "Home Default",
      link:
        process.env.NEXT_PUBLIC_FRAMEWORK === "next"
          ? "https://chisfis-nextjs.vercel.app/home-3"
          : "https://chisfis-template.vercel.app/home-3",
      tags: ["new!"],
    },
  ];

  const renderItem = (item: typeof data[number], index: number) => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
        key={index}
        className="flex flex-col group hover:-translate-y-1.5 transform transition-transform"
      >
        <div className="relative z-0 h-0 aspect-w-8 aspect-h-12">
          {item.tags?.map((tag, index) => (
            <div key={index} className="absolute text-left top-1 left-1.5 z-10">
              <Badge
                className="relative uppercase shadow-xl"
                name={tag}
                color={
                  tag === "new!"
                    ? "bg-red-700"
                    : tag === "popular"
                    ? "bg-green-700"
                    : undefined
                }
              />
            </div>
          ))}
          <Image
            fill
            className="block absolute inset-0 object-cover rounded-xl shadow-2xl"
            src={item.img}
            alt={item.text}
          />
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-opacity-0 group-hover:bg-opacity-40 transition-all text-slate-100 duration-200 bg-slate-900">
            <div
              className="w-14 h-14 flex items-center justify-center bg-slate-900/70 text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity transform duration-200 rounded-full"
              title="View page"
            >
              <ArrowRightIcon className="w-6 h-6 transform -rotate-45" />
            </div>
          </div>
        </div>
        <div className="p-3 text-center">
          <span className="block text-base font-medium capitalize text-slate-100">
            {item.text}
          </span>
          <span className="block text-xs text-slate-400">{item.subText}</span>
        </div>
      </a>
    );
  };

  return (
    <section className="dark text-slate-200 text-center">
      <Heading className="text-center text-slate-100">
        {" "}
        <i className="text-orange-500"> 30+</i> Inner Pages
      </Heading>
      <p className="mt-4 text-lg text-center text-slate-300 mx-auto max-w-screen-md">
        Modern, Elegant & Beautiful your listings site. <br /> We plan to show
        new demos regularly 🍕 🎈🥇
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-11 mt-12">
        {data.map(renderItem)}
      </div>
      <Button
        className="mx-auto inline-flex lg:px-10 lg:py-4 text-base mt-12"
        href={CONSTANTS.liveDemoUrl}
      >
        <span> VIEW MORE 30+ PAGES </span>
        <ArrowUpRightIcon className="h-5 w-5 ml-3" />
      </Button>
    </section>
  );
};
