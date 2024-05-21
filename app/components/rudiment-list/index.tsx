import { RudimentProps } from "@/app/contexts/appContext";
import React from "react";

type RudimentListProps = {
  rudiments: RudimentProps[];
  handleListClick: (id: number) => void;
};

const getFilteredRudiments = (query: string, items: RudimentProps[]) => {
  if (!query) {
    return items;
  }
  return items.filter((ruds) =>
    ruds.name.toLowerCase().includes(query.toLocaleLowerCase()),
  );
};

const RudimentList: React.FC<RudimentListProps> = ({
  rudiments,
  handleListClick,
}) => {
  const [query, setQuery] = React.useState("");

  const filteredRudiments = getFilteredRudiments(query, rudiments);

  return (
    <div className="flex flex-col">
      <div className="mt-12 self-center">
        <input
          type="text"
          className="mb-4 rounded-sm text-black"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {filteredRudiments.map((rud, index) => (
            <li key={index}>
              <h1
                data-testid="rudiment-items"
                className="cursor-pointer text-black hover:text-[#e65797] dark:text-white dark:hover:text-[#e65797]"
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
