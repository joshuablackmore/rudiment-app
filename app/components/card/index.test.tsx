import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RudimentProps } from ".";
import Card from "./";

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
    render(<Card rudiments={initialRudiment} />);
  });

  // it("renders different rudiments after button press", () => {
  //   const mockedRudiments = generateMockedRudiments(7);
  //   const { getByTestId } = render(<Card rudiments={mockedRudiments} />);

  //   const button = getByTestId("get-rudiment-button");
  //   expect(button).toBeInTheDocument();

  //   const displayedRudiments = new Set();

  //   // Click the button three times to display all rudiments
  //   for (let i = 0; i < mockedRudiments.length; i++) {
  //     fireEvent.click(button);
  //     const displayedRudimentName = getByTestId("rudiment-name").textContent;
  //     displayedRudiments.add(displayedRudimentName);
  //   }

  //   // Click the button additional times to ensure repeating rudiments
  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(button);
  //     const displayedRudimentName = getByTestId("rudiment-name").textContent;
  //     displayedRudiments.add(displayedRudimentName);
  //   }

  //   // Ensure that all rudiments were displayed at least once
  //   expect(displayedRudiments.size).toEqual(mockedRudiments.length);
  // });
});
