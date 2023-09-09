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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Implement user registration logic here
    // You can use an API to register the user
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/UndrawLogo.png")}
        style={{ height: 200, width: 200 }}
      />
      {/* <Image source={Logo} style={{ height: 200, width: 200, marginTop: 0 }} /> */}
      <Text style={styles.title} numberOfLines={2} textAlign="center">
        Manage Your Money With PocketPay
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.SignUp}>
        <Text style={{ textAlign: "center" }}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate("Home")}
        >
          Log In
        </Text>
      </Text>
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
});

export default SignUpScreen;
