import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Card from "./index";

describe("Card", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <Card
        title="Personal Loan"
        description="Personal loan description"
        cardColor="#FFFFFF"
        onPress={() => {}}
        buttonText="Learn more"
        loanAmount="10000"
        interestRate="3.5%"
      />,
    );
    const titleElement = getByText("Personal Loan");
    const descriptionElement = getByText("Personal loan description");
    const loanAmountElement = getByText("10000");
    const interestRateElement = getByText("Interest: 3.5%");
    const buttonElement = getByText("Learn more");
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
    expect(loanAmountElement).toBeTruthy();
    expect(interestRateElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  test("calls onPress function when button is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Card
        title="Tomato Loan"
        description="Tomato loan description"
        cardColor="#FFFFFF"
        onPress={onPressMock}
        buttonText="Learn more"
        loanAmount="20000"
        interestRate="4.5%"
      />,
    );
    const buttonElement = getByText("Learn more");
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });
});
