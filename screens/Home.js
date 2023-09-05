import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // Define a function to navigate to the specified screen
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to UserName</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFCB05" }]}
        onPress={() => navigateToScreen("UploadMoney")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="money" size={24} color="black" />

          {/* <Image
            source={require("./path-to-upload-image.png")}
            style={styles.buttonImage}
          /> */}
          <Text style={styles.buttonText}>Upload Money</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFCB05" }]}
        onPress={() => navigateToScreen("Savings")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome5 name="piggy-bank" size={24} color="black" />
          {/* <Image
            source={require("./path-to-savings-image.png")}
            style={styles.buttonImage}
          /> */}
          <Text style={styles.buttonText}>Savingsss</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFCB05" }]}
        onPress={() => navigateToScreen("Dashboard")}
      >
        <View style={styles.buttonContent}>
          <FontAwesome name="dashboard" size={24} color="black" />
          {/* <Image
            source={require("./path-to-dashboard-image.png")}
            style={styles.buttonImage}
          /> */}
          <Text style={styles.buttonText}>Dashboard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#FFCB05" }]}
        onPress={() => navigateToScreen("Budgeting")}
      >
        <View style={styles.buttonContent}>
          <Entypo name="suitcase" size={24} color="black" />
          {/* <Image
            source={require("./path-to-budgeting-image.png")}
            style={styles.buttonImage}
          /> */}
          <Text style={styles.buttonText}>Budgeting</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    backgroundColor: "#FFFFF7",
    paddingVertical: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFCB05",
    width: "50%",
  },
  button: {
    backgroundColor: "#FFCB05",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    marginLeft: 10, // Add spacing between image and text
  },
  buttonImage: {
    width: 50, // Adjust the width of the image
    height: 50, // Adjust the height of the image
    resizeMode: "contain",
  },
});

export default HomeScreen;
