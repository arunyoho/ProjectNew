// import from react
import React from "react";
// import from react native
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from componenets
import dummyData from "../../components/dummyData";
// import from constants
import { SIZES } from "../../constants/theme";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from screen
import ExamDetailedScreen from "../ExamDetailedScreen";
// import from constants
import Colors from "../../constants/Colors";

const UpcomingClassScreen = ({ navigation }) => {
  // for colors and isdarkmode
  const { colors, isDarkMode } = useStateContext();

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
      <TouchableOpacity style={styles.card}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.cardText, styles.title]}>
            App Development Classes
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Time:2 hrs</Text>
            <TouchableOpacity
              style={{ backgroundColor: "red", padding: 8, borderRadius: 10 }}
            >
              <Text>Online</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.radius,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
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
            <TouchableOpacity
              style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
              onPress={()=>navigation.navigate("ClassDetailedScreen")}
            >
              <Text>View More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: colors.textColor }}>
              Exams
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={{ color: Colors.textColor }}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpcomingClassScreen;
