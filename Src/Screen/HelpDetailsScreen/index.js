// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ScrollViewBase,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, FONTS, COLORS } from "../../constants/theme";
// import from components
import TopTabs from "../../components/TopTabs";
// import from expo
import { FontAwesome5, MaterialIcons, FontAwesome,Entypo,Ionicons  } from "@expo/vector-icons";

import Colors from "../../constants/Colors";


const HelpDetailsScreen = ({navigation}) => {
  // for colors
  const { colors,isDarkMode } = useStateContext();


  // styles
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
  });
  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView>
        <View style={{marginTop:SIZES.radius}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24}  color={COLORS.blue}/>
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Help Details</Text>
          </View>
        </View>

            <View style={{marginTop:SIZES.radius,}}> 
            <TopTabs />
            </View>
           
           





        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpDetailsScreen;
