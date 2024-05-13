import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContextProvider, RudimentProps } from "@/app/contexts/appContext";
import RudimentList from ".";

describe("RudimentList", () => {
  const rudiments: RudimentProps[] = [
    {
      id: 0,
      name: "mock",
      drum_drills_rating: 0,
      complexity: 0,
      street_cred: 0,
      image_white: "",
      image_black: "",
      info: "",
    },
  ];

  const mockHandleListClick = jest.fn();

  it("renders a search box", () => {
    render(
      <AppContextProvider>
        <RudimentList
          rudiments={rudiments}
          handleListClick={mockHandleListClick}
        />
      </AppContextProvider>,
    );

    const searchBox = screen.getByPlaceholderText("search");
    expect(searchBox).toBeInTheDocument();
  });
});
