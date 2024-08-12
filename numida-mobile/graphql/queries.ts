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

export { LOAN_PRODUCTS_QUERY };
