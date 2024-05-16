import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByTestId,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider } from "@/app/contexts/appContext";
import SearchRudimentsButton from ".";

describe("SearchRudimentButton", () => {
  it("renders a down arrow before button press", async () => {
    render(
      <AppContextProvider>
        <SearchRudimentsButton />
      </AppContextProvider>,
    );

    const openButton = screen.getByTestId("open-slider");
    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);

    await waitFor(() => {
      const closeButton = screen.getByTestId("close-slider");
      expect(closeButton).toBeInTheDocument();
    });
  });
});
