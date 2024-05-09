"use client";
import * as React from "react";
import Stats from "../stats";
import RudimentImage from "../image-section";
import RudimentList from "../rudiment-list";
import { AnimatePresence, motion } from "framer-motion";

export type RudimentProps = {
  id: number;
  name: string;
  drum_drills_rating: number;
  complexity: number;
  street_cred: number;
  image_white: string;
  image_black: string;
  info: string;
};

type CardProps = {
  rudiments: RudimentProps[];
};

const Card: React.FC<CardProps> = ({ rudiments }) => {
  const [displayedRudiment, setDisplayedRudiment] =
    React.useState<RudimentProps>({
      id: 0,
      name: "",
      drum_drills_rating: 0,
      complexity: 0,
      street_cred: 0,
      image_white: "",
      image_black: "",
      info: "",
    });
  const [currentIndex, setCurrentIndex] = React.useState<number>();

  const randomRudiment = (arr: RudimentProps[]) => {
    if (arr.length === 0) {
      return undefined;
    }

    // Generate a random index that is different from the current index
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * arr.length);
    } while (randomIndex === currentIndex);

    // Update currentIndex to avoid repeating the same rudiment
    setCurrentIndex(randomIndex);

    return arr[randomIndex];
  };

  const handleClick = () => {
    const newRud = randomRudiment(rudiments);
    setDisplayedRudiment(
      newRud || {
        id: 0,
        name: "",
        drum_drills_rating: 0,
        complexity: 0,
        street_cred: 0,
        image_white: "",
        image_black: "",
        info: "",
      },
    );
    if (slider) {
      setSlider(false);
    }
  };

  const handleListClick = (id: number) => {
    const rud = rudiments.filter((r) => r.id === id);
    if (rud.length > 0) {
      setDisplayedRudiment(rud[0]);
    }
    setSlider(false);
  };

  const [slider, setSlider] = React.useState(false);

  const toggleSlider = () => {
    if (!slider) {
      setSlider(true);
    } else if (slider) {
      setSlider(false);
    }
  };

  return (
    <>
      <div className="flex h-full w-full flex-col shadow-xl lg:max-h-[800px] lg:max-w-[400px] lg:rounded-2xl">
        <div className="flex flex-1 flex-col bg-[#B5C0D0] dark:bg-slate-900 lg:rounded-t-2xl">
          <h1
            data-testid="rudiment-name"
            className="pb-16 pl-4 pt-4 font-semibold text-black dark:text-white "
          >
            {displayedRudiment.name}
          </h1>

          {displayedRudiment.image_white && (
            <RudimentImage
              urlWhite={displayedRudiment.image_white}
              urlBlack={displayedRudiment.image_black}
              altText={displayedRudiment.name}
            />
          )}
        </div>
        <div className="flex flex-1 bg-[#F0EBE3] dark:bg-[#e65596]">
          {displayedRudiment && (
            <Stats
              rating={displayedRudiment.drum_drills_rating}
              cred={displayedRudiment.street_cred}
              complexity={displayedRudiment.complexity}
              info={displayedRudiment.info}
            />
          )}
        </div>

        <div className="flex w-full bg-[#F5E8DD] dark:bg-[#e65596] lg:rounded-b-2xl">
          <button
            data-testid="get-rudiment-button"
            onClick={handleClick}
            className="m-4 w-full rounded-2xl bg-[#EED3D9] p-2 text-black transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-slate-900 dark:text-white"
          >
            Random Rudiment!
          </button>
          {slider ? (
            <button
              className="m-4 w-full rounded-2xl bg-[#EED3D9] p-2 text-black transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-slate-900 dark:text-white"
              onClick={toggleSlider}
            >
              Close
            </button>
          ) : (
            <button
              className="m-4 w-full rounded-2xl bg-[#EED3D9] p-2 text-black drop-shadow-2xl transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-slate-900 dark:text-white"
              onClick={toggleSlider}
            >
              Search Rudiments
            </button>
          )}
        </div>
        <AnimatePresence>
          {slider && (
            <motion.div
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ y: -1000 }}
              className="absolute top-0 h-[85%] w-full bg-slate-600 text-white dark:bg-slate-900 lg:right-0 lg:h-full lg:w-[300px]"
            >
              <RudimentList
                handleListClick={handleListClick}
                rudiments={rudiments}
                toggleSlider={toggleSlider}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Card;
