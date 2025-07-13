import React from "react";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

function ProblemChild() {
  throw new Error("Test error!");
}

describe("ErrorBoundary", () => {
  it("renders children without error", () => {
    render(
      <ErrorBoundary>
        <div>Working fine</div>
      </ErrorBoundary>
    );

    expect(screen.getByText("Working fine")).toBeInTheDocument();
  });

  it("catches error and displays error message", () => {
    // Suppress error logs in test output
    jest.spyOn(console, "error").mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(screen.getByText("Test error!")).toBeInTheDocument();

    // Restore console
    console.error.mockRestore();
  });
});
