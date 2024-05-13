import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomRudimentButton from ".";
import {
  AppContextProvider,
  RudimentProps,
  useRudimentApp,
} from "@/app/contexts/appContext";

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

describe("RandomRudimentButton", () => {
  it("renders a button", () => {
    render(
      <AppContextProvider>
        <RandomRudimentButton rudiments={initialRudiment} />
      </AppContextProvider>,
    );

    const button = screen.getByRole("button", { name: /Random Rudiment/i });

    expect(button).toBeInTheDocument();
  });
});
