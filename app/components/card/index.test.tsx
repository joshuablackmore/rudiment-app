import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from ".";

const mockedRudiments = [
  {
    id: 1,
    name: "",
    drum_drills_rating: 5,
    complexity: 3,
    street_cred: 7,
    image: "mocked-image-url-1",
    info: "Mocked info 1",
  },
  {
    id: 2,
    name: "Mocked Rudiment 2",
    drum_drills_rating: 6,
    complexity: 4,
    street_cred: 8,
    image: "mocked-image-url-2",
    info: "Mocked info 2",
  },
];

describe("Card", () => {
  it("renders the Card component with a blank rudiment", () => {
    const { getByText, getByTestId } = render(
      <Card rudiments={mockedRudiments} />
    );

    expect(getByTestId("rudiment-name")).toHaveTextContent(
      mockedRudiments[0].name
    );
  });

  it("renders a street cred heading", () => {
    render(<Card rudiments={mockedRudiments} />);

    const heading = screen.getByRole("heading", { name: /street cred :/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders a new rudiment after button press", () => {
    const { getByTestId } = render(<Card rudiments={mockedRudiments} />);

    const button = screen.getByRole("button", { name: /get rudiment/ });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(getByTestId("rudiment-name")).toHaveTextContent(
      mockedRudiments[1].name
    );
  });
});
