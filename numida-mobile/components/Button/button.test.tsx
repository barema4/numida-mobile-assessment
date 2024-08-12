import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "./index";

describe("Button", () => {
  test("renders correctly", () => {
    const { getByText } = render(<Button onPress={() => {}} />);
    const buttonElement = getByText("Save");
    expect(buttonElement).toBeTruthy();
  });

  test("calls onPress function when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button onPress={onPressMock} />);
    const buttonElement = getByText("Save");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  test("disables button when loading is true", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPressMock} loading={true} />,
    );
    const buttonElement = getByTestId("button");
    expect(buttonElement.props.accessibilityState.disabled).toBe(true);
  });

  test("disables button when disabled is true", () => {
    const { getByTestId } = render(<Button onPress={jest.fn} disabled />);
    const buttonElement = getByTestId("button");
    expect(buttonElement.props.accessibilityState.disabled).toBe(true);
  });
});
