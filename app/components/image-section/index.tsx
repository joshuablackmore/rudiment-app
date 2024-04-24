import React from "react";

export type RudimentImageProps = {
  url: string;
  altText: string;
};
const RudimentImage: React.FC<RudimentImageProps> = ({ url, altText }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <img src={url} alt={altText} />
    </div>
  );
};

export default RudimentImage;
