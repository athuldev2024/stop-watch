import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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
  test("renders body and buttons are clickable", async () => {
    let buttons;
    render(<Body />);

    buttons = screen.queryAllByRole("button");

    const timeDisplay = screen.getByTestId("mock-time-display");
    expect(timeDisplay).toBeInTheDocument();

    expect(buttons[0].getAttribute("data-testid")).toBe("mock-start");
    expect(buttons[1].getAttribute("data-testid")).toBe("mock-pause");
    expect(buttons[2].getAttribute("data-testid")).toBe("mock-reset");

    expect(timeDisplay.innerHTML).toBe("00:00.00");

    // Click start button
    fireEvent.click(buttons[0]);

    await waitFor(() => {
      expect(timeDisplay.innerHTML).not.toBe("00:00.00");
    });

    // Click pause button
    fireEvent.click(buttons[1]);

    await waitFor(() => {
      expect(timeDisplay.innerHTML).not.toBe("00:00.00");
    });

    // Click reset button
    fireEvent.click(buttons[2]);

    await waitFor(() => {
      expect(timeDisplay.innerHTML).toBe("00:00.00");
    });
  });
});
