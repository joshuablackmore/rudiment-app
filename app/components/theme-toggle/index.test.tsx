import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider } from "@/app/contexts/appContext";
import ThemeToggle from ".";

describe("ThemeToggle", () => {
  it("Renders a switch component", () => {
    render(
      <AppContextProvider>
        <ThemeToggle />
      </AppContextProvider>,
    );

    const toggleSwitch = screen.getByTestId("toggle");
    expect(toggleSwitch).toBeInTheDocument();
  });
});
