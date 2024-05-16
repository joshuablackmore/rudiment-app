import { useRudimentApp } from "../../contexts/appContext";
import Image from "next/image";
import React from "react";

const RudimentImage = () => {
  const { theme, displayedRudiment } = useRudimentApp();
  return (
    <div className="relative h-[50%] ">
      {theme === "light" ? (
        <Image
          src={displayedRudiment.image_black}
          alt={displayedRudiment.name}
          fill
          style={{ objectFit: "contain" }}
          data-testid="images-black"
        />
      ) : (
        <Image
          src={displayedRudiment.image_white}
          alt={displayedRudiment.name}
          fill
          style={{ objectFit: "contain" }}
          data-testid="images-white"
        />
      )}
    </div>
  );
};

export default RudimentImage;
