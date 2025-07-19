import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";
import { StopWatchContext } from "@context";
import { expect } from "playwright/test";

describe("ButtonContainer", () => {
  const onStart = vi.fn();
  const onPause = vi.fn();
  const onReset = vi.fn();

  const renderButtonContainer = (isRunning = false) => {
    render(
      <StopWatchContext.Provider value={{ isRunning }}>
        <ButtonContainer
          onStart={onStart}
          onPause={onPause}
          onReset={onReset}
        />
      </StopWatchContext.Provider>
    );
  };
  test("renders start button and able to click it when not running", async () => {
    renderButtonContainer();

    const startButton = screen.getByTestId("start-button");

    expect(screen.getByTestId("reset-button")).not.toBeDisabled();

    fireEvent.click(startButton);

    await waitFor(() => {
      expect(onStart).toHaveBeenCalled();
      expect(screen.getByTestId("reset-button")).toBeDisabled();
    });
  });

  test("renders pause button and able to click it when not running", async () => {
    renderButtonContainer(true);

    const pauseButton = screen.getByTestId("pause-button");

    expect(screen.getByTestId("reset-button")).toBeDisabled();

    fireEvent.click(pauseButton);

    await waitFor(() => {
      expect(onPause).toHaveBeenCalled();
      expect(screen.getByTestId("reset-button")).not.toBeDisabled();
    });
  });

  test("renders reset button and able to click it when not running", () => {
    renderButtonContainer(false);

    let buttons = screen.queryAllByRole("button");
    buttons[1].click();
    expect(onReset).toHaveBeenCalled();
  });
});
