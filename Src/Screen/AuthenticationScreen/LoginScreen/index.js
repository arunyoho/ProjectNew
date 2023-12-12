// import from react
import React, { useState } from "react";
//import from react native
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
// import from expo vector
import { Ionicons, Feather } from "@expo/vector-icons";
// import from context
import { useStateContext } from "../../../context/StateContext/StateContext";
//import from constants
import { COLORS, SIZES } from "../../../constants/Index";
//import from screen
import ForgetPasswordScreen from "../ForgetPasswordScreen";
// import from lottie
import LottieView from "lottie-react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

const LogInScreen = ({ navigation }) => {
  // use for colors
  const { colors } = useStateContext();

  // states for email
  const [email, setEmail] = useState("");
  // states for password
  const [password, setPassword] = useState("");
  // states for emailerror
  const [emailError, setEmailError] = useState("");
  //states for passworderror
  const [passwordError, setPasswordError] = useState("");
  //states for showpassword
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Clear previous error messages
    setEmailError("");
    setPasswordError("");

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email address");
    }

    // Validate password
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    }

    // Check if any errors exist
    if (emailError || passwordError) {
      // Handle the case where there are validation errors
      console.log("Validation failed. Please check the form.");
      return;
    }

    // Your login logic here (e.g., API call, authentication)
    console.log("Logging in with:", { email, password });
  };

  // for styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // paddingHorizontal: 20,
      backgroundColor: colors.background,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "gray",
      borderRadius: 25,
      padding: 10,
      height: 55,
      marginTop: 10,
      backgroundColor:colors.searchInput,
      color: colors.textColor,
      marginHorizontal: 15,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      color: colors.textColor,
    },
    icon: {
      marginRight: 10,
    },
    errorText: {
      color: "red",
      marginBottom: 10,
      textAlign: "right",
      marginRight: 18,
    },
    forgot: {
      marginTop: SIZES.radius,
      alignItems: "center",
      marginHorizontal: 15,
    },
    login: {
      alignItems: "center",
      marginBottom: 10,
    },
    logintext: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      color: colors.textColor,
    },
    forgottext: {
      color: colors.textColor,
    },
    image: {
      // flex:1,
      width: "60%",
      // height:"50",
      alignSelf: "center",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <LottieView
          source={require("../../../../assets/failed.json")}
          autoPlay
          loop
          style={styles.image}
        />

        <View style={styles.login}>
          <Text style={styles.logintext}>Login</Text>
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="mail"
            size={24}
            color={COLORS.blue}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor={colors.textColor}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailError("");
            }}
          />
        </View>
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="key"
            size={24}
            color={COLORS.blue}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor={colors.textColor}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordError("");
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={COLORS.blue}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        {/* Login Button */}
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.violet,
              height: 57,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 26,
              paddingHorizontal: 20,
              marginHorizontal: 15,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                flex: 1,
                textAlign: "center",
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(ForgetPasswordScreen)}
          style={styles.forgot}
        >
          <Text style={styles.forgottext}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LogInScreen;
