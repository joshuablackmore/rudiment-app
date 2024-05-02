import Image from "next/image";
import React from "react";

export type RudimentImageProps = {
  url: string;
  altText: string;
};

const RudimentImage: React.FC<RudimentImageProps> = ({ url, altText }) => {
  return (
    <div className="relative h-[50%] " data-testid="images">
      {url ? (
        <Image
          src={url}
          alt={altText}
          fill={true}
          objectFit="contain"
          className=""
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center h-full text-white text-2xl font-extrabold">
          <h1>Welcome to the Drum Drills Rudiment App!</h1>
        </div>
      )}
    </div>
  );
};

export default RudimentImage;
