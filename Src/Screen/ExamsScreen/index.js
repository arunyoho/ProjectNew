// import from expo vector
import { Ionicons } from "@expo/vector-icons";
// import from react
import React, { useState } from "react";
// import from react native
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import from react native paper
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import Colors from "../../constants/Colors";
import { COLORS, SIZES } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from screen
import CompletedExamScreen from "../CompletedExamScreen";
import ExamHistoryScreen from "../ExamHistoryScreen";
import UpcomingExamScreen from "../UpcomingExamScreen";

const ExamsScreen = ({ navigation }) => {
  // use for colors
  const { colors, isDarkMode } = useStateContext();
  // states for tab
  const [activeTab, setActiveTab] = useState("Upcoming Exam");

  const renderScreen = () => {
    switch (activeTab) {
      case "Upcoming Exams":
        return <UpcomingExamScreen />;
      case "Completed Exams":
        return <CompletedExamScreen />;
      case "Exam History":
        return <ExamHistoryScreen />;
      default:
        return null;
    }
  };
// for styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius * 2,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    tabContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: SIZES.radius * 2,
      paddingBottom: SIZES.radius,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      // backgroundColor: COLORS.lightblue,
      // borderRadius:26,
    },
    tab: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Exam</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Button
          mode={activeTab === "Upcoming Exams" ? "contained" : "text"}
          onPress={() => setActiveTab("Upcoming Exams")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Upcoming Exams" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Upcoming Exams" ? "white" : COLORS.violet,
            fontWeight: "bold",
          }}
        >
          Upcoming
        </Button>

        <Button
          mode={activeTab === "Completed Exams" ? "contained" : "text"}
          onPress={() => setActiveTab("Completed Exams")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Completed Exams" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Completed Exams" ? "white" : COLORS.violet,
            fontWeight: "bold",
          }}
        >
          Completed
        </Button>

        <Button
          mode={activeTab === "Exam History" ? "contained" : "text"}
          onPress={() => setActiveTab("Exam History")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Exam History" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Exam History" ? "white" : COLORS.violet,
            fontWeight: "bold",
          }}
        >
          History
        </Button>
      </View>

      {renderScreen()}
    </SafeAreaView>
  );
};

export default ExamsScreen;
