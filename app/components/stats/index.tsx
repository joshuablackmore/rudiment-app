import React from "react";

type RudStatsProps = {
  cred: number;
  rating: number;
  complexity: number;
};

const Stats: React.FC<RudStatsProps> = ({ rating, cred, complexity }) => {
  return (
    <div>
      <h1>Street Cred : {cred}</h1>
      <h1>Drum Drills Rating : {rating}</h1>
      <h1>complexity : {complexity}</h1>
    </div>
  );
};

export default Stats;
