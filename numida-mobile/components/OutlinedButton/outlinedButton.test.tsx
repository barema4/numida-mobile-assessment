import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import OutlinedButton from "./index";

describe("OutlinedButton", () => {
  test("renders button with default title", () => {
    const { getByText } = render(<OutlinedButton onPress={() => {}} />);
    const buttonElement = getByText("Save");
    expect(buttonElement).toBeTruthy();
  });

  test("renders button with Learn more title", () => {
    const { getByText } = render(
      <OutlinedButton onPress={() => {}} title="Learn more" />,
    );
    const buttonElement = getByText("Learn more");
    expect(buttonElement).toBeTruthy();
  });

  test("calls onPress function when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<OutlinedButton onPress={onPressMock} />);
    const buttonElement = getByTestId("button");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
