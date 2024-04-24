import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RudimentImage from ".";
import { mock } from "node:test";

describe("Image-section", () => {
  it("Displays an image", () => {
    render(<RudimentImage url="testUrl1" altText="testAltText1" />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
