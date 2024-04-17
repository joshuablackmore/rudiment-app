"use client";
import * as React from "react";
import Stats from "../stats";
import { rudiments } from "../../data/rudiment-data";

export type RudimentProps = {
  id: number;
  name: string;
  drum_drills_rating: number;
  complexity: number;
  street_cred: number;
  image: string;
};

const Card = () => {
  const [displayedRudiment, setDisplayedRudiment] =
    React.useState<RudimentProps>({
      id: 0,
      name: "",
      drum_drills_rating: 0,
      complexity: 0,
      street_cred: 0,
      image: "",
    });
  const [currentIndex, setCurrentIndex] = React.useState<number>();

  const randomRudiment = (arr: RudimentProps[]) => {
    if (arr.length === 0) {
      return undefined;
    }
    let randomIndex = Math.floor(Math.random() * arr.length);
    if (randomIndex === currentIndex) {
      randomIndex = randomIndex + 1;
    }
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
      }
    );
  };

  return (
    <div className="flex flex-col min-h-[75%] min-w-[75%] border border-black">
      <div className="flex-1 border border-blue-500">
        <h1>{displayedRudiment.name}</h1>
      </div>
      <div className="flex-1 border border-red-500">
        {displayedRudiment && (
          <Stats
            rating={displayedRudiment.drum_drills_rating}
            cred={displayedRudiment.street_cred}
            complexity={displayedRudiment.complexity}
          />
        )}
      </div>
      <button onClick={handleClick}>get rudiment</button>
    </div>
  );
};

export default Card;
