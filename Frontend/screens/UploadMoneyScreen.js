import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { globalStyles } from "../styles/Global";
const UploadMoneyScreen = ({ navigation }) => {
  const [amount, setAmount] = useState(""); // State to store the input amount

  const handleUploadMoney = () => {
    // Handle the logic to upload money (e.g., make an API call to process the transaction)
    // You can add your implementation here
    const uploadedMoney = 1000; // Replace this with the actual uploaded amount
    navigation.navigate("Budgeting", { uploadedMoney });
    console.log(`Uploading ${amount} dollars...`);
  };
  // Inside the function that handles money upload

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../assets/Profile.jpeg")}
          style={{
            height: 80,
            width: 80,

            borderRadius: 100,
          }}
        />
        <Text style={styles}>Ama Atta Aidoo</Text>
      </View>

      <Text style={styles.title}>Upload Money</Text>

      <Text style={styles.label}>Enter the amount to upload:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 100)"
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <TouchableOpacity style={globalStyles.Button}>
        <Text style={globalStyles.ButtonText}>Upload Money</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",

    rowGap: 20,
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
  profile: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 100,
  },
});

export default UploadMoneyScreen;
