// UpcomingExamScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../../constants/theme";
import { useStateContext } from "../../context/StateContext/StateContext";
import { dummyData } from "../../components/dummyData";
import ExamDetailedScreen from "../ExamDetailedScreen";

const UpcomingExamScreen = ({ navigation }) => {
  const { colors } = useStateContext();

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingVertical: SIZES.radius * 2,
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
          onPress={() =>
            navigation.navigate(ExamDetailedScreen, { examDetails: item })
          }
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.cardText, styles.title]}>{item.title}</Text>
            <Text style={styles.cardText}>{`Type: ${item.examType}`}</Text>
            <Text style={styles.cardText}>{`Questions: ${item.numberOfQuestions}`}</Text>
            <Text style={styles.cardText}>{`Highlight Marks: ${item.highlightMarks}`}</Text>
            <Text style={styles.cardText}>{`Time: ${item.time}`}</Text>
            <Text style={styles.cardText}>{`Duration: ${item.duration.hours}h ${item.duration.minutes}min`}</Text>
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
