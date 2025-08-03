import { formattedTime } from "./date-utils";
import { describe, it, expect } from "vitest";

describe("formattedTime", () => {
  it("formats time correctly for 0ms", () => {
    expect(formattedTime(0)).toBe("00:00.00");
  });

  it("formats time correctly for 1 minute, 2 seconds, 340ms", () => {
    const result = formattedTime(62340);
    expect(result).toBe("01:02.34");
  });

  it("formats time with leading zeros", () => {
    const result = formattedTime(904);
    expect(result).toBe("00:00.90");
  });

  it("formats exactly 1 hour correctly", () => {
    const result = formattedTime(3600000);
    expect(result).toBe("00:00.00");
  });
});
