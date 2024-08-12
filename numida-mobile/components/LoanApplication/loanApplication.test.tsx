import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { MockedProvider } from "@apollo/client/testing";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LoanApplicationForm from "./index";

type RootStackParamList = {
  Dashboard: undefined;
  LoanApplicationForm: undefined;
  LoanApplicationList: undefined;
};

type MockRouteProp = RouteProp<RootStackParamList, "LoanApplicationForm">;

const mockRoute: MockRouteProp = {
  key: "LoanApplicationForm",
  name: "LoanApplicationForm",
  params: undefined,
};

const mockNavigate = jest.fn();
//@ts-ignore
const mockNavigation: NativeStackNavigationProp<
  RootStackParamList,
  "LoanApplicationForm"
> = {
  navigate: mockNavigate,
  goBack: jest.fn(),
  reset: jest.fn(),
  dispatch: jest.fn(),
  setParams: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
};

const mockStore = configureStore([]);

describe("LoanApplicationForm", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      applyForLoan: {
        isLoading: false,
        error: null,
      },
    });
  });

  test("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
      </Provider>,
    );

    const headingElement = getByText("Apply for a loan");
    const fullNameInput = getByPlaceholderText("Name");
    const emailInput = getByPlaceholderText("Email");
    const loanAmountInput = getByPlaceholderText("Loan Amount");
    const loanPurposeInput = getByPlaceholderText("Loan Purpose");
    const submitButton = getByText("SUBMIT");

    expect(headingElement).toBeTruthy();
    expect(fullNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(loanAmountInput).toBeTruthy();
    expect(loanPurposeInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  test("disables submit button when form fields are empty", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
      </Provider>,
    );

    const submitButton = getByTestId("button");
    expect(submitButton.props.accessibilityState.disabled).toBe(true);
  });

  test("enables submit button when form fields are filled", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <Provider store={store}>
        <LoanApplicationForm navigation={mockNavigation} route={mockRoute} />
      </Provider>,
    );

    const fullNameInput = getByPlaceholderText("Name");
    const emailInput = getByPlaceholderText("Email");
    const loanAmountInput = getByPlaceholderText("Loan Amount");
    const loanPurposeInput = getByPlaceholderText("Loan Purpose");
    const submitButton = getByTestId("button");

    fireEvent.changeText(fullNameInput, "John Doe");
    fireEvent.changeText(emailInput, "john.doe@example.com");
    fireEvent.changeText(loanAmountInput, "1000");
    fireEvent.changeText(loanPurposeInput, "Personal");

    expect(submitButton.props.accessibilityState.disabled).toBe(false);
  });
});
