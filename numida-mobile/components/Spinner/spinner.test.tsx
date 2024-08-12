import React from "react";
import { render } from "@testing-library/react-native";
import Spinner from "./index";

describe("Spinner", () => {
  test("renders a spinner with default size", () => {
    const { getByTestId } = render(<Spinner />);
    const spinnerElement = getByTestId("spinner");
    expect(spinnerElement).toBeTruthy();
  });

  test("renders a spinner with custom size", () => {
    const { getByTestId } = render(<Spinner size="small" />);
    const spinnerElement = getByTestId("spinner");
    expect(spinnerElement).toBeTruthy();
  });

  test("renders a spinner with custom color", () => {
    const { getByTestId } = render(<Spinner color="red" />);
    const spinnerElement = getByTestId("spinner");
    expect(spinnerElement).toBeTruthy();
  });
});
