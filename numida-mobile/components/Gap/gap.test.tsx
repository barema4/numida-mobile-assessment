import React from "react";
import { render } from "@testing-library/react-native";
import Gap from "./index";

describe("Gap", () => {
  test("renders correctly with default width and height", () => {
    const { getByTestId } = render(<Gap />);
    const gapElement = getByTestId("gap");
    expect(gapElement.props.style[1].width).toBe(100);
    expect(gapElement.props.style[1].height).toBe(20);
  });

  test("renders correctly with custom width and height", () => {
    const { getByTestId } = render(<Gap width={200} height={30} />);
    const gapElement = getByTestId("gap");
    expect(gapElement.props.style[1].width).toBe(200);
    expect(gapElement.props.style[1].height).toBe(30);
  });
});
