import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./";
import { AppContextProvider, RudimentProps } from "@/app/contexts/appContext";

const generateMockedRudiments = (numberOfRudimentsInApp: number) => {
  const rudiments = [];

  for (let i = 1; i <= numberOfRudimentsInApp; i++) {
    rudiments.push({
      id: i,
      name: `Mocked Rudiment ${i}`,
      drum_drills_rating: Math.floor(Math.random() * 100) + 1,
      complexity: Math.floor(Math.random() * 100) + 1,
      street_cred: Math.floor(Math.random() * 100) + 1,
      image_white: `https://mocked-image-white-url-${i}`,
      image_black: `https://mocked-image-black-url-${i}`,
      info: `Mocked info ${i}`,
    });
  }
  return rudiments;
};

const initialRudiment: RudimentProps[] = [
  {
    id: 0,
    name: "",
    drum_drills_rating: 0,
    complexity: 0,
    street_cred: 0,
    image_white: "",
    image_black: "",
    info: "",
  },
];

describe("Card", () => {
  it("renders a blank rudiment", () => {
    render(
      <AppContextProvider>
        <Card rudiments={initialRudiment} />
      </AppContextProvider>,
    );
  });
});
