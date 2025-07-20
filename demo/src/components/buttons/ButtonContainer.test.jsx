import React, { useState } from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";
import { StopWatchContext } from "@context";
import { vi, describe, test, expect } from "vitest";

describe("ButtonContainer", () => {
  const onStart = vi.fn();
  const onPause = vi.fn();
  const onReset = vi.fn();

  const TestWrapper = ({ initialRunning }) => {
    const [isRunning, setIsRunning] = useState(initialRunning);

    return (
      <StopWatchContext.Provider value={{ isRunning }}>
        <ButtonContainer
          onStart={() => {
            setIsRunning(true);
            onStart();
          }}
          onPause={() => {
            setIsRunning(false);
            onPause();
          }}
          onReset={onReset}
        />
      </StopWatchContext.Provider>
    );
  };

  test("renders start button and able to click it when not running", async () => {
    render(<TestWrapper initialRunning={false} />);

    expect((await screen.findByTestId("reset-button")).disabled).toBe(false);

    const startButton = await screen.findByTestId("start-button");
    expect(startButton).toBeInTheDocument();

    fireEvent.click(startButton);

    await waitFor(async () => {
      expect((await screen.findByTestId("reset-button")).disabled).toBe(true);
      expect(onStart).toHaveBeenCalled();
    });
  });

  test("renders pause button and able to click it when running", async () => {
    render(<TestWrapper initialRunning={true} />);

    expect((await screen.findByTestId("reset-button")).disabled).toBe(true);

    const pauseButton = await screen.findByTestId("pause-button");
    expect(pauseButton).toBeInTheDocument();

    fireEvent.click(pauseButton);

    await waitFor(async () => {
      expect((await screen.findByTestId("reset-button")).disabled).toBe(false);
      expect(onPause).toHaveBeenCalled();
    });
  });

  test("renders pause button and able to click it when not running", async () => {
    render(<TestWrapper initialRunning={false} />);

    expect((await screen.findByTestId("reset-button")).disabled).toBe(false);
    const resetButton = await screen.findByTestId("reset-button");

    fireEvent.click(resetButton);

    await waitFor(async () => {
      expect(onReset).toHaveBeenCalled();
    });
  });
});
