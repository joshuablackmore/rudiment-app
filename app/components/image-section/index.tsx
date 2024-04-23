import React from "react";

export type RudimentImageProps = {
  url: string;
};
const RudimentImage: React.FC<RudimentImageProps> = ({ url }) => {
  return (
    <div className="flex items-center justify-center  h-full">
      <img src={url} />
    </div>
  );
};

export default RudimentImage;
