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
    "flex justify-between text-lg text-white px-12 py-1 rounded-r-3xl w-full";

  const classNames = className
    ? `${defaultClasses} ${className}`
    : defaultClasses;
  return (
    <div className={classNames}>
      <h1>{label} :</h1>
      <h1>{value}</h1>
    </div>
  );
};

const Stats: React.FC<RudStatsProps> = ({ rating, cred, complexity, info }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <Tab.Group>
        <Tab.List className="flex-0 justify-around flex">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-white w-full "
                    : "text-white w-full  bg-slate-500"
                }
              >
                Stats
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-white  w-full"
                    : "text-white w-full bg-slate-500"
                }
              >
                Visual
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-white w-full"
                    : "text-white w-full bg-slate-500"
                }
              >
                Info
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className=" flex-1 flex flex-col pt-4">
          <Tab.Panel>
            <div className="mt-12 space-y-12">
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
            <div className="flex items-center justify-center  h-full">
              <h1 className="text-white text-xl">{info}</h1>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Stats;
