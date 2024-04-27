import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import VisualStats from "../visual";

export type RudStatsProps = {
  cred: number;
  rating: number;
  complexity: number;
  info: string;
};

type StatItemProps = {
  label: string;
  value: number;
  className?: string;
};

const StatItem: React.FC<StatItemProps> = ({ value, label, className }) => {
  const defaultClasses =
    "flex justify-between text-lg text-slate-700 px-12 py-1 rounded-r-3xl";
  const valueDefaultClasses = "underline underline-offset-4 font-bold";

  const labelClassNames = className
    ? `${defaultClasses} ${className}`
    : defaultClasses;

  const valueClassNames = className
    ? `${valueDefaultClasses} ${className}`
    : valueDefaultClasses;
  return (
    <div className={labelClassNames}>
      <h1>{label} :</h1>
      <h1 className={valueClassNames}>{value}</h1>
    </div>
  );
};

const tabs = ["Stats", "Visual", "Notes"];

const TabButtons = () => {
  return tabs.map((tab, index) => (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div className="w-full" key={index}>
          <button
            className={
              selected
                ? "text-white w-full justify-around flex"
                : "text-white w-full justify-center flex  bg-slate-700 hover:text-[#e65797]"
            }
          >
            {tab}
          </button>
        </div>
      )}
    </Tab>
  ));
};

const Stats: React.FC<RudStatsProps> = ({ rating, cred, complexity, info }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Tab.Group>
        <Tab.List className="flex justify-around">
          <TabButtons />
        </Tab.List>
        <Tab.Panels className=" flex-1 flex flex-col">
          <Tab.Panel>
            <div className="mt-12 flex flex-col gap-12 pt-6">
              <StatItem
                label="Street Cred"
                value={cred}
                className="bg-[#59bbf0]"
              />
              <StatItem
                label="Complexity"
                value={complexity}
                className="bg-[#6bb120]"
              />
              <StatItem
                label="Drum Drills Rating"
                value={rating}
                className="bg-[#fbd416]"
              />
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <VisualStats cred={cred} rating={rating} complexity={complexity} />
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <div className="flex items-center justify-center h-full p-4">
              <h1 className="text-white text-xl">{info}</h1>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Stats;
