import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stats, { RudStatsProps } from ".";

const mockData: RudStatsProps[] = [
  {
    cred: 0,
    rating: 0,
    complexity: 0,
    info: "",
  },
  {
    cred: 10,
    rating: 20,
    complexity: 30,
    info: "the best rudiment",
  },
];

describe("Stats section", () => {
  it("renders three panel section buttons", () => {
    render(
      <Stats
        cred={mockData[0].cred}
        rating={mockData[0].rating}
        complexity={mockData[0].complexity}
        info={mockData[0].info}
      />
    );
    const statsButton = screen.getByRole("tab", { name: /Top Trumps/i });
    expect(statsButton).toBeInTheDocument();

    const infoButton = screen.getByRole("tab", { name: /Notes/i });
    expect(infoButton).toBeInTheDocument();
  });
  it("renders stats headings", () => {
    render(
      <Stats
        cred={mockData[0].cred}
        rating={mockData[0].rating}
        complexity={mockData[0].complexity}
        info={mockData[0].info}
      />
    );

    const credHeading = screen.getByRole("heading", { name: /Street Cred/i });
    expect(credHeading).toBeInTheDocument();
    const complexHeading = screen.getByRole("heading", { name: /Complexity/i });
    expect(complexHeading).toBeInTheDocument();
    const ratingHeading = screen.getByRole("heading", {
      name: /Drum Drills Rating/i,
    });
    expect(ratingHeading).toBeInTheDocument();
  });
});
