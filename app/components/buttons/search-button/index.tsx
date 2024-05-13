import { useRudimentApp } from "@/app/contexts/appContext";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SearchRudimentsButton = () => {
  const { slider, setSlider } = useRudimentApp();

  const toggleSlider = () => {
    if (!slider) {
      setSlider(true);
    } else if (slider) {
      setSlider(false);
    }
  };
  return (
    <div>
      {slider ? (
        <button
          data-testid="close-slider"
          className="m-4 flex items-center justify-around gap-2 rounded-xl bg-[#EED3D9] p-1 text-sm text-black drop-shadow-2xl transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-[#e65596] dark:text-white"
          onClick={toggleSlider}
        >
          Search <FaChevronUp />
        </button>
      ) : (
        <button
          data-testid="open-slider"
          className="m-4 flex items-center justify-around gap-2 rounded-xl bg-[#EED3D9] p-1 text-sm text-black shadow-sm shadow-black/50 transition-all duration-200 hover:bg-[#7954A1] active:text-black dark:bg-[#e65596] dark:text-white dark:shadow-white/50"
          onClick={toggleSlider}
        >
          Search <FaChevronDown />
        </button>
      )}
    </div>
  );
};

export default SearchRudimentsButton;
