// import from react
import React from "react";
// import from react native
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const ClassDetailedScreen = ({navigation}) => {
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
      backgroundColor: Colors.primaryAlpha,
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
    },
    cardContainer: {
      flexDirection: "row",

      alignItems: "center",
    },
    memberInfo: {
      marginLeft: 8,
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
            <Text style={styles.heading}> Class Details</Text>
          </View>
        </View>

        <View style={styles.titlehead}>
          <Text style={styles.title}>App Development Exams</Text>
          <View style={styles.time}>
            <View>
              <Text style={styles.timetext}>Time</Text>
              <Text>2 hrs</Text>
            </View>
            <View>
              <Text style={styles.timetext}>Duration</Text>
              <Text>10.00AM to 12.00AM</Text>
            </View>
          </View>

          <View style={styles.time}>
            <View style={styles.cardContainer}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s"
                style={{ width: 40, height: 40, borderRadius: 50 }}
              />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Arun</Text>
                <Text style={styles.designation}>Instructor</Text>
              </View>
            </View>
            <View style={styles.timetext1}>
              <Text style={styles.timetext}>Online</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomsheet}>
          <View style={styles.bottom}>
            <View
              style={{
                flexDirection: "row",
                marginTop: SIZES.radius,
                alignItems: "center",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D"
                style={styles.image}
              />

              <View style={styles.imageview}>
                <Image
                  src="https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14="
                  style={styles.image}
                />
              </View>
              <View style={styles.imageview}>
                <Image
                  src="https://images.unsplash.com/photo-1430990480609-2bf7c02a6b1a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  style={styles.image}
                />
              </View>
              <Text>+5 more</Text>
            </View>

            <TouchableOpacity style={styles.notify}>
              <Text>Notify</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.examoverview}>
            <Text style={styles.exam}>Class Overview:</Text>
            <View style={styles.examoverview}>
              <Text style={styles.exam1} numberOfLines={4}>
                Figurative description relies on creating likenesses between
                objects, often through simile (e.g. like a snowflake...or
                fragile as a snowflake...) or metaphor. Such likenesses allow
                the reader to perceive the object more precisely.
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.enroll}>
            <Text style={{ color: "white" }}>Enroll Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ClassDetailedScreen;
