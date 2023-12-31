// import from expo vector
import { Entypo, Ionicons } from "@expo/vector-icons";
// import from react
import React from "react";
// import from react native
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from components
import { dummyData } from "../../components/dummyData"; // Import the dummy data
// import from constants
import Colors from "../../constants/Colors";
// import from sizes
import { SIZES } from "../../constants/Index";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const NotificationScreen = ({ navigation }) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // for styles
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
      {/* Your existing code */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Notification</Text>
        </View>
      </View>
      <ScrollView>
        {dummyData.notifications.map((notification) => (
          <View key={notification.id} style={{ marginVertical: SIZES.padding }}>
            <Text
              style={{
                color: colors.textColor,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {notification.date}
            </Text>

            {notification.notifications.map((item) => (
              <View
                key={item.id}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <View style={{ flexDirection: "row", marginTop: 10, flex: 1 }}>
                  <View style={{}}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        marginLeft: 6,
                      }}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{ color: colors.textColor, marginLeft: 15 }}
                      numberOfLines={1}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{ color: colors.textColor, marginLeft: 15 }}
                      numberOfLines={2}
                    >
                      {item.description}
                    </Text>
                  </View>
                </View>

                <View style={{}}>
                  <TouchableOpacity>
                    <Entypo
                      name="dots-three-vertical"
                      size={12}
                      color={isDarkMode ? Colors.darkBlue : colors.textColor}
                      style={{}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
