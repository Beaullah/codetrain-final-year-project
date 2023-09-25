import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/Global";
import { FontAwesome, FontAwesome6, Entypo } from "@expo/vector-icons";
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

  // State variables for adding new savings goals
  const [newGoalName, setNewGoalName] = useState("");
  const [newGoalTarget, setNewGoalTarget] = useState("");

  // Function to add a new savings goal
  const addSavingsGoal = () => {
    // Create a new goal object
    const newGoal = {
      id: (savingsGoals.length + 1).toString(), // Generate a unique ID
      name: newGoalName,
      target: parseFloat(newGoalTarget),
      saved: 0, // Initialize saved amount to 0
    };

    // Add the new goal to the existing goals
    setSavingsGoals([...savingsGoals, newGoal]);

    // Clear the input fields
    setNewGoalName("");
    setNewGoalTarget("");
  };

  // Render each savings goal item
  const renderSavingsGoal = ({ item }) => (
    <View style={styles.goalItem}>
      {/* edit and delete section */}
      <View style={styles.goalSetting}>
        <View>
          <Text style={styles.goalName}>{item.name}</Text>
        </View>

        <View style={styles.iconfuntion}>
          <Entypo name="pencil" size={20} color="green" />
          <FontAwesome
            name="times"
            size={20}
            color="red"
            onPress={() =>
              handleDeleteConfirmation(item)
            } /* Handle delete confirmation */
          />
        </View>
      </View>

      <Text style={styles.goalProgress}>
        Progress: {calculateProgress(item)}%
      </Text>
      <Text style={styles.goalSaved}>
        Saved: ${item.saved} of ${item.target}
      </Text>
      <View style={styles.savingButton}>
        <Text style={{ color: "#fff" }} onPress={() => autoSaveMoney(item.id)}>
          Auto-Save
        </Text>
      </View>
    </View>
  );
  // State variables for delete confirmation
  const [itemToDelete, setItemToDelete] = useState(null);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(
    false
  );

  // Function to handle delete confirmation
  const handleDeleteConfirmation = (item) => {
    setItemToDelete(item);
    setDeleteConfirmationVisible(true);
  };

  // Function to delete a savings goal
  const deleteSavingsGoal = () => {
    // Filter out the item to be deleted
    const updatedGoals = savingsGoals.filter((item) => item !== itemToDelete);
    setSavingsGoals(updatedGoals);

    // Close the delete confirmation modal
    setDeleteConfirmationVisible(false);
  };

  // Function to cancel delete action
  const cancelDelete = () => {
    setItemToDelete(null);
    setDeleteConfirmationVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Savings Goals</Text>

      {/* Input fields for adding new savings goals */}

      {/* List of existing savings goals */}
      <TextInput
        style={styles.input}
        placeholder="Goal Name"
        value={newGoalName}
        onChangeText={(text) => setNewGoalName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Goal Target Amount"
        value={newGoalTarget}
        onChangeText={(text) => setNewGoalTarget(text)}
        keyboardType="numeric"
      />
      <View style={styles.savingButton}>
        <Text style={{ color: "#fff" }} onPress={addSavingsGoal}>
          Add goal
        </Text>
      </View>

      {/* Delete Confirmation Modal */}
      <Modal
        visible={deleteConfirmationVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setDeleteConfirmationVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.deleteConfirmation}>
            <Text>Are you sure you want to delete this goal?</Text>
            <View style={styles.confirmationButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={deleteSavingsGoal}
              >
                <Text style={{ color: "#fff" }}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={cancelDelete}
              >
                <Text style={{ color: "#fff" }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
    gap: 15,
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
  input: {
    borderWidth: 1,
    borderColor: "#888",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  savingButton: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#7E3FBF",
  },
  goalSetting: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconfuntion: {
    flexDirection: "row",
    gap: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteConfirmation: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 5,
  },
  confirmationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#7E3FBF",
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
});

export default Savings;
