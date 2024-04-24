"use client";
import * as React from "react";
import Stats from "../stats";
import RudimentImage from "../image-section";

export type RudimentProps = {
  id: number;
  name: string;
  drum_drills_rating: number;
  complexity: number;
  street_cred: number;
  image: string;
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
      image: "",
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
        image: "",
        info: "",
      }
    );
  };

  return (
    <div className="flex flex-col min-h-[75%] w-[75%] min-w-96 max-w-[480px] border border-black rounded-2xl">
      <div className="flex-1 bg-slate-500 rounded-t-2xl">
        <h1 data-testid="rudiment-name" className="pl-4">
          {displayedRudiment.name}
        </h1>
        <RudimentImage
          url={displayedRudiment.image}
          altText={displayedRudiment.name}
        />
      </div>
      <div className="flex-1 flex bg-[#e65797]">
        {displayedRudiment && (
          <Stats
            rating={displayedRudiment.drum_drills_rating}
            cred={displayedRudiment.street_cred}
            complexity={displayedRudiment.complexity}
            info={displayedRudiment.info}
          />
        )}
      </div>
      <button data-testid="get-rudiment-button" onClick={handleClick}>
        get rudiment
      </button>
    </div>
  );
};

export default Card;
