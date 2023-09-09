import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import UploadMoneyScreen from "./UploadMoneyScreen";

const Budgeting = ({ route }) => {
  const [income, setIncome] = useState("");
  const [fixedExpenses, setFixedExpenses] = useState("");
  const [variableExpenses, setVariableExpenses] = useState("");

  // Extract uploaded money from the route params
  const { uploadedMoneyScreen } = route.params;

  useEffect(() => {
    // You can set the uploaded money as the initial income value
    setIncome(uploadedMoney.toString());
  }, [uploadedMoney]);

  const handleCalculate = () => {
    // Implement your budget calculation logic here
  };

  return (
    <View>
      <Text>Budgeting Screen</Text>
      <TextInput
        placeholder="Enter Income"
        value={income}
        onChangeText={(text) => setIncome(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter Fixed Expenses"
        value={fixedExpenses}
        onChangeText={(text) => setFixedExpenses(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Enter Variable Expenses"
        value={variableExpenses}
        onChangeText={(text) => setVariableExpenses(text)}
        keyboardType="numeric"
      />
      <Button title="Calculate Budget" onPress={handleCalculate} />
    </View>
  );
};

export default Budgeting;
