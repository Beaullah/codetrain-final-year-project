import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome, FontAwesome5, Entypo } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  // Define a function to navigate to the specified screen
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };
  const [transactions, useTransactions] = useState([
    { name: "paid school fees", id: 1, Amount: 100 },
    { name: "paid geocory", id: 2, Amount: 100 },
    { name: "paid tickets", id: 3, Amount: 100 },
    { name: "paid saving", id: 4, Amount: 100 },
    { name: "paid investments", id: 5, Amount: 100 },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ama Attah Aidoo</Text>
        <View style={{ marginRight: 30 }}>
          <Image
            source={require("../assets/Profile.jpeg")}
            style={{
              height: 50,
              width: 50,

              borderRadius: 100,
            }}
          />
        </View>
      </View>
      <View style={styles.TotalAmount}>
        <View style={styles.Amount}>
          <Text>Total Balance Score: 12000</Text>
        </View>
      </View>
      <View style={styles.icons}>
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
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigateToScreen("Savings")}
        >
          <View style={styles.buttonContent}>
            <FontAwesome5 name="piggy-bank" size={24} color="black" />
            {/* <Image
            source={require("./path-to-savings-image.png")}
            style={styles.buttonImage}
          /> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigateToScreen("Dashboard")}
        >
          <View style={styles.buttonContent}>
            <FontAwesome name="dashboard" size={24} color="black" />
            {/* <Image
            source={require("./path-to-dashboard-image.png")}
            style={styles.buttonImage}
          /> */}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigateToScreen("Budgeting")}
        >
          <View style={styles.buttonContent}>
            <Entypo name="suitcase" size={24} color="black" />
            {/* <Image
            source={require("./path-to-budgeting-image.png")}
            style={styles.buttonImage}
          /> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.Trans}>
        <Text style={{ color: "grey", fontSize: 24 }}>Recent Transactions</Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          style={{ borderTopRightRadius: 100 }}
          data={transactions}
          renderItem={({ item }) => (
            <View>
              <View style={styles.List}>
                <Text style={styles.listItem}>{item.name} </Text>
                <Text style={styles.listItem}>{item.Amount}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    // paddingVertical: 16,
    // alignItems: "center",
  },
  Trans: {
    flexDirection: "row",
    margin: 20,
  },
  title: {
    fontSize: 20,
    width: "50%",
    fontWeight: "bold",
    // color: "#FFCB05",
  },
  button: {
    backgroundColor: "#7E3FBF",
    padding: 10,
    width: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFCB05",
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

  TotalAmount: {
    padding: 10,

    marginHorizontal: 10,
    marginVertical: 10,

    flexDirection: "row",
    justifyContent: "center",
  },
  Amount: {
    height: 60,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "orange",
  },
  icons: {
    flexDirection: "row",
  },
  List: {
    flexDirection: "row",
    backgroundColor: "#FFCB05",
    marginBottom: 10,
  },
  listItem: {
    padding: 15,
    textTransform: "uppercase",
    color: "grey",
  },
  flatListContainer: {
    flex: 1,
    borderTopLeftRadius: 20, // Adjust the radius as needed
    borderTopRightRadius: 20, // Adjust the radius as needed
    overflow: "hidden", // This is important to clip the top corners
  },
});

export default HomeScreen;
