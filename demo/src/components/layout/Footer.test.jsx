import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import * as dateUtils from "@utils/date-utils";
import { describe, it, expect } from "@jest/globals";

describe("Footer", () => {
  it("renders the footer with current year and text", () => {
    vi.spyOn(dateUtils, "currentDate").mockReturnValue(2025);

    render(<Footer />);

    expect(
      screen.getByText(`© 2025 Stopwatch application`)
    ).toBeInTheDocument();
  });
});
