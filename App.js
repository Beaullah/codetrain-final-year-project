// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import UploadMoneyScreen from "./screens/UploadMoneyScreen";
import SavingsScreen from "./screens/Savings";
import Dashboard from "./screens/Dashboard"; // Import Dashboard
import Budgeting from "./screens/Budgeting"; // Import Budgeting
import SignUpScreen from "./screens/SignUp";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UploadMoney" component={UploadMoneyScreen} />
        <Stack.Screen name="Budgeting" component={Budgeting} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="Savings" component={SavingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
