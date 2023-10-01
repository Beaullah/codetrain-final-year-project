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
import { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
// import PayStack from "./PayStack";
const UploadMoneyScreen = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  const sendMoney = () => {
    paystackWebViewRef.current.startTransaction();
  };
  const handlePaymentSuccess = () => {
    if (sendMoney) navigation.navigate("Home", { amount: amount });
    return;
  };
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

      <Text style={styles.label}>Enter the amount to upload:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount (e.g., 100)"
        keyboardType="numeric"
        value={amount}
        onChangeText={(Text) => setAmount(Text)}
      />

      <Paystack
        paystackKey="pk_test_db491326018f5a2e5bdfbcd97a67cb5a76729d5d"
        paystackSecretKey="sk_test_5182a38c0acaf241bee771522baa457c4efa480a"
        billingEmail="bonita19fummey@gmail.com"
        billingMobile="0551442563"
        billingName="Ama Attah"
        currency="GHS"
        amount={amount}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={handlePaymentSuccess}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity onPress={sendMoney}>
        <Text>Pay Now</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={globalStyles.Button}>
        <Text style={{ color: "#fff" }}>Pay Now</Text>
      </TouchableOpacity> */}
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
