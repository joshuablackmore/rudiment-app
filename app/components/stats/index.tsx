import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { useRudimentApp } from "@/app/contexts/appContext";

type StatItemProps = {
  label: string;
  value: number;
  className?: string;
};

const StatItem: React.FC<StatItemProps> = ({ value, label, className }) => {
  const defaultClasses =
    "flex justify-between text-lg text-slate-900 px-12 py-1 rounded-r-3xl";
  const valueDefaultClasses =
    "underline underline-offset-4 font-bold text-slate-900  rounded-md";

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

const tabs = ["Top Trumps", "Notes"];

const TabButtons = () => {
  return tabs.map((tab, index) => (
    <Tab key={index} as={Fragment}>
      {({ selected }) => (
        <div className="w-full" key={index}>
          <button
            className={
              selected
                ? "flex w-full justify-around text-black dark:text-white"
                : "flex w-full justify-center bg-[#B5C0D0] text-black/50  hover:text-[#7954A1] dark:bg-slate-900 dark:text-white"
            }
          >
            {tab}
          </button>
        </div>
      )}
    </Tab>
  ));
};

const Stats = () => {
  const { displayedRudiment } = useRudimentApp();
  return (
    <div data-testid="stats-section" className="flex h-full w-full flex-col">
      <Tab.Group>
        <Tab.List className="flex">
          <TabButtons />
        </Tab.List>
        <Tab.Panels className="flex h-full w-full flex-col justify-center">
          <Tab.Panel>
            <div className="flex flex-col gap-12">
              <StatItem
                label="Street Cred"
                value={displayedRudiment.street_cred}
                className="bg-[#CCD3CA] dark:bg-[#59bbf0]"
              />
              <StatItem
                label="Complexity"
                value={displayedRudiment.complexity}
                className="bg-[#CCD3CA] dark:bg-[#6bb120] "
              />
              <StatItem
                label="Drum Drills Rating"
                value={displayedRudiment.drum_drills_rating}
                className="bg-[#CCD3CA] dark:bg-[#fbd416]"
              />
            </div>
          </Tab.Panel>
          <Tab.Panel className="h-full">
            <div className="flex h-full items-center p-4">
              <h1 className="text-xl text-black dark:text-white ">
                {displayedRudiment.info}
              </h1>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Stats;
