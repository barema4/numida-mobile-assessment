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

  const clearState = () => {
    setFullName("");
    setEmail("");
    setLoanAmount("");
    setLoanPurpose("");
  }

  return {
    fullName,
    email,
    loanAmount,
    loanPurpose,
    setFullName,
    setEmail,
    setLoanAmount,
    setLoanPurpose,
    clearState,
  };
};

export default useLoanApplicationForm;
