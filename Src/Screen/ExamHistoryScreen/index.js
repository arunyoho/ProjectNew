// import from react
import React from "react";
// import from react native
import { FlatList, StyleSheet, Text, View } from "react-native";
// import from components
import { dummyData } from "../../components/dummyData";
// import from constants
import Colors from "../../constants/Colors";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const ExamHistoryScreen = () => {
  
// for colors and darkmode
  const { colors,isDarkMode } = useStateContext();
  // for styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      width: "100%",
      padding: 20,
      borderRadius: 10,
      marginBottom: 15,
      backgroundColor: colors.cardBackground,
      borderRadius: 10,
      // elevation: 5, // Add elevation for a card-like shadow
    },
    cardText: {
      fontSize: 18,
      marginBottom: 10,
      color: colors.textColor,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam History</Text>

      <FlatList
        data={dummyData.examHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Course Name: {item.courseName}</Text>
            <Text style={styles.cardText}>Timing: {item.timing}</Text>
            <Text style={styles.cardText}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExamHistoryScreen;
