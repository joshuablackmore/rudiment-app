"use client";
import * as React from "react";
import Stats from "../stats";
import RudimentImage from "../image-section";
import RudimentList from "../rudiment-list";
import { AnimatePresence, motion } from "framer-motion";
import { RudimentProps, useRudimentApp } from "@/app/contexts/appContext";

type CardProps = {
  rudiments: RudimentProps[];
};

const Card: React.FC<CardProps> = ({ rudiments }) => {
  const { displayedRudiment, setDisplayedRudiment } = useRudimentApp();
  const { slider, setSlider } = useRudimentApp();

  const handleListClick = (id: number) => {
    const rud = rudiments.filter((r) => r.id === id);
    if (rud.length > 0) {
      setDisplayedRudiment(rud[0]);
    }
    setSlider(false);
  };

  const toggleSlider = () => {
    if (!slider) {
      setSlider(true);
    } else if (slider) {
      setSlider(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col shadow-xl lg:max-h-[800px] lg:max-w-[400px] lg:rounded-2xl">
      <div className="flex flex-1 flex-col bg-[#B5C0D0] pt-4 dark:bg-slate-900 lg:rounded-t-2xl">
        <h1
          data-testid="rudiment-name"
          className="pb-16 pl-4 pt-4 font-semibold text-black dark:text-white "
        >
          {displayedRudiment.name}
        </h1>

        {displayedRudiment.image_white && <RudimentImage />}
      </div>
      <div className="flex flex-1 bg-[#F0EBE3] dark:bg-[#e65596]">
        {displayedRudiment && <Stats />}
      </div>

      <AnimatePresence>
        {slider && (
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ y: -1000 }}
            className="absolute mb-[-48px] h-full w-full  bg-[#B5C0D0] text-white dark:bg-slate-900 lg:right-0 lg:top-0 lg:h-full lg:w-[300px] "
          >
            <RudimentList
              handleListClick={handleListClick}
              rudiments={rudiments}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
