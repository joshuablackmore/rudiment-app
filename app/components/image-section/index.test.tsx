import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RudimentImage from ".";
import { AppContextProvider, RudimentProps } from "@/app/contexts/appContext";
import RandomRudimentButton from "../buttons/random-rudiment-button";
import ThemeToggle from "../theme-toggle";

describe("RudimentImage", () => {
  const initialRudiment: RudimentProps[] = [
    {
      id: 0,
      name: "mock",
      drum_drills_rating: 0,
      complexity: 0,
      street_cred: 0,
      image_white: "/mockwhite.jpg",
      image_black: "/mockblack.jpg",
      info: "",
    },
  ];

  it("Renders a rudiment image once random button is pressed", async () => {
    render(
      <AppContextProvider>
        <RandomRudimentButton rudiments={initialRudiment} />
        <RudimentImage />
      </AppContextProvider>,
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await waitFor(() => {
      const images_black = screen.getByTestId("images-black");
      expect(images_black).toBeInTheDocument();
      expect(images_black).toHaveAttribute("alt", "mock");
    });
  });

  it("renders the correct colour rudiment based on theme toggle", async () => {
    render(
      <AppContextProvider>
        <ThemeToggle />
        <RudimentImage />
      </AppContextProvider>,
    );

    const toggle = screen.getByTestId("toggle");
    expect(toggle).toBeInTheDocument();
    fireEvent.click(toggle);

    await waitFor(() => {
      const images_white = screen.getByTestId("images-white");
      expect(images_white).toBeInTheDocument();
    });
  });
});
