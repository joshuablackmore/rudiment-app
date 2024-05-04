import { useTheme } from "../../contexts/themeContext";
import Image from "next/image";
import React from "react";

export type RudimentImageProps = {
  urlWhite: string;
  urlBlack: string;
  altText: string;
};

const RudimentImage: React.FC<RudimentImageProps> = ({
  urlWhite,
  altText,
  urlBlack,
}) => {
  const { theme } = useTheme();
  return (
    <div className="relative h-[50%] ">
      {theme === "light" ? (
        <Image
          src={urlBlack}
          alt={altText}
          fill={true}
          objectFit="contain"
          className=""
          data-testid="images"
        />
      ) : (
        <Image
          src={urlWhite}
          alt={altText}
          fill={true}
          objectFit="contain"
          className=""
          data-testid="images"
        />
      )}
    </div>
  );
};

export default RudimentImage;
