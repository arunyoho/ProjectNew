// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const PaymentDetailedScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // styles

  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ?  Colors.greenAlpha : colors.background,
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
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Payment Details</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor:isDarkMode ? Colors.greenAlpha: colors.cardBackground,
            padding: SIZES.padding,
            marginTop: SIZES.padding,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Paid to :</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                style={{ width: 35, height: 35, borderRadius: 35 }}
              />
              <View style={{ marginLeft: 15 }}>
                <Text style={{fontWeight:"bold"}}>Yoho.Pvt.Ltd</Text>
                <Text>UPI ID :Arun@okaxis.com</Text>
              </View>
            </View>
            <View>
              <Text style={{fontWeight:"bold"}}>&#8377;10000</Text>
            </View>
          </View>
          <View style={{ marginTop: SIZES.base, flexDirection: "row" }}>
            <Image
              src="https://www.freepnglogos.com/uploads/tick-png/tick-paddy-power-hotshot-jackpot-first-goalscorer-predictor-18.png"
              style={{ width: 30, height: 30 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{fontWeight:"bold"}}>Payment Successful</Text>
              <Text>10 Nov 2023,12.00 PM</Text>
            </View>
          </View>
          <View style={{marginTop:SIZES.radius,borderBottomWidth:0.5,}}>

          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Status</Text>

            <View
              style={{
                marginTop: SIZES.base,
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Image
                src="https://w7.pngwing.com/pngs/270/706/png-transparent-check-mark-computer-icons-green-tick-mark-angle-text-logo.png"
                style={{ width: 10, height: 10 }}
              />
              <Text style={{ marginLeft: 6 }}>Payment Started</Text>
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: "black",
                marginLeft: SIZES.padding,
              }}
            ></View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Image
                src="https://w7.pngwing.com/pngs/270/706/png-transparent-check-mark-computer-icons-green-tick-mark-angle-text-logo.png"
                style={{ width: 10, height: 10 }}
              />
              <Text style={{ marginLeft: 6 }}>Payment Recieved by Student</Text>
            </View>

            <View
              style={{
                width: 1,
                height: 25,
                backgroundColor: "black",
                marginLeft: SIZES.padding,
              }}
            ></View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: SIZES.padding,
              }}
            >
              <Image
                src="https://w7.pngwing.com/pngs/270/706/png-transparent-check-mark-computer-icons-green-tick-mark-angle-text-logo.png"
                style={{ width: 10, height: 10 }}
              />
              <Text style={{ marginLeft: 6 }}>Payment Completed</Text>
            </View>
          </View>
        </View>
        <View   style={{
            backgroundColor:isDarkMode ? Colors.greenAlpha: colors.cardBackground,
            padding: SIZES.padding,
            marginTop: SIZES.padding,
            borderRadius: 20,
          }}>
          <View>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
          UPI transaction Id :
          </Text>
          <Text>
            358956558555
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
            To :
          </Text>
          <Text>
            vilperr@paytm
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
            From:ARUN M (Canara Bank)
          </Text>
          <Text>
            arun30-1@okaxis
          </Text>
          </View>
          <View style={{marginTop:SIZES.radius}}>
          <Text style={{ fontWeight: "bold", fontSize: 16}}>
          Google transaction ID :
          </Text>
          <Text>
           cCIAtasdQdweW
          </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetailedScreen;
