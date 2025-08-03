import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "@jest/globals";

describe("Header", () => {
  it("renders the header with the stopwatch icon as title", () => {
    render(<Header />);

    const titleElement = screen.getByTestId("header-title");
    expect(titleElement).toBeInTheDocument();
  });
});
