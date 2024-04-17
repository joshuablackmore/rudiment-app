import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col min-h-[75%] min-w-[75%] border border-black">
      <div className="flex-1 border border-blue-500">
        <h1>top</h1>
      </div>
      <div className="flex-1 border border-red-500">
        <h1>bottom</h1>
      </div>
    </div>
  );
};

export default Card;
