import React, { useState } from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { StopWatchContext } from "@context";
import { vi, describe, test, expect } from "vitest";
import Body from "./Body";

vi.mock("./TimeDisplay", () => {
  return {
    default: ({ displayTime }) => (
      <p data-testid="mock-time-display">{displayTime}</p>
    ),
  };
});

vi.mock("./buttons/ButtonContainer", () => {
  return {
    default: ({ onStart, onPause, onReset }) => (
      <>
        <button onClick={onStart} data-testid="mock-start" />
        <button onClick={onPause} data-testid="mock-pause" />
        <button onClick={onReset} data-testid="mock-reset" />
      </>
    ),
  };
});

describe("Body", () => {
  const TestWrapper = ({ initialRunning }) => {
    const [isRunning, setIsRunning] = useState(initialRunning);

    return (
      <StopWatchContext.Provider value={{ isRunning }}>
        <Body />
      </StopWatchContext.Provider>
    );
  };

  test.skip("renders body and buttons are clickable", async () => {
    let buttons;
    vi.useFakeTimers();
    render(<TestWrapper />);

    buttons = screen.queryAllByRole("button");

    const timeDisplay = screen.getByTestId("mock-time-display");
    expect(timeDisplay).toBeInTheDocument();

    expect(timeDisplay.innerHTML).toBe("00:00.00");

    fireEvent.click(buttons[0]);

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      console.log("I am here!!");
      expect(timeDisplay.innerHTML).toBe("00:01.00");
    });

    vi.useRealTimers();
  });
});
