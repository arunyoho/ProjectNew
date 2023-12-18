// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  ScrollView,
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
import { dummyData } from "../../components/dummyData";

const EventsScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.back}
            >
              <Ionicons
                name="ios-arrow-back"
                size={24}
                color={Colors.primary}
              />
            </TouchableOpacity>

            <View>
              <Text style={styles.heading}>Events</Text>
            </View>
          </View>
          {dummyData.events.map((item, index) => (
            <View
              style={{
                borderWidth: 1,
                borderBottomEndRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{
                  width: "100%",
                  height: 130,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />

              <View style={{ padding: SIZES.base }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 4,
                  }}
                >
                  <Text
                    style={{ flex: 1, fontWeight: "bold", fontSize: SIZES.h4 }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "red",
                      borderRadius: 5,
                      padding: 4,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>Online</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: SIZES.base }}>
                  <Text style={{ fontWeight: "bold", fontSize: SIZES.h4 }}>
                    Description :
                  </Text>
                  <Text numberOfLines={3}>{item.des}</Text>
                </View>
                <Text style={{ fontWeight: "bold", fontSize: SIZES.h4 }}>
                  Duration :
                </Text>
                <Text>{item.time}</Text>
                <Text style={{ fontWeight: "bold", fontSize: SIZES.h4 }}>
                  Date :
                </Text>
                <Text>{item.Date}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EventsScreen;
