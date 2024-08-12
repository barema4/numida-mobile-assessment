import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormField from "./index";

describe("FormField", () => {
  test("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <FormField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChangeText={() => {}}
      />,
    );
    const labelElement = getByText("Username");
    const inputElement = getByPlaceholderText("Enter your username");
    expect(labelElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
  });

  test("calls onChangeText function when input text changes", () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <FormField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChangeText={onChangeTextMock}
      />,
    );
    const inputElement = getByPlaceholderText("Enter your username");
    fireEvent.changeText(inputElement, "testuser");
    expect(onChangeTextMock).toHaveBeenCalledWith("testuser");
  });

  test("displays correct keyboard type", () => {
    const { getByPlaceholderText } = render(
      <FormField
        label="Email"
        value=""
        placeholder="Enter your email"
        onChangeText={() => {}}
        keyboardType="email-address"
      />,
    );
    const inputElement = getByPlaceholderText("Enter your email");
    expect(inputElement.props.keyboardType).toBe("email-address");
  });
});
