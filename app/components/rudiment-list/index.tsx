import React from "react";
import { RudimentProps } from "../card";

type RudimentListProps = {
  rudiments: RudimentProps[];
  handleListClick: (id: number) => void;
  toggleSlider: () => void;
};

const RudimentList: React.FC<RudimentListProps> = ({
  rudiments,
  handleListClick,
  toggleSlider,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex self-end m-4 mt-6">
        <h1 onClick={toggleSlider} className="hover:text-blue-500">
          Close
        </h1>
      </div>
      <div className="mt-12 self-center">
        <ul>
          {rudiments.map((rud, index) => (
            <h1
              className="hover:text-blue-500"
              onClick={() => handleListClick(rud.id)}
            >
              {rud.name}
            </h1>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RudimentList;
