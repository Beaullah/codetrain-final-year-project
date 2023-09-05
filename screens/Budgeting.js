import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// ...
const Budgeting = () => {
  const [income, setIncome] = useState("");
  const [fixedExpenses, setFixedExpenses] = useState("");
  const [variableExpenses, setVariableExpenses] = useState("");
  const [savingsGoals, setSavingsGoals] = useState([
    { name: "Emergency Fund", allocationPercentage: "40", saved: 0 }, // Include 'saved' property
    { name: "Vacation", allocationPercentage: "30", saved: 0 }, // Include 'saved' property
    { name: "New Laptop", allocationPercentage: "30", saved: 0 }, // Include 'saved' property
  ]);

  const [distributionResults, setDistributionResults] = useState(null); // State for displaying distribution results

  // Function to calculate the total budgeted amount
  const calculateBudgetedAmount = () => {
    // ... (previous code for income, expenses, and input validation)

    // Calculate the total budgeted amount
    const budgetedAmount =
      incomeValue - fixedExpensesValue - variableExpensesValue;

    // Distribute remaining funds to savings goals
    distributeRemainingFunds(budgetedAmount);
  };

  // Function to distribute remaining funds to savings goals based on allocation percentages
  const distributeRemainingFunds = (budgetedAmount) => {
    // Calculate the remaining funds available for savings
    const remainingFunds = budgetedAmount;

    // Calculate the distribution for each goal based on allocation percentages
    const updatedSavingsGoals = savingsGoals.map((goal) => {
      const allocationPercentage = parseFloat(goal.allocationPercentage);
      const allocatedAmount = (allocationPercentage / 100) * remainingFunds;
      return {
        ...goal,
        saved: allocatedAmount, // Update the saved amount for each goal
      };
    });

    // Update the state with the updated savings goals
    setSavingsGoals(updatedSavingsGoals);

    // Provide user feedback on distribution results
    setDistributionResults(updatedSavingsGoals);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      {/* ... (previous code for input fields) */}

      {/* Savings Goals Section */}
      <Text style={styles.sectionTitle}>Savings Goals</Text>
      {savingsGoals.map((goal, index) => (
        <View key={index} style={styles.goalContainer}>
          <Text style={styles.goalName}>{goal.name}</Text>
          <TextInput
            style={styles.allocationInput}
            value={goal.allocationPercentage}
            onChangeText={(text) => {
              const updatedGoals = [...savingsGoals];
              updatedGoals[index].allocationPercentage = text;
              setSavingsGoals(updatedGoals);
            }}
            placeholder="Allocation %" // Handle user input for allocation percentages
            keyboardType="numeric"
          />
        </View>
      ))}

      {/* Calculate Button */}
      <Button title="Calculate Budget" onPress={calculateBudgetedAmount} />

      {/* Display Distribution Results */}
      {distributionResults && (
        <View style={styles.distributionResults}>
          <Text style={styles.sectionTitle}>Distribution Results</Text>
          {distributionResults.map((result, index) => (
            <Text key={index}>
              {result.name}: ${result.saved.toFixed(2)}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};
// ...

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
  // Add styles for input fields, buttons, and other UI elements as needed
});

export default Budgeting;
