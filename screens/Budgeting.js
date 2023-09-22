import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { globalStyles } from "../styles/Global";

const Budgeting = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = (_, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setDate(currentDate);

      // Format the date to display day, month, year, hour, and minute
      const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      const formatted = currentDate.toLocaleDateString(undefined, options);
      setFormattedDate(formatted);

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    }
  };

  const addBudget = () => {
    if (category && description && amount) {
      // Create a new budget item object
      const newBudget = {
        id: Math.random().toString(), // You should use a more reliable ID generation method in production
        category,
        description,
        amount,
        date: formattedDate, // Include the formatted date and time
      };

      // Add the new budget item to the list
      setBudgets((prevBudgets) => [...prevBudgets, newBudget]);

      // Clear the input fields
      setCategory("");
      setDescription("");
      setAmount("");
      setFormattedDate("");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <View style={styles.budgetTitle}>
        <View>
          <Text>Budget</Text>
        </View>
        <View>
          <Text>Available Balance: 12000</Text>
        </View>
      </View>

      {/* Datepicker */}
      {showPicker && (
        <DateTimePicker
          mode="datetime"
          display="spinner"
          value={date}
          onChange={onChange}
        />
      )}

      {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            placeholder="Pick a date"
            editable={false}
            value={formattedDate}
          />
        </Pressable>
      )}

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          value={amount}
          onChangeText={(number) => setAmount(number)}
        />

        <View style={styles.addBudgetButton}>
          <Text style={{ color: "#fff" }} onPress={addBudget}>
            ADD BUDGET
          </Text>
        </View>
      </View>

      {/* Budget Items */}
      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.budgetItem}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.amount}>Amount: {item.amount}</Text>
            <Text style={styles.date}>Date: {item.date}</Text>
            <View style={styles.buttonsContainer}>
              <Button title="Edit" onPress={() => editBudget(item.id)} />
              <Button title="Delete" onPress={() => deleteBudget(item.id)} />
              <Button title="Send" onPress={() => sendBudget(item.id)} />
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  addBudgetButton: {
    flexDirection: "row",
    height: 40,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#7E3FBF",
  },
  budgetTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  budgetItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  category: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Budgeting;
