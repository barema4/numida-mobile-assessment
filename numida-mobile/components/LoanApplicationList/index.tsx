import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_LOAN_APPLICATIONS } from "../../graphql/queries";
import Gap from "../Gap";
import Spinner from "../Spinner";

interface LoanApplication {
  id: string;
  fullName: string;
  email: string;
  loanAmount: number;
  loanPurpose: string;
}

const LoanApplicationList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOAN_APPLICATIONS, {
    fetchPolicy: "no-cache",
  });

  if (error) return <Text>Error: {error?.message}</Text>;

  const renderItem = ({ item }: { item: LoanApplication }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.fullName}</Text>
      <Text style={styles.amount}>Amount: {item.loanAmount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Gap />
      <Gap />
      <Text style={styles.heading}>Your Loan Applications</Text>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={data.loanApplications}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D1F2F0",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  amount: {
    fontSize: 16,
  },
});

export default LoanApplicationList;
