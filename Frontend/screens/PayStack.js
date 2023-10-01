import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PayStack() {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);

  return (
    <View style={{ flex: 1 }}>
      <Paystack
        paystackKey="pk_test_db491326018f5a2e5bdfbcd97a67cb5a76729d5d"
        paystackSecretKey="sk_test_5182a38c0acaf241bee771522baa457c4efa480a"
        billingEmail="bonita19fummey@gmail.com"
        billingMobile="0551442563"
        billingName="Ama Attah"
        currency="GHS"
        amount={"25000.00"}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res);
        }}
        ref={paystackWebViewRef}
      />

      <TouchableOpacity
        onPress={() => paystackWebViewRef.current.startTransaction()}
      >
        <Text>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}
