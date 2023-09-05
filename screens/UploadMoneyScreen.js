import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const UploadMoneyScreen = () => {
  const [amount, setAmount] = useState(""); // State to store the input amount

  const handleUploadMoney = () => {
    // Handle the logic to upload money (e.g., make an API call to process the transaction)
    // You can add your implementation here
    console.log(`Uploading ${amount} dollars...`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Money</Text>
      <Text style={styles.label}>Enter the amount to upload:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 100)"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleUploadMoney}
        disabled={!amount}
      >
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFCB05",
    padding: 16,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default UploadMoneyScreen;
