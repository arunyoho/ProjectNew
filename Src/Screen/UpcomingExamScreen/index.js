// import from react
import React from "react";
// import from react native
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from componenets
import { dummyData } from "../../components/dummyData";
// import from constants
import { SIZES } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from screen
import ExamDetailedScreen from "../ExamDetailedScreen";
// import from constants
import Colors from "../../constants/Colors";

const UpcomingExamScreen = ({ navigation }) => {
  // for colors and isdarkmode
  const { colors,isDarkMode } = useStateContext();

  //for styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingVertical: SIZES.radius * 2,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
    },
    card: {
      backgroundColor: colors.cardBackground,
      borderRadius: SIZES.radius,
      padding: SIZES.padding,
      marginBottom: SIZES.radius,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      elevation: 2,
    },
    cardText: {
      fontSize: SIZES.body3,
      color: colors.textColor,
      padding: SIZES.base,
    },
    title: {
      fontWeight: "bold",
      marginBottom: SIZES.base,
    },
    dateContainer: {
      marginLeft: "auto",
      alignItems: "flex-end",
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      {dummyData.upcomingExam.map((item, index) => (
        <TouchableOpacity
          style={styles.card}
          key={index}
          onPress={() => navigation.navigate(ExamDetailedScreen)}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.cardText, styles.title]}>{item.title}</Text>
            <Text style={styles.cardText}>{`Type: ${item.examType}`}</Text>
            <Text
              style={styles.cardText}
            >{`Questions: ${item.numberOfQuestions}`}</Text>
            <Text
              style={styles.cardText}
            >{`Highlight Marks: ${item.highlightMarks}`}</Text>
            <Text style={styles.cardText}>{`Time: ${item.time}`}</Text>
            <Text
              style={styles.cardText}
            >{`Duration: ${item.duration.hours}h ${item.duration.minutes}min`}</Text>
          </View>

          {/* Date Container */}
          <View style={styles.dateContainer}>
            <Text style={styles.cardText}>{item.date}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default UpcomingExamScreen;
