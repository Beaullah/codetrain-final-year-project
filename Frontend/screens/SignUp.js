// screens/SignUpScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "../assets/Logo.png";
import { globalStyles } from "../styles/Global";
import { connect } from "react-redux";
import { createEmailAccout, registerError } from "../redux/Actions/authActions";

const SignUp = ({ navigation, auth }) => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmpassword, setcomfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement user registration logic here
    if (password !== comfirmpassword) {
      alert("Password doesn't match!");
      return;
      // registerError("Passwords do not match");
      // return;
    }

    // You can use an API to register the user

    navigation.navigate("Home");
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.greetings}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          It's a great Choice!
        </Text>
        <Text></Text>
        <Text>We will make you reach your great potential</Text>
      </View>
      <View>
        {auth.error.register && (
          <Text style={{ color: "red" }}>{auth.error.register}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Number"
          value={number}
          onChangeText={(text) => setNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Comfirm password"
          value={comfirmpassword}
          onChangeText={(text) => setcomfirmPassword(text)}
          secureTextEntry
        />

        <TouchableOpacity style={styles.SignUpButton} onPress={handleSignUp}>
          <Text style={{ color: "#fff" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff", // Background color for the entire screen (white)
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFCB05", // MTN Yellow color
    width: "80%", // Adjust the width as needed
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  loginText: {
    marginTop: 20,
    fontSize: 16,
  },
  loginLink: {
    color: "#007AFF", // You can use a different color for the link (blue)
    fontWeight: "bold",
  },
  SignUp: {
    height: 20,
    width: "50%",
    padding: 20,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#FFCB05",
    borderRadius: 100,
  },
  greetings: {
    // marginHorizontal: 30,
    marginBottom: 30,
  },
  SignUpButton: {
    flexDirection: "row",
    height: 40,
    padding: 10,
    marginTop: 200,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#7E3FBF",
  },
});
const mapStateToProp = (state) => {
  return { auth: state };
};
export default connect(mapStateToProp, { createEmailAccout, registerError })(
  SignUp
);
