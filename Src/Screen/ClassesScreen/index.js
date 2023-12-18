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
import UpcomingClassScreen from "../UpcomingClassScreen";
import CompletedClassScreen from "../CompletedClassScreen";
import ClassHistoryScreen from "../ClassHistoryScreen";



const ClassesScreen = ({ navigation }) => {
  // use for colors
  const { colors, isDarkMode } = useStateContext();
  // states for tab
  const [activeTab, setActiveTab] = useState("Upcoming Class");

  const renderScreen = () => {
    switch (activeTab) {
      case "Upcoming Class":
        return <UpcomingClassScreen />;
      case "Completed Class":
        return <CompletedClassScreen />;
      case "Class History":
        return <ClassHistoryScreen />;
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
      paddingVertical: SIZES.radius,
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
           <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Class</Text>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <Button
          mode={activeTab === "Upcoming Class" ? "contained" : "text"}
          onPress={() => setActiveTab("Upcoming Class")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Upcoming Class" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Upcoming Class" ? "white" : COLORS.violet,
            fontWeight: "bold",
          }}
        >
          Upcoming
        </Button>

        <Button
          mode={activeTab === "Completed Class" ? "contained" : "text"}
          onPress={() => setActiveTab("Completed Class")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Completed Class" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Completed Class" ? "white" : COLORS.violet,
            fontWeight: "bold",
          }}
        >
          Completed
        </Button>

        <Button
          mode={activeTab === "Class History" ? "contained" : "text"}
          onPress={() => setActiveTab("Class History")}
          style={{
            width: "33%",
            backgroundColor:
              activeTab === "Class History" ? COLORS.violet : "transparent",
          }}
          labelStyle={{
            color: activeTab === "Class History" ? "white" : COLORS.violet,
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

export default ClassesScreen;
