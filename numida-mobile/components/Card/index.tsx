import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import OutlinedButton from "../OutlinedButton";

interface CardProps {
  title: string;
  description: string;
  cardColor?: string;
  onPress: () => void;
  buttonText: string;
  loanAmount: string;
  interestRate: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  cardColor,
  onPress,
  buttonText,
  loanAmount,
  interestRate,
}) => {
  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.cardDescription}>{description}</Text>
          <Text style={styles.loanAmount}>{loanAmount}</Text>
          <Text style={styles.interestRate}>Interest: {interestRate}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <OutlinedButton
            title={buttonText}
            onPress={onPress}
            textStyle={{ color: "#30C2E3" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2, // For Android shadow
    // shadowColor: '#000',
    borderColor: "#D9D9D9",
    borderWidth: 1,
    height: 170,
    justifyContent: "space-between",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 1,
  },
  cardDescription: {
    fontSize: 14,
  },
  loanAmount: {
    fontSize: 25,
    color: "#30C2E3",
    fontWeight: "bold",
  },
  interestRate: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Card;
