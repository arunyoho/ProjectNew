// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import {
  Ionicons
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const PaymentDetailedScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

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
    back:{
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
        flex:1,
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

        <View>
          <Text>
            Paid to :
          </Text>
          <View style={{flexDirection:"row",justifyContent:"space-between"}} >
          <View style={{flexDirection:"row"}}>
          <Image src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          style={{width:35,height:35,borderRadius:35}}/>
          <View style={{marginLeft:6}}>
          <Text>
            Yoho.Pvt.Ltd
          </Text>
          <Text>
            UPI ID : AVBYYNC4567897UHN
          </Text>
          </View>
          </View>
          <View>
            <Text>
            &#8377;10000
            </Text>
          </View>
          </View>
        </View>

       
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetailedScreen;