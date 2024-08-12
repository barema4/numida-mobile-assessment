import { gql } from "@apollo/client";

/**
 * Retrieves the loan products from the server.
 *
 * @returns {Promise<LoanProduct[]>} A promise that resolves to an array of loan products.
 */
const LOAN_PRODUCTS_QUERY = gql`
  query LoanProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;

const GET_LOAN_APPLICATIONS = gql`
  query LoanApplications {
    loanApplications {
      id
      fullName
      email
      loanAmount
      loanPurpose
    }
  }
`;

export { LOAN_PRODUCTS_QUERY, GET_LOAN_APPLICATIONS };
