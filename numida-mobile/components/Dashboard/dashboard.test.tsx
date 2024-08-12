import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { MockedProvider } from "@apollo/client/testing";
import Dashboard from "./index";
import { LOAN_PRODUCTS_QUERY } from "../../graphql/queries";

type RootStackParamList = {
  Dashboard: undefined;
  LoanApplicationForm: undefined;
};

type MockRouteProp = RouteProp<RootStackParamList, "Dashboard">;

const mockRoute: MockRouteProp = {
  key: "Dashboard",
  name: "Dashboard",
  params: undefined,
};

type MockNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

const mockNavigate = jest.fn();
//@ts-ignore
const mockNavigation: MockNavigationProp = {
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

const mocks = {
  loading: [
    {
      request: {
        query: LOAN_PRODUCTS_QUERY,
      },
      result: {
        data: {
          loanProducts: [],
        },
      },
    },
  ],
  error: [
    {
      request: {
        query: LOAN_PRODUCTS_QUERY,
      },
      error: new Error("An error occurred"),
    },
  ],
  success: [
    {
      request: {
        query: LOAN_PRODUCTS_QUERY,
      },
      result: {
        data: {
          loanProducts: [
            {
              id: "1",
              name: "Personal Loan",
              maximumAmount: 5000,
              interestRate: 5,
            },
            {
              id: "2",
              name: "Home Loan",
              maximumAmount: 200000,
              interestRate: 3.5,
            },
          ],
        },
      },
    },
  ],
};

describe("Dashboard", () => {
  it("shows a spinner when loading", async () => {
    render(
      <MockedProvider mocks={mocks.loading} addTypename={false}>
        <Dashboard navigation={mockNavigation} route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("spinner")).toBeTruthy();
    });
  });

  it("shows an error message when there is an error", async () => {
    render(
      <MockedProvider mocks={mocks.error} addTypename={false}>
        <Dashboard navigation={mockNavigation} route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Error: An error occurred")).toBeTruthy();
    });
  });

  it("shows a no data message when there are no loan products", async () => {
    render(
      <MockedProvider mocks={mocks.loading} addTypename={false}>
        <Dashboard navigation={mockNavigation} route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("No loan products available")).toBeTruthy();
    });
  });

  it("renders loan products correctly when data is available", async () => {
    render(
      <MockedProvider mocks={mocks.success} addTypename={false}>
        <Dashboard navigation={mockNavigation} route={mockRoute} />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Personal Loan")).toBeTruthy();
      expect(screen.getByText("Home Loan")).toBeTruthy();
    });

    const applyButton = screen.getByText("APPLY FOR A LOAN");
    expect(applyButton).toBeTruthy();
  });
});
