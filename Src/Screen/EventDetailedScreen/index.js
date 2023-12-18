// import from react
import React from "react";
// import from react native
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const EventDetailedScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // styles
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
      marginLeft: SIZES.base,
      color: colors.textColor,
    },
    back: {
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    title: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
    },
    titlehead: {
      marginTop: SIZES.radius,
      backgroundColor: Colors.greenAlpha,
      padding: SIZES.padding,
      borderRadius: 20,
    },
    time: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.base,
      alignItems: "center",
    },
    timetext: {
      fontWeight: "bold",
      fontSize: SIZES.h3,
      textAlign: "center",
    },
    timetext1: {
      fontWeight: "bold",
      fontSize: SIZES.h3,
      marginRight: 35,
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 60,
    },
    imageview: {
      marginTop: SIZES.padding,
      flexDirection: "row",
    },
    notify: {
      // borderWidth:1,
      backgroundColor: Colors.lightRed,
      padding: SIZES.base,
      borderRadius: 10,
      alignItems: "center",

      // padding:SIZES.radius
    },
    bottom: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",

      padding: 10,
    },
    enroll: {
      backgroundColor: COLORS.violet,
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 26,
      marginHorizontal: 20,
      marginTop: 50,
    },
    bottomsheet: {
      backgroundColor: colors.cardBackground,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      flex: 1,
      marginTop: SIZES.padding,
    },
    exam: {
      color: colors.textColor,
      fontSize: SIZES.h2,
    },
    examoverview: {
      marginTop: SIZES.radius,
      marginHorizontal: SIZES.base,
    },
    exam1: {
      fontSize: SIZES.h3,
      color: colors.textColor,
      marginVertical:SIZES.base
    },
    cardContainer: {
      flexDirection: "row",

      alignItems: "center",
    },
    memberInfo: {
      color: colors.textColor,
    },
    memberName: {
      fontWeight: "bold",
      fontSize: 16,
    },
    designation: {
      color: colors.textColor,
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 50,
    },
    imageview: {
      marginLeft: -15,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}> Event Details</Text>
          </View>
        </View>

        <View style={styles.titlehead}>
          <Text style={styles.title}>App Development Exams</Text>
          <View style={styles.time}>
            <View>
              <Text style={styles.timetext}>Time :</Text>
              <Text>2 hrs</Text>
            </View>
            <View>
              <Text style={styles.timetext}>Month</Text>
              <Text>June </Text>
            </View>
          </View>

          <View style={styles.time}>
            <View style={styles.cardContainer}>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Location :</Text>
                <Text style={styles.designation}>Chennai</Text>
              </View>
            </View>
            <View style={styles.timetext}>
              <Text style={styles.timetext}>Online</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomsheet}>
          <View style={styles.bottom}></View>
          <View style={styles.examoverview}>
            <Text style={styles.exam}>Skills Required:</Text>
            <View style={styles.examoverview}>
              <Text style={styles.exam1}>* Communication.</Text>
              <Text style={styles.exam1}>* Teamwork.</Text>
              <Text style={styles.exam1}>* Problem solving.</Text>
              <Text style={styles.exam1}>* Planning and organising.</Text>
              <Text style={styles.exam1}>* Self-management.</Text>
              <Text style={styles.exam1}>* Initiative and enterprise.</Text>

              <Text style={styles.exam1}>* Learning. Technology.</Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EventDetailedScreen;
