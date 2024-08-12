import { useState } from "react";

/**
 * Custom hook for managing loan application form state.
 *
 * @returns An object containing the form state and setter functions.
 */
const useLoanApplicationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  return {
    fullName,
    email,
    loanAmount,
    loanPurpose,
    setFullName,
    setEmail,
    setLoanAmount,
    setLoanPurpose,
  };
};

export default useLoanApplicationForm;
