import "@testing-library/jest-dom";
import Card from ".";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("Renders a h1 heading with Test as text", () => {
    render(<Card />);

    const heading = screen.getByRole("heading", { name: /Test/ });

    expect(heading).toBeInTheDocument();
  });
});
