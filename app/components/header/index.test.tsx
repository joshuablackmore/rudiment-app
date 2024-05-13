import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider, RudimentProps } from "@/app/contexts/appContext";
import Header from ".";

describe("header", () => {
  it("renders the search and random buttons and dark mode toggle", () => {
    const mockRudiment: RudimentProps[] = [
      {
        id: 1,
        name: "",
        drum_drills_rating: 1,
        complexity: 1,
        street_cred: 1,
        image_white: "",
        image_black: "",
        info: "",
      },
    ];

    render(
      <AppContextProvider>
        <Header rudiments={mockRudiment} />
      </AppContextProvider>,
    );
    const randomButton = screen.getByTestId("random-button");
    expect(randomButton).toBeInTheDocument();
    const searchButton = screen.getByTestId("open-slider");
    expect(searchButton).toBeInTheDocument();
    const toggle = screen.getByTestId("toggle");
    expect(toggle).toBeInTheDocument();
  });
});
