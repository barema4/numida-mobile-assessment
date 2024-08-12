import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { MockedProvider } from "@apollo/client/testing";
import LoanApplicationList from "./index";
import { GET_LOAN_APPLICATIONS } from "../../graphql/queries";

const mocks = {
  loading: [
    {
      request: {
        query: GET_LOAN_APPLICATIONS,
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
        query: GET_LOAN_APPLICATIONS,
      },
      error: new Error("An error occurred"),
    },
  ],
  success: [
    {
      request: {
        query: GET_LOAN_APPLICATIONS,
      },
      result: {
        data: {
          loanApplications: [
            {
              id: "1",
              fullName: "John Doe",
              email: "john@example.com",
              loanAmount: 1000,
              loanPurpose: "Home Improvement",
            },
            {
              id: "2",
              fullName: "Jane Smith",
              email: "jane@example.com",
              loanAmount: 2000,
              loanPurpose: "Debt Consolidation",
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
        <LoanApplicationList />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("spinner")).toBeTruthy();
    });
  });

  it("shows an error message when there is an error", async () => {
    render(
      <MockedProvider mocks={mocks.error} addTypename={false}>
        <LoanApplicationList />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("Error: An error occurred")).toBeTruthy();
    });
  });

  it("renders loan applications correctly when data is available", async () => {
    render(
      <MockedProvider mocks={mocks.success} addTypename={false}>
        <LoanApplicationList />
      </MockedProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeTruthy();
      expect(screen.getByText("Jane Smith")).toBeTruthy();
    });
  });
});
