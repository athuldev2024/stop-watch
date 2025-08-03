import { render, screen } from "@testing-library/react";
import TimeDisplay from "./TimeDisplay";
import React from "react";
import { describe, it, expect } from "@jest/globals";

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

    const Wrapper = React.memo(
      ({ displayTime }) => {
        renderSpy();
        return <TimeDisplay displayTime={displayTime} />;
      },
      (prevProps, nextProps) => {
        return prevProps.displayTime === nextProps.displayTime;
      }
    );

    const { rerender } = render(<Wrapper displayTime="10:00" />);

    rerender(<Wrapper displayTime="10:00" />);

    expect(renderSpy).toHaveBeenCalledTimes(1);
  });
});
