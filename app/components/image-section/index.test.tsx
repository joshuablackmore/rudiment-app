import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RudimentImage from ".";

describe("Image-section", () => {
  it("Displays an image", () => {
    render(<RudimentImage url="" altText="" />);
    const image = screen.getByTestId("images");
    expect(image).toBeInTheDocument();
  });
});
