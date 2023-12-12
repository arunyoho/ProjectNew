import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, SIZES, images } from "../../constants/Index";
import { useStateContext } from "../../context/StateContext/StateContext";
import Colors from "../../constants/Colors";

const SplashScreen = ({ navigation }) => {
  const { isDarkMode, colors } = useStateContext();
  const Logo = require("../../../assets/learning.jpg");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen");
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:isDarkMode ? Colors.greenAlpha : colors.background,
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
      <Text style={{ color: colors.textColor, ...FONTS.h1 }}>
      Lms student
      </Text>
      <Text
        style={{
          color: colors.textColor,
          ...FONTS.h5,
          textAlign: "center",
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.base,
        }}
      >
        Grow your your knowledge with LMS Marketplace. Start your career with
        us
      </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;