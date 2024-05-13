import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stats from ".";
import { AppContextProvider, RudimentProps } from "@/app/contexts/appContext";
import RandomRudimentButton from "../buttons/random-rudiment-button";
import exp from "constants";

describe("Stats section", () => {
  it("renders two panel section buttons", () => {
    render(
      <AppContextProvider>
        <Stats />
      </AppContextProvider>,
    );
    const statsButton = screen.getByRole("tab", { name: /Top Trumps/i });
    expect(statsButton).toBeInTheDocument();

    const infoButton = screen.getByRole("tab", { name: /Notes/i });
    expect(infoButton).toBeInTheDocument();
  });
  it("renders stats headings", () => {
    render(
      <AppContextProvider>
        <Stats />
      </AppContextProvider>,
    );

    const credHeading = screen.getByRole("heading", { name: /Street Cred/i });
    expect(credHeading).toBeInTheDocument();
    const complexHeading = screen.getByRole("heading", { name: /Complexity/i });
    expect(complexHeading).toBeInTheDocument();
    const ratingHeading = screen.getByRole("heading", {
      name: /Drum Drills Rating/i,
    });
    expect(ratingHeading).toBeInTheDocument();
  });
  it("renders new stats scores on random button press", async () => {
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
        <RandomRudimentButton rudiments={mockRudiment} />
        <Stats />
      </AppContextProvider>,
    );
    const initialStreetCredValue =
      screen.getByText(/Street Cred/).nextElementSibling?.textContent;
    expect(initialStreetCredValue).toBe("0");

    const randomButton = screen.getByTestId("random-button");
    expect(randomButton).toBeInTheDocument();

    fireEvent.click(randomButton);

    await waitFor(() => {
      const updatedStreetCredValue =
        screen.getByText(/Street Cred/).nextElementSibling?.textContent;
      expect(updatedStreetCredValue).toBe(
        mockRudiment[0].street_cred.toString(),
      );
    });
  });
});
