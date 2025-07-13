import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders children without error", () => {
    render(
      <ErrorBoundary>
        <div>Working fine</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Working fine")).toBeInTheDocument();
  });

  it("catches error and displays error message", () => {
    function ProblemChild() {
      throw new Error("Test error!");
    }

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText("Test error!")).toBeInTheDocument();
  });
});
