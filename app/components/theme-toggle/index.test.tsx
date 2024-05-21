import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  AppContext,
  AppContextProvider,
  RudimentProps,
} from "@/app/contexts/appContext";
import ThemeToggle from ".";
import { mockedRudiments } from "../card/index.test";

describe("ThemeToggle", () => {
  it("Renders a switch component", async () => {
    render(
      <AppContextProvider>
        <ThemeToggle />
      </AppContextProvider>,
    );

    const toggleSwitch = screen.getByTestId("toggle");
    expect(toggleSwitch).toBeInTheDocument();
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toBeChecked();
  });

  it("in dark mode toggle is checked", () => {
    const theme = "dark";
    const setTheme = jest.fn();
    const displayedRudiment: RudimentProps = mockedRudiments[1];
    const setDisplayedRudiment = jest.fn();
    const slider = false;
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
        <ThemeToggle />
      </AppContext.Provider>,
    );
    const checkedToggle = screen.getByTestId("toggle");
    expect(checkedToggle).toBeChecked();
  });
});
