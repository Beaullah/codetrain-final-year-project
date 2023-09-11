import React from "react";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/Global";

const User = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.LogoImage}>
        <Image
          source={require("../assets/FinalLogo.png")}
          style={globalStyles.Logo}
        />
      </View>

      <Text style={{ fontSize: 28, marginTop: -17 }}>
        Any goal can be acheived
      </Text>
      <View style={styles.subTitle}>
        <Text>With Pocketpay your finacials will be reached</Text>
      </View>

      <TouchableOpacity style={globalStyles.Button}>
        <Text style={globalStyles.ButtonText}>SignUp</Text>
      </TouchableOpacity>
      <View style={globalStyles.loginContainer}>
        <Text
          style={{ color: "#7C3FBF" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Log In To Your Account
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  subTitle: {
    flexDirection: "row",
    justifyContent: "center",
    fontWeight: 100,
    position: "relative",
    top: 20,
  },
});

export default User;
