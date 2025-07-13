import { render, screen } from "@testing-library/react";
import TimeDisplay from "./TimeDisplay";
import React from "react";

describe("TimeDisplay", () => {
  it("renders the correct time text", () => {
    render(<TimeDisplay displayTime="00:30" />);
    expect(screen.getByText("00:30")).toBeInTheDocument();
  });

  it("updates when displayTime changes", () => {
    const { rerender } = render(<TimeDisplay displayTime="00:30" />);
    expect(screen.getByText("00:30")).toBeInTheDocument();

    rerender(<TimeDisplay displayTime="01:15" />);
    expect(screen.getByText("01:15")).toBeInTheDocument();
    expect(screen.queryByText("00:30")).not.toBeInTheDocument();
  });

  it("does not re-render when displayTime is the same", () => {
    const renderSpy = vi.fn();

    const Wrapper = ({ displayTime }) => {
      renderSpy();
      return <TimeDisplay displayTime={displayTime} />;
    };

    const { rerender } = render(<Wrapper displayTime="10:00" />);
    expect(screen.getByText("10:00")).toBeInTheDocument();

    rerender(<Wrapper displayTime="10:00" />); // same value, should not trigger re-render

    expect(renderSpy).toHaveBeenCalledTimes(1);
  });
});
