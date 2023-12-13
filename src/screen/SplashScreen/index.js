// import from expo status
import { StatusBar } from "expo-status-bar";
// import from react
import React, { useEffect } from "react";
// import from react native
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import Colors from "../../constants/Colors";
import { FONTS, SIZES } from "../../constants/Index";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const SplashScreen = ({ navigation }) => {
  // for colors and isdarkmode
  const { isDarkMode, colors } = useStateContext();
  const Logo = require("../../../assets/learning.jpg");

  // for timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 3000);
    return () => clearTimeout(timer);
  }, [0]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.radius,
      }}
    >
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      <Image
        style={{ height: 200, width: 200 }}
        resizeMode="contain"
        source={Logo}
      />
      <Text style={{ color: colors.textColor, ...FONTS.h1 }}>Lms student</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
