import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VisualStats from ".";

describe("VisualStats", () => {
  it("renders the three rings", () => {
    render(<VisualStats complexity={0} cred={0} rating={0} />);

    const visualComp = screen.getByTestId("progress-1");
    expect(visualComp).toBeInTheDocument();
    const visualCred = screen.getByTestId("progress-2");
    expect(visualCred).toBeInTheDocument();
    const visualRating = screen.getByTestId("progress-3");
    expect(visualRating).toBeInTheDocument();
  });
});
