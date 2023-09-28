import React from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/Global";

const User = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.LogoImage}>
        <Image
          source={require("../assets/Logo0.png")}
          style={globalStyles.Logo}
        />
      </View>

      <Text style={{ fontSize: 28, marginTop: -17 }}>
        Any goal can be acheived
      </Text>
      <View style={styles.subTitle}>
        <Text>With Pocketpay your finacials will be reached</Text>
      </View>

      <TouchableOpacity
        style={globalStyles.Button}
        onPress={() => navigation.navigate("Sign Up")}
      >
        <Text style={globalStyles.ButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={globalStyles.loginContainer}>
        <Text
          style={{ color: "#7C3FBF" }}
          onPress={() => navigation.navigate("Log In")}
        >
          Log In To Your Account
        </Text>
      </View>
      <View style={styles.forgottenPassword}>
        <Text style={{ fontSize: 12 }}>Forgotten password?</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: 100,
    position: "relative",
    top: 1,
  },
  forgottenPassword: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default User;
