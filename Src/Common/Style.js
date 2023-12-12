// import from react
import React from "react";
// import from react native
import { StyleSheet } from "react-native";
// import from constants
import Colors from "../constants/Colors";
// for styles
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 0.3,
    width: "100%",
    backgroundColor: Colors.gray,
    opacity: 0.8,
  },
  boldText: {
    fontWeight: "bold",
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
});

export default Styles;
