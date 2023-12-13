// import from react
import React from "react";
// import from react native
import { StyleSheet, Text, View } from "react-native";
//import from components
import { dummyData } from "../../components/dummyData";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import Colors from "../../constants/Colors";

const CompletedExamScreen = ({ navigation }) => {
  // for colors and darkmode
  const { colors,isDarkMode } = useStateContext();
  // for styles
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      color: colors.textColor,
    },
    card: {
      width: "95%",
      padding: 20,
      borderRadius: 10,
      // elevation: 1,
      backgroundColor: colors.cardBackground,
      margin: 10,
    },
    cardText: {
      fontSize: 18,
      marginBottom: 10,
      color: colors.textColor,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam Completed!</Text>
      {dummyData.completed.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.cardText}>Course Name: {item.coursename}</Text>
          <Text style={styles.cardText}>Timing: {item.timing}</Text>
          <Text style={styles.cardText}>Status: {item.status}</Text>
        </View>
      ))}
    </View>
  );
};

export default CompletedExamScreen;
