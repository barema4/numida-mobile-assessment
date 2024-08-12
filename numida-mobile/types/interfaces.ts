import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  LoanApplicationForm: undefined;
  Dashboard: undefined;
};

type DashboardProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;
type LoanApplicationFormProps = NativeStackScreenProps<
  RootStackParamList,
  "LoanApplicationForm"
>;

export { RootStackParamList, DashboardProps, LoanApplicationFormProps };
