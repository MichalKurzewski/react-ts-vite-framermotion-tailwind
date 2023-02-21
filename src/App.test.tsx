import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("<App/>", () => {
  it("Should render hello page correctly", () => {
    const appElement = render(<App />);
    expect(appElement.findByText("Hello")).toBeDefined();
  });
});
