import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/client";
import Card from "../Card";
import Button from "../Button";
import Gap from "../Gap";
import Spinner from "../Spinner";
import { DashboardProps } from "../../types/interfaces";
import { LOAN_PRODUCTS_QUERY } from "../../graphql/queries";

interface LoanProduct {
  id: string;
  name: string;
  maximumAmount: number;
  interestRate: number;
}

const Dashboard = ({ navigation }: DashboardProps) => {
  const { loading, error, data } = useQuery(LOAN_PRODUCTS_QUERY);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const loanProducts = (data?.loanProducts as LoanProduct[]) || [];

  return (
    <View style={styles.container}>
      <Gap />
      <Gap />
      <Text style={styles.heading}>
        Loan Application <Text>Dashboard</Text>
      </Text>
      <Gap />
      <Gap />
      {loading ? (
        <View style={styles.centeredContainer}>
          <Spinner />
        </View>
      ) : loanProducts.length === 0 ? (
        <Text>No loan products available</Text>
      ) : (
        <>
          <FlatList
            data={loanProducts}
            renderItem={({ item }) => (
              <Card
                key={item.id}
                title={item.name}
                description="Maximum Amount"
                buttonText="Learn More"
                onPress={() => {}}
                loanAmount={`$${item.maximumAmount}`}
                interestRate={`${item.interestRate}%`}
              />
            )}
          />
          <View style={styles.bottomContainer}>
            <Button
              title="APPLY FOR A LOAN"
              onPress={() => navigation.navigate("LoanApplicationForm")}
              style={styles.applyButton}
              textStyle={styles.applyButtonText}
            />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    marginTop: "auto",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    width: "45%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
  },
  learnMoreButton: {
    borderRadius: 20,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: "#30C2E3",
    padding: 15,
  },
  applyButtonText: {
    color: "#FFFFFF",
    fontWeight: 400,
    textAlign: "center",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default Dashboard;
