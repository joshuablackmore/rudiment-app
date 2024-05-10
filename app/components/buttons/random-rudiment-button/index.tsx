import { RudimentProps, useRudimentApp } from "@/app/contexts/appContext";
import React from "react";

type ButtonProps = {
  rudiments: RudimentProps[];
};
const RandomRudimentButton: React.FC<ButtonProps> = ({ rudiments }) => {
  const { displayedRudiment, setDisplayedRudiment } = useRudimentApp();
  const { slider, setSlider } = useRudimentApp();
  const [currentIndex, setCurrentIndex] = React.useState<number>();

  const randomRudiment = (arr: RudimentProps[]) => {
    if (arr.length === 0) {
      return undefined;
    }
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * arr.length);
    } while (randomIndex === currentIndex);
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

  return (
    <div>
      <button
        data-testid="get-rudiment-button"
        onClick={handleClick}
        className="flex rounded-xl bg-[#EED3D9] p-2 text-black shadow-sm shadow-black/50 transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-[#e65596] dark:text-white dark:shadow-white/50"
      >
        Random Rudiment!
      </button>
    </div>
  );
};

export default RandomRudimentButton;
