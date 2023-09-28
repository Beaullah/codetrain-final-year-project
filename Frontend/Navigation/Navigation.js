// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import UploadMoneyScreen from "../screens/UploadMoneyScreen";
import SavingsScreen from "../screens/Savings";
import Dashboard from "../screens/Dashboard"; // Import Dashboard
import Budgeting from "../screens/Budgeting"; // Import Budgeting
import SignUp from "../screens/SignUp";
import User from "../screens/User";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff", // Customize the background color
          },
          headerTintColor: "black", // Customize the text color
          headerTitleStyle: {
            fontWeight: "bold", // Customize title font style
          },
          headerTitleAlign: "center",
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={User} />
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UploadMoney" component={UploadMoneyScreen} />
        <Stack.Screen name="Budgeting" component={Budgeting} />
        <Stack.Screen name="Sign Up" component={SignUp} />

        <Stack.Screen name="Savings" component={SavingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
