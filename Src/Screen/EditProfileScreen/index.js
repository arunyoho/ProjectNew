// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { COLORS, FONTS, SIZES } from "../../constants/Index";
// import from expo
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
// import from expo vector icons
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const EditProfileScreen = ({ navigation }) => {
  // for using colors and dark mode
  const { colors, isDarkMode } = useStateContext();

  // states for usernames and errors
  const [username, setUsername] = React.useState("");

  // states for Email and errors
  const [email, setEmail] = React.useState("");

  // for email error
  const [emailError, setEmailError] = useState(null);

  // state for image
  const [image, setImage] = useState(null);
  // for pick the image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    // Validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else if (!isValidEmail(email.trim())) {
      setEmailError("Invalid email address");
      return;
    }

    // If everything is valid, reset the error and proceed with save logic
    setEmailError(null);

    // Handle save logic here
  };

  const isValidEmail = (email) => {
    // Robust email validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // for using styles.
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
      marginLeft: SIZES.radius,
      color: colors.textColor,
    },
    back: {
      marginRight: SIZES.base,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    container: {
      // flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    profileContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: SIZES.padding,
    },
    icons: {
      paddingLeft: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    inputContainer: {
      marginTop: SIZES.radius,
    },
    inputLabel: {
      ...FONTS.body3,
      color: colors.textColor,
      marginBottom: 6,
    },
    inputField: {
      backgroundColor: colors.searchInput,
      borderRadius: SIZES.radius,
      paddingHorizontal: SIZES.padding,
      height: 40,
      ...FONTS.body3,
      color: colors.textColor,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.padding,
    },
    button: {
      flex: 1,
      height: 40,
      borderRadius: SIZES.radius,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: SIZES.radius,
    },
    saveButton: {
      backgroundColor: COLORS.blue,
    },
    cancelButton: {
      backgroundColor: Colors.red,
    },
    buttonText: {
      ...FONTS.h3,
      color: COLORS.white,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 10,
      paddingVertical: SIZES.radius,
      backgroundColor: colors.searchInput,
      marginVertical: SIZES.radius,
      marginTop: SIZES.padding,
      color: colors.textColor,
    },
    icon: {
      marginRight: 8,
      marginLeft: 8,
    },
    inputField: {
      flex: 1,
      fontSize: 16,
      color: colors.textColor,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <StatusBar
        style={isDarkMode ? "light" : "dark"}
        backgroundColor={colors.background}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color={COLORS.blue} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Help Details</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Pressable onPress={pickImage}>
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          ) : (
            <Image
              // source={images.profile}
              src="https://media.istockphoto.com/id/1301397300/photo/portrait-of-young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=Xvgo-k58_woBTuQaRNZ4JXP2SQsw_RSbrlSbt7XbQlU="
              style={{ width: 120, height: 120, borderRadius: 100 }}
            />
          )}
        </Pressable>
        <Pressable style={styles.icons} onPress={pickImage}>
          <Feather
            name="edit"
            size={15}
            color={COLORS.gray}
            style={{
              elevation: 1,
              marginTop: -25,
              backgroundColor: COLORS.white,
              padding: 6,
              borderRadius: 100,
            }}
          />
        </Pressable>
      </View>

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View style={styles.inputContainer}>
            <AntDesign
              name="edit"
              size={24}
              color={COLORS.blue}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputField}
              placeholderTextColor={colors.textColor}
              placeholder="Enter your full name"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color={COLORS.blue}
              style={styles.icon}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Enter your email"
              placeholderTextColor={colors.textColor}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {emailError && (
            <Text style={{ color: "red", ...FONTS.body4, textAlign: "right" }}>
              {emailError}
            </Text>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            // onPress={handleCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
