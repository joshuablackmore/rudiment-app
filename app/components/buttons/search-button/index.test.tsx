import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider } from "@/app/contexts/appContext";
import SearchRudimentsButton from ".";

describe("SearchRudimentButton", () => {
  it("renders an down arrow before button press", () => {
    render(
      <AppContextProvider>
        <SearchRudimentsButton />
      </AppContextProvider>,
    );

    const openButton = screen.getByTestId("open-slider");
    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);

    const closeButton = screen.getByTestId("close-slider");
    expect(closeButton).toBeInTheDocument();
  });
});
