import React from "react";
import RandomRudimentButton from "../buttons/random-rudiment-button";
import { RudimentProps, useRudimentApp } from "@/app/contexts/appContext";
import ThemeToggle from "../theme-toggle";
import SearchRudimentsButton from "../buttons/search-button";

type HeaderProps = {
  rudiments: RudimentProps[];
};

const Header: React.FC<HeaderProps> = ({ rudiments }) => {
  const { slider } = useRudimentApp();
  return (
    <div className="items-around z-50 flex h-12 w-full justify-between bg-[#B5C0D0] px-2  dark:bg-slate-900 lg:mt-2 lg:w-[400px] lg:flex-col lg:items-end lg:bg-white lg:dark:bg-white">
      <div className="flex w-[75%] items-center  lg:w-full lg:justify-start">
        <RandomRudimentButton rudiments={rudiments} />
        <SearchRudimentsButton />
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Header;
