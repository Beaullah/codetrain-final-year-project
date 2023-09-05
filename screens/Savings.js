import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const Savings = () => {
  // Sample data for savings goals (replace with actual data)
  const [savingsGoals, setSavingsGoals] = useState([
    { id: "1", name: "Emergency Fund", target: 5000, saved: 2500 },
    { id: "2", name: "Vacation", target: 2000, saved: 1000 },
    { id: "3", name: "New Laptop", target: 1000, saved: 750 },
  ]);

  // Function to calculate the progress percentage for a goal
  const calculateProgress = (goal) => {
    return ((goal.saved / goal.target) * 100).toFixed(2);
  };

  // Function to automatically save money to a goal
  const autoSaveMoney = (goalId) => {
    // Implement the logic to auto-save money to the selected goal
    // You can add your implementation here
    console.log(`Auto-saving money to goal with ID: ${goalId}`);
  };

  // Render each savings goal item
  const renderSavingsGoal = ({ item }) => (
    <View style={styles.goalItem}>
      <Text style={styles.goalName}>{item.name}</Text>
      <Text style={styles.goalProgress}>
        Progress: {calculateProgress(item)}%
      </Text>
      <Text style={styles.goalSaved}>
        Saved: ${item.saved} of ${item.target}
      </Text>
      <Button title="Auto-Save" onPress={() => autoSaveMoney(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Goals</Text>
      <FlatList
        data={savingsGoals}
        keyExtractor={(item) => item.id}
        renderItem={renderSavingsGoal}
      />
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
  goalItem: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 5,
    marginBottom: 10,
  },
  goalName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  goalProgress: {
    fontSize: 16,
    color: "#0077FF", // Blue color for progress
  },
  goalSaved: {
    fontSize: 16,
  },
});

export default Savings;
