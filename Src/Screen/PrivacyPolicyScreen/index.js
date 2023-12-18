import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5,Ionicons } from "@expo/vector-icons";
import { useStateContext } from "../../context/StateContext/StateContext";
import { COLORS, SIZES } from "../../constants/theme";
import Colors from "../../constants/Colors";

const PrivacyPolicyScreen = ({ navigation }) => {
  const { colors,isDarkMode } = useStateContext();

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
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
     
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
     
    dashedLine: {
      marginTop: 10,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
      marginBottom: SIZES.padding,
    },
    privacyPolicyText: {
      marginBottom: SIZES.padding,
      color: colors.textColor,
      textAlign: "justify",
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Privacy Policy</Text>
          </View>
        </View>
        <View style={styles.dashedLine} />
        <Text style={styles.privacyPolicyText}>
          This is a placeholder for your privacy policy. Replace this text with
          your actual privacy policy content. Make sure to include details about
          the types of information you collect, how you use and protect that
          information, and any third parties you may share it with.
        </Text>

        <View style={styles.dashedLine} />
        <Text style={styles.privacyPolicyText}>
          This is a placeholder for your privacy policy. Replace this text with
          your actual privacy policy content. Make sure to include details about
          the types of information you collect, how you use and protect that
          information, and any third parties you may share it with.
        </Text>

        <Text style={styles.privacyPolicyText}>
          <Text style={{ fontWeight: "bold" }}>
            Information Collection and Use
          </Text>
          {"\n\n"}
          For a better experience while using our Service, we may require you to
          provide us with certain personally identifiable information, including
          but not limited to your name, phone number, and email address. The
          information that we request will be retained by us and used as
          described in this privacy policy.
        </Text>

        <Text style={styles.privacyPolicyText}>
          <Text style={{ fontWeight: "bold" }}>Log Data</Text>
          {"\n\n"}
          We want to inform you that whenever you use our Service, in the case
          of an error in the app we collect data and information (through
          third-party products) on your phone called Log Data. This Log Data may
          include information such as your device Internet Protocol (“IP”)
          address, device name, operating system version, the configuration of
          the app when utilizing our Service, the time and date of your use of
          the Service, and other statistics.
        </Text>

        <Text style={styles.privacyPolicyText}>
          <Text style={{ fontWeight: "bold" }}>Cookies</Text>
          {"\n\n"}
          Cookies are files with a small amount of data that are commonly used
          as anonymous unique identifiers. These are sent to your browser from
          the websites that you visit and are stored on your device's internal
          memory.
        </Text>

        <Text style={styles.privacyPolicyText}>
          <Text style={{ fontWeight: "bold" }}>Security</Text>
          {"\n\n"}
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicyScreen;