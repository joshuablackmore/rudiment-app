import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./";
import {
  AppContext,
  AppContextProvider,
  RudimentProps,
} from "@/app/contexts/appContext";

const mockedRudiments: RudimentProps[] = [
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
  {
    id: 1,
    name: "mock 1",
    drum_drills_rating: 2,
    complexity: 4,
    street_cred: 6,
    image_white: "/mock-image-white.jpg",
    image_black: "/mock-image-black.jpg",
    info: "mocked info",
  },
];
type AppContextProps = {
  theme: string;
  setTheme: (theme: string) => void;
  displayedRudiment: RudimentProps[];
  setDisplayedRudiment: (rudiments: RudimentProps[]) => void;
  slider: boolean;
  setSlider: (value: boolean) => void;
};

describe("Card", () => {
  it("renders a blank rudiment containing no image and empty stats values", () => {
    render(
      <AppContextProvider>
        <Card rudiments={mockedRudiments} />
      </AppContextProvider>,
    );

    const stats = screen.getByTestId("stats-section");
    expect(stats).toBeVisible();
    const emptyValue =
      screen.getByText(/Street Cred/i).nextElementSibling?.textContent;
    expect(emptyValue).toBe("0");
  });

  it("renders the rudiment list when slider is set to open", () => {
    const theme = "light";
    const setTheme = jest.fn();
    const displayedRudiment: RudimentProps = mockedRudiments[1];
    const setDisplayedRudiment = jest.fn();
    const slider = true;
    const setSlider = jest.fn();

    render(
      <AppContext.Provider
        value={{
          theme,
          setTheme,
          displayedRudiment,
          setDisplayedRudiment,
          slider,
          setSlider,
        }}
      >
        <Card rudiments={mockedRudiments} />
      </AppContext.Provider>,
    );
    const rudimentList = screen.getByTestId("rudiment-list");
    expect(rudimentList).toBeVisible();
  });
});
