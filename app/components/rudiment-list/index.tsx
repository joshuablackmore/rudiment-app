import React from "react";
import { RudimentProps } from "../card";

type RudimentListProps = {
  rudiments: RudimentProps[];
  handleListClick: (id: number) => void;
  toggleSlider: () => void;
};

const getFilteredRudiments = (query: string, items: RudimentProps[]) => {
  if (!query) {
    return items;
  }
  return items.filter((ruds) =>
    ruds.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
};

const RudimentList: React.FC<RudimentListProps> = ({
  rudiments,
  handleListClick,
  toggleSlider,
}) => {
  const [query, setQuery] = React.useState("");

  const filteredRudiments = getFilteredRudiments(query, rudiments);

  return (
    <div className="flex flex-col lg:mt-24">
      <div className="mt-12 self-center">
        <input
          type="text"
          className="mb-4 text-black rounded-sm"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredRudiments.map((rud, index) => (
            <li key={index}>
              <h1
                className="hover:text-[#e65797] cursor-pointer"
                onClick={() => handleListClick(rud.id)}
              >
                {rud.name}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RudimentList;
