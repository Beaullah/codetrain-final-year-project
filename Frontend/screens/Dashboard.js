import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Dashboard = () => {
  const [statistics, setStatistics] = useState({
    totalIncome: 5000,
    totalExpenses: 3500,
    savings: 1500,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Total Income</Text>
        <Text style={styles.cardValue}>${statistics.totalIncome}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Total Expenses</Text>
        <Text style={styles.cardValue}>${statistics.totalExpenses}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Savings</Text>
        <Text style={styles.cardValue}>${statistics.savings}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7C3FBF",
  },
  cardValue: {
    fontSize: 20,
    color: "#333",
  },
});

export default Dashboard;
