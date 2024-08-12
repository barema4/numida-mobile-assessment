import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../redux/store/store";
import useLoanApplicationForm from "../../hooks/useLoanApplicationForm";
import Button from "../Button";
import Gap from "../Gap";
import FormField from "../FormField";
import { LoanApplicationFormProps } from "../../types/interfaces";

const LoanApplicationForm = ({ navigation }: LoanApplicationFormProps) => {
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    loanAmount?: string;
    loanPurpose?: string;
  }>({});
  const {
    fullName,
    email,
    loanAmount,
    loanPurpose,
    setFullName,
    setEmail,
    setLoanAmount,
    setLoanPurpose,
    clearState,
  } = useLoanApplicationForm();

  const dispatch = useDispatch<Dispatch>();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.applyForLoan,
  );

  const handleSubmit = useCallback(() => {
    if (!validate()) {
      Alert.alert("Form contains errors", "Please correct the errors");
      return;
    }
    const loanApplicationData = {
      full_name: fullName,
      email,
      loan_amount: loanAmount,
      loan_purpose: loanPurpose,
    };
    dispatch.applyForLoan.applyForLoan(loanApplicationData);
    clearState();
    navigation.navigate("LoanApplicationList");
  }, [fullName, email, loanAmount, loanPurpose, dispatch]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      loanAmount?: string;
      loanPurpose?: string;
    } = {};

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!loanAmount) {
      newErrors.loanAmount = "Loan Amount is required";
    } else if (Number(loanAmount) <= 0) {
      newErrors.loanAmount = "Loan Amount must be a positive number";
    }

    if (!loanPurpose) {
      newErrors.loanPurpose = "Loan Purpose is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <View style={styles.container}>
      <Gap />
      <Text style={styles.heading}>Apply for a loan</Text>
      <Gap />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <SafeAreaView>
          <FormField
            label="Full Name"
            value={fullName}
            placeholder="Name"
            onChangeText={setFullName}
          />
          {errors.fullName && (
            <Text style={styles.errorText}>{errors.fullName}</Text>
          )}
          <FormField
            label="Email"
            value={email}
            placeholder="Email"
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <FormField
            label="Loan Amount"
            value={loanAmount}
            placeholder="Loan Amount"
            onChangeText={setLoanAmount}
            keyboardType="numeric"
          />
          {errors.loanAmount && (
            <Text style={styles.errorText}>{errors.loanAmount}</Text>
          )}
          <FormField
            label="Loan Purpose"
            value={loanPurpose}
            placeholder="Loan Purpose"
            onChangeText={setLoanPurpose}
          />
          {errors.loanPurpose && (
            <Text style={styles.errorText}>{errors.loanPurpose}</Text>
          )}
        </SafeAreaView>
      </ScrollView>
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      <View style={styles.bottomContainer}>
        <Button
          title="SUBMIT"
          onPress={handleSubmit}
          style={styles.applyButton}
          textStyle={styles.applyButtonText}
          loading={isLoading}
          disabled={!fullName || !email || !loanAmount || !loanPurpose}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: "#30C2E3",
    padding: 15,
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontWeight: "400",
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
  bottomContainer: {
    marginTop: "auto",
  },
  errorText: {
    color: "red",
    textAlign: "left",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
});

export default LoanApplicationForm;
