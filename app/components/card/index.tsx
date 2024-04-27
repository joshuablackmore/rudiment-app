"use client";
import * as React from "react";
import Stats from "../stats";
import RudimentImage from "../image-section";
import RudimentList from "../rudiment-list";

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
      }
    );
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
      <button className="flex self-end mr-4" onClick={toggleSlider}>
        Search all rudiments
      </button>
      <div className="flex flex-col h-full w-full max-w-[400px] max-h-[800px] border border-black rounded-2xl">
        <div className="flex-1 bg-slate-700 rounded-t-2xl">
          <h1
            data-testid="rudiment-name"
            className="pl-4 text-white font-semibold pt-2"
          >
            {displayedRudiment.name}
          </h1>
          <RudimentImage
            url={displayedRudiment.image_white}
            altText={displayedRudiment.name}
          />
        </div>
        <div className="flex-1 flex bg-[#e65797] rounded-b-2xl">
          {displayedRudiment && (
            <Stats
              rating={displayedRudiment.drum_drills_rating}
              cred={displayedRudiment.street_cred}
              complexity={displayedRudiment.complexity}
              info={displayedRudiment.info}
            />
          )}
        </div>
      </div>
      <div>
        <button
          data-testid="get-rudiment-button"
          onClick={handleClick}
          className="bg-slate-700 rounded-2xl text-white p-2 hover:bg-[#7954A1] transition-all duration-200 active:text-black m-4"
        >
          Random Rudiment!
        </button>
      </div>

      {slider && (
        <div className="absolute min-h-screen w-full bg-slate-700 text-white">
          <RudimentList
            handleListClick={handleListClick}
            rudiments={rudiments}
            toggleSlider={toggleSlider}
          />
        </div>
      )}
    </>
  );
};

export default Card;
