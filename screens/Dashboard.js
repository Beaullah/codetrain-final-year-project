import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Dashboard = () => {
  // Sample data for investments, credit cards, and loans (replace with actual data)
  const investments = [
    { name: "Investment 1", balance: 5000 },
    { name: "Investment 2", balance: 8000 },
  ];

  const creditCards = [
    { name: "Credit Card 1", balance: -1000 },
    { name: "Credit Card 2", balance: -500 },
  ];

  const loans = [
    { name: "Loan 1", balance: 2000 },
    { name: "Loan 2", balance: 1500 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Investments</Text>
        {investments.map((investment, index) => (
          <View key={index} style={styles.item}>
            <Text>{investment.name}</Text>
            <Text>${investment.balance}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Credit Cards</Text>
        {creditCards.map((creditCard, index) => (
          <View key={index} style={styles.item}>
            <Text>{creditCard.name}</Text>
            <Text>${creditCard.balance}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Loans</Text>
        {loans.map((loan, index) => (
          <View key={index} style={styles.item}>
            <Text>{loan.name}</Text>
            <Text>${loan.balance}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 5,
    elevation: 2,
  },
});

export default Dashboard;
