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

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      // Format the date to display day, month, and year only
      const options = { day: "numeric", month: "long", year: "numeric" };
      const formatted = currentDate.toLocaleDateString(undefined, options);
      setFormattedDate(formatted);

      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  // Budget states
  const [budgets, setBudgets] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addBudget = () => {
    if (category && description) {
      // Create a new budget item object
      const newBudget = {
        id: Math.random().toString(), // You should use a more reliable ID generation method in production
        category,
        description,
      };

      // Add the new budget item to the list
      setBudgets((prevBudgets) => [...prevBudgets, newBudget]);

      // Clear the input fields
      setCategory("");
      setDescription("");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <View>
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
          mode="date"
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

      {/* Categories */}
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
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <View style={styles.addBudgetButton}>
          <Text style={{ color: "#fff" }} onPress={addBudget}>
            ADD BUDGET
          </Text>
        </View>
      </View>

      <FlatList
        data={budgets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.budgetItem}>
            <Text>Category: {item.category}</Text>
            <Text>Description: {item.description}</Text>
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
});

export default Budgeting;
