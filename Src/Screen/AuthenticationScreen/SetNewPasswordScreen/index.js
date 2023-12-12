// import from react
import React, { useState } from "react";
// import from react native
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../../constants/Index";
// imports from context
import { useStateContext } from "../../../context/StateContext/StateContext";
// import from expo vector icons
import {
  Ionicons
} from "@expo/vector-icons";

const SetNewPasswordScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

// state for new password
  const [newPassword, setNewPassword] = useState("");
  // state for confirm password
  const [confirmPassword, setConfirmPassword] = useState("");
  // states for errors
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  // states for password shown
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // function for show error
  const handleContinue = () => {
    // Validate new password
    if (!newPassword) {
      setNewPasswordError("New password is mandatory");
      return;
    } else {
      setNewPasswordError("");
    }

    // Validate confirm password
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm password is mandatory");
      return;
    } else {
      setConfirmPasswordError("");
    }

    // Validate password length
    if (newPassword.length < 6) {
      setNewPasswordError("Password should be at least 6 characters");
      return;
    } else {
      setNewPasswordError("");
    }

    // Validate password match
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Passwords does not match");
      return;
    } else {
      setConfirmPasswordError("");
    }

   
  };

  // styles

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: colors.background,
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
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },

    title: {
      fontSize: SIZES.h3,
      fontWeight: "bold",
      color: colors.textColor,
      textAlign: "center",
    },
    inputContainer: {
      marginTop: SIZES.base,
    },
    input: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "gray",
      // borderWidth: 1,
      borderRadius: 25,
      padding: SIZES.radius,
      height: 55,
      marginTop: SIZES.base,
      backgroundColor: COLORS.lightGray2,
    },
    icon: {
      marginHorizontal: 10,
    },
    eyeIcon: {
      marginHorizontal: 10,
    },
    errorText: {
      color: "red",
      marginBottom: SIZES.base,
      textAlign: "right", // Center the error text
    },
   
    saveButton: {
      backgroundColor: COLORS.blue,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
    },
    saveButtonText: {
      color: "white",
      fontWeight: "bold",
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
            <Text style={styles.heading}>Create New Password</Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <View>
            <Text style={styles.title}>Create Your New Password</Text>
          </View>

          <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Ionicons
              name="md-lock-closed"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              placeholder="New Password"
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={(text) => setNewPassword(text)}
            />
            <TouchableOpacity   onPress={() => setShowNewPassword(!showNewPassword)}>
              <Ionicons
                name={showNewPassword ? "eye" : "eye-off"}
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {newPasswordError ? (
            <Text style={styles.errorText}>{newPasswordError}</Text>
          ) : null}
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <Ionicons
              name="md-lock-closed"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={{ flex: 1, marginLeft: 10 }}
              placeholder="Confirm New Password"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <TouchableOpacity  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
               name={showConfirmPassword ? "eye" : "eye-off"}
                size={24}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          {confirmPasswordError ? (
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          ) : null}
        </View>


          <View style={{ alignItems: "center", marginTop: 30 }}>
            <TouchableOpacity   onPress={handleContinue}
              style={{
                backgroundColor: COLORS.violet,
                height: 57,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 26,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  flex: 1,
                  textAlign: "center",
                }}
              >
                Continue
              </Text>
             
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SetNewPasswordScreen;