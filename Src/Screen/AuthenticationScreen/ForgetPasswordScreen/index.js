// import from expo-vector-icons
import { FontAwesome, MaterialCommunityIcons, Ionicons, } from "@expo/vector-icons";
// import from react
import React, { useState } from "react";
// import from react native
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import from constants
import { COLORS, SIZES } from "../../../constants/Index";
//import from context
import { useStateContext } from "../../../context/StateContext/StateContext";

import OTPVerificationScreen from "../OTPVerificationScreen";

const ForgetPasswordScreen = ({ navigation }) => {
  // dummydata for email
  const data = [
    {
      id: 1,
      text: "via Email",
      mail: "aru******@gmail.com",
    },
    
  ];

  // usestate for hover
  const [isHovered, setIsHovered] = useState(false);

  // function for hover
  const handleMouseEnter = () => {
    setIsHovered(!isHovered);
  };

  // function for button
  function isEnableForget() {
    return isHovered != "";
  }

  // TO set border color
  const borderColor = isHovered ? "blue" : "white";

  // use for colors
  const { colors } = useStateContext();

  // use for styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      justifyContent: "space-between",
    },
    back: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    backscreentext: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color:colors.textColor
    },
    back: {
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    fonttext: {
      marginVertical: SIZES.radius,
      color: colors.textColor,
    },

    messageicon: {
      backgroundColor: colors.iconBackground,
      width: 80,
      height: 80,
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      marginRight: SIZES.radius,
    },
    card: {
      flexDirection: "row",
      alignItems: "center",
      padding: SIZES.radius,
      backgroundColor: colors.cardBackground,
      elevation: 1,
      marginVertical: SIZES.radius,
      margin: 5,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "",
    },
    card1: {
      flexDirection: "row",
      alignItems: "center",
      padding: SIZES.radius,
      backgroundColor: colors.cardBackground,
      elevation: 1,
      marginVertical: SIZES.radius,
      margin: 5,
      borderRadius: 8,
      borderColor: "",
      borderWidth: 2,
    },
    cardtext: {
      marginBottom: SIZES.base,
      color: colors.textColor,
      color: colors.textColor,
    },
    cadrnumber: {
      fontWeight: "bold",
      color: colors.textColor,
    },
    button: {
      backgroundColor: COLORS.violet,
      height: 50,
      width: "100%",
      alignItems: "center",
      borderRadius: 20,
      justifyContent: "center",
    },
    btntext: {
      color: COLORS.white,
    },

    cardHovered: {
      color: "blue",
      border: "blue",
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    cardContent: {
      fontSize: 14,
      color: "#666",
      borderColor: "blue",
    },
    button1: {
      padding: 10,
      borderWidth: 2,
      // borderColor: 'blue',
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    text:{
      color: colors.textColor,
    }
  });

  // navigate to next page
  const handlenext = () => {
    navigation.navigate(OTPVerificationScreen);
  };

  return (
    <SafeAreaView style={styles.grandParent}>
      <View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
         <Ionicons name="ios-arrow-back" size={24} color={COLORS.blue} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Forget Password</Text>
        </View>
      </View>

        <View style={styles.fonttext}>
          <Text style={styles.text}>
            Select which contact details which use to reset your Password
          </Text>
        </View>

        {data.map((value, index) => (
          <Pressable
            key={index}
            style={[styles.card, { borderColor }]}
            onPress={handleMouseEnter}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.messageicon}>
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={30}
                  color={colors.primary}
                />
              </View>

              <View>
                <Text style={styles.cardtext}>{value.text}</Text>
                <Text style={styles.cadrnumber}>{value.mail}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate(OTPVerificationScreen)}
        disabled={isEnableForget() ? false : true}
      >
        <Text style={styles.btntext}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgetPasswordScreen;
