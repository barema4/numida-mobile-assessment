import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  LoanApplicationForm: undefined;
  Dashboard: undefined;
  LoanApplicationList: undefined;
};

type DashboardProps = NativeStackScreenProps<RootStackParamList, "Dashboard">;
type LoanApplicationFormProps = NativeStackScreenProps<
  RootStackParamList,
  "LoanApplicationForm"
>;
type LoanApplicationListProps = NativeStackScreenProps<
  RootStackParamList,
  "LoanApplicationList"
>;

export {
  RootStackParamList,
  DashboardProps,
  LoanApplicationFormProps,
  LoanApplicationListProps,
};
