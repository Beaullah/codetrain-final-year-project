import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  Button: {
    flexDirection: "row",
    height: 40,
    padding: 10,
    marginTop: 100,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 8,
    justifyContent: "center",
    backgroundColor: "#7E3FBF",

    // color: "#ffff",
  },
  ButtonText: {
    color: "#fff",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  semiContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  Logo: {
    marginTop: -20,
    height: 300,
    width: 300,
  },
});
