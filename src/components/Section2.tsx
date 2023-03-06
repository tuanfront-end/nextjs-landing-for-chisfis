import React from "react";
import Heading from "./Heading";
import {
  CpuChipIcon as ChipIcon,
  CubeIcon,
  MoonIcon,
  CodeBracketIcon as CodeIcon,
  LifebuoyIcon as SupportIcon,
  CircleStackIcon as DatabaseIcon,
  HomeIcon,
  MapPinIcon as LocationMarkerIcon,
  Square2StackIcon as ViewGridAddIcon,
} from "@heroicons/react/24/solid";
import Badge from "./Badge";

const data = [
  {
    title:
      process.env.NEXT_PUBLIC_FRAMEWORK === "next"
        ? "Next.js 13 Template"
        : "React Template",
    desc:
      process.env.NEXT_PUBLIC_FRAMEWORK === "next"
        ? "Built with Next 13, Typescript, and the latest Tailwindcss"
        : "Built with React 18, Typescript, and the latest Tailwindcss, ",
    icon: ChipIcon,
    isDifference: true,
  },
  {
    title: "100% responsive",
    desc: "Works on all devices and touch sensors. High quality images, fonts & text.",
    icon: CubeIcon,
  },

  {
    title: "Data & Logic",
    desc: "Almost actions are fully logic processed (map, date range, popup...)",
    icon: DatabaseIcon,
  },
  {
    title: "Dark mode",
    desc: "Darkmode modern. Helps you quickly turn the theme mode to dark at night time.",
    icon: MoonIcon,
  },
  {
    title: "Customizing the theme",
    desc: "Completely customize the template and whole Taiwindcss, quickly modifying its config variables.",
    icon: CodeIcon,
  },
  {
    title: "Free updates and support",
    desc: "I work closely with my customers to provide a high standard of  support and quick bug fixes.",
    icon: SupportIcon,
  },
  {
    title: "Stays listing",
    desc: "...",
    icon: HomeIcon,
  },
  {
    title: "Car rental listing",
    desc: "...",
    icon: ViewGridAddIcon,
  },
  {
    title: "Experiences listing ",
    desc: "...",
    icon: LocationMarkerIcon,
  },
  {
    title: "Flight listing",
    desc: "...",
    icon: ViewGridAddIcon,
    isNew: true,
  },
  {
    title: "Real estate listing",
    desc: "...",
    icon: ViewGridAddIcon,
    isNew: true,
  },
];

const Section2 = () => {
  return (
    <section id="features" className="py-20 max-w-6xl mx-auto text-center">
      <Heading className="text-center">Salient features 🎲</Heading>
      <p className="mt-3 block text-lg text-center text-slate-400 max-w-4xl mx-auto">
        Check out the outstanding features below and above all, see the headset,
        check out our demo to experience
      </p>

      <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center col-span-4 px-8 py-12 space-y-4 bg-slate-800 bg-opacity-30 rounded-3xl border border-slate-700"
          >
            {(item.isNew || item.isDifference) && (
              <div className="absolute top-2 left-2.5 flex space-x-2">
                {item.isNew && <Badge name="New!" color="bg-orange-700" />}
                {item.isDifference && (
                  <Badge name="We are unique!" color="bg-pink-700" />
                )}
              </div>
            )}
            <div className="p-3 text-slate-100 bg-blue-700 rounded-full">
              <item.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium text-slate-200">{item.title}</h4>
            <p className="text-base text-center text-slate-400">{item.desc}</p>
          </div>
        ))}
        <div className="relative flex flex-col items-center col-span-4 px-8 py-12 space-y-4 bg-slate-800 bg-opacity-30 rounded-3xl border border-slate-700">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="uppercase tracking-widest text-2xl">MORE ++</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
