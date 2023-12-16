// import from react
import React from "react";
import { useState } from "react";
// import from react native
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, FONTS, COLORS, icons, images } from "../../constants/Index";
// import from expo
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import { RadioButton } from "react-native-paper";
import { dummyData } from "../../components/dummyData";

const PaymentsScreen = ({ navigation }) => {
  // for using colors and dark mode
  const { colors, isDarkMode } = useStateContext();
  const [selectedPayment, setSelectedPayment] = useState(null);

  const [checked, setChecked] = React.useState();

  const handlePaymentSelection = (paymentName) => {
    // Toggle the selection when the same payment option is tapped again
    setSelectedPayment((prevSelected) => (prevSelected === paymentName ? null : paymentName));
  };

  

  const handleConfirmPayment = () => {
    // Handle the logic for confirming the selected payment
    console.log("Confirmed Payment:", selectedPayment);


    

    // Show a popup with the text "Payment Successful" and a "Back" button
    Alert.alert("Payment Successful", "Thank you for your payment!", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Back",
        onPress: () => {
          console.log("Back Pressed");
          // Add any logic to navigate or perform actions when the "Back" button is pressed
        },
      },
    ]);
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
    logos: {
      fontSize: SIZES.body3,
      fontWeight: "bold",
      marginHorizontal: SIZES.radius,
      color: colors.textColor,
    },
    confirmButton: {
      marginTop: SIZES.padding,
      backgroundColor: COLORS.blue,
      padding: SIZES.radius,
      borderRadius: 15,
      alignItems: "center",
    },
    confirmButtonText: {
      color: COLORS.white,
      fontSize: SIZES.h3,
      fontWeight: "bold",
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
          <Text style={styles.heading}>Payments</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.cardBackground,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: SIZES.radius,
          borderRadius: 20,
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: SIZES.body3 }}>Total</Text>
        <Text style={{ fontWeight: "bold", fontSize: SIZES.body3 }}>
          &#8377;100
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: SIZES.body2 }}>
          Select Payments
        </Text>
      </View>

      {dummyData.payment.map((item, index) => (
        <View key={index} style={{ marginVertical: SIZES.radius }}>
          <TouchableOpacity onPress={() => handlePaymentSelection(item.name)}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: SIZES.radius,
                borderRadius: 25,
                justifyContent: "space-between",
                backgroundColor: colors.cardBackground,
                borderRadius: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 30, height: 30, borderRadius: 5 }}
                />
                <Text style={styles.logos}>{item.name} </Text>
              </View>
              <View>
                <RadioButton
                  value={item.name}
                  status={selectedPayment === item.name ? "checked" : "unchecked"}
                  onPress={() => handlePaymentSelection(item.name)}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}

      {/* Confirm Button */}
      {selectedPayment && (
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
          <Text style={styles.confirmButtonText}>Confirm Payment</Text>
        </TouchableOpacity>
      )}

    </SafeAreaView>
  );
};

export default PaymentsScreen;
