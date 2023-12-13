// import from react
import React from "react";
// import from react native
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
// import from constants
import Colors from "../../constants/Colors";
import { COLORS, FONTS, SIZES } from "../../constants/Index";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

// import from expo vector icon
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";


const AccountScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  const user = require("../../../assets/nature.jpg");

  // for styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
      // paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
    },
    back: {
      marginRight: SIZES.radius,
      backgroundColor: COLORS.blue1,
      padding: SIZES.radius,
      borderRadius: 10,
    },
    Notification: {
      marginHorizontal: SIZES.base,
      color: colors.textColor,
      fontSize: SIZES.h2,
      fontWeight: "bold",
    },
    Container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    TextContainer: {
      display: "flex",
      flexDirection: "row",
    },
    overContainer: {
      height: "37%",
      // flex:1,
      backgroundColor: COLORS.lightblue,
      padding: 15,
    },
    profileContainer: {
      paddingVertical: SIZES.base,
      justifyContent: "center",
      alignItems: "center",
    },
    icons: {
      paddingLeft: 50,
    },
    EditprofileContainer: {
      // display: "flex",
      flexDirection: "row",
      paddingVertical: 20,
      flex: 1,
      justifyContent: "center",
    },
    Editprofile: {
      flex: 1,
      alignItems: "center",
    },
    EditprofileText: {
      ...FONTS.h3,
      color: colors.textColor,
    },
    EditprofileView: {
      ...FONTS.h4,
      color: colors.textColor,
    },
    flexContainer: {
      flex: 1,
      borderRadius: 30,
      marginTop: -25,
      backgroundColor: "white",
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
    },
    menuContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      shadowColor: colors.textColor, // Adjust shadow properties
      shadowOffset: { width: 0, height: 2 },
      // shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3, // Adjust elevation for Android
      paddingVertical: SIZES.base,
      paddingHorizontal: SIZES.base,
      borderRadius: 20,
      marginVertical: SIZES.base,
    },
    menuIcons: {
      backgroundColor: COLORS.lightblue,
      borderRadius: 50,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      justifyContent: "center",
      alignItems: "center",
    },
    menuText: {
      fontWeight: "600",
      marginHorizontal: SIZES.radius,
      color: colors.textColor,
    },
    overalprofilecontainer: {
      marginTop: 20,
      marginHorizontal: 10,
      backgroundColor: "blue",
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
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
        <StatusBar
          style={isDarkMode ? "light" : "dark"}
          backgroundColor={colors.background}
        />

        <View style={styles.overContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <Ionicons name="ios-arrow-back" size={24} color={COLORS.blue} />
            </TouchableOpacity>

            <View>
              <Text style={styles.heading}>Profiles</Text>
            </View>
          </View>

          <View style={styles.profileContainer}>
            <Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
              <Image
                source={user}
                resizeMode="contain"
                style={{ height: 100, width: 100, borderRadius: 100 }}
              />
            </Pressable>
            <Pressable
              style={styles.icons}
              onPress={() => navigation.navigate("EditProfileScreen")}
            >
              <Image
                // source={icons.edit}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.black,
                  marginTop: -30,
                  // backgroundColor: COLORS.white,
                  padding: 10,
                }}
              />
            </Pressable>
          </View>

          <View
            style={{
              marginBottom: 15,
              // marginTop:10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: isDarkMode ? COLORS.darkBlue : colors.textColor,
              }}
            >
              Arun
            </Text>
            <Text
              style={{
                ...FONTS.h4,
                color: isDarkMode ? COLORS.darkBlue : colors.textColor,
              }}
            >
              Arun@gmail.com
            </Text>
          </View>
        </View>

        <View style={styles.flexContainer}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.radius,
              paddingVertical: SIZES.radius,
            }}
          >
            <View style={{ marginVertical: SIZES.base }}>
              <Text
                style={{
                  color: colors.textColor,
                  fontSize: SIZES.h3,
                  fontWeight: "bold",
                }}
              >
                Account Overview
              </Text>
            </View>

            <View Style={styles.overalprofilecontainer}>
              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => navigation.navigate("EditProfileScreen")}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.menuIcons}>
                    <Feather
                      name="edit"
                      size={24}
                      color={isDarkMode ? COLORS.darkBlue : colors.textColor}
                    />
                  </View>
                  <View>
                    <Text style={styles.menuText}>Edit Profile</Text>
                  </View>
                </View>
                <View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color={colors.textColor}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => navigation.navigate("NotificationScreen")}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.menuIcons}>
                    <Ionicons
                      name="notifications-outline"
                      size={24}
                      color={isDarkMode ? COLORS.darkBlue : colors.textColor}
                    />
                  </View>
                  <View>
                    <Text style={styles.menuText}>Notifications</Text>
                  </View>
                </View>
                <View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color={colors.textColor}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => navigation.navigate("HelpCenterScreen")}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.menuIcons}>
                    <Ionicons
                      name="help"
                      size={24}
                      color={isDarkMode ? COLORS.darkBlue : colors.textColor}
                    />
                  </View>
                  <View>
                    <Text style={styles.menuText}>HelpCenter</Text>
                  </View>
                </View>
                <View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color={colors.textColor}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuContainer}
                onPress={() => navigation.navigate("PrivacyPolicyScreen")}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={styles.menuIcons}>
                    <MaterialIcons
                      name="privacy-tip"
                      size={24}
                      color={isDarkMode ? COLORS.darkBlue : colors.textColor}
                    />
                  </View>
                  <View>
                    <Text style={styles.menuText}>Privacy Policy</Text>
                  </View>
                </View>
                <View>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={20}
                    color={colors.textColor}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ alignItems: "center", marginTop: 10 }}>
              <TouchableOpacity
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
                    color: COLORS.white,
                    fontWeight: "bold",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  Sign out
                </Text>
                <View
                  style={{
                    backgroundColor: COLORS.blue1,
                    borderRadius: 29,
                    left: 10,
                  }}
                >
                  <Feather
                    name="arrow-right"
                    size={20}
                    color={isDarkMode ? COLORS.darkBlue : colors.textColor}
                    style={{ paddingHorizontal: 15, paddingVertical: 13 }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
