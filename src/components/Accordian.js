import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { useStateContext } from "../context/StateContext/StateContext";
import { COLORS, SIZES, icons, FONTS } from "../constants/Index";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Accordion = ({ title, content }) => {
  const { colors, isDarkMode } = useStateContext();
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded(!expanded);
  };
  const styles = StyleSheet.create({
    accordion: {
      borderColor: "#ccc",
      marginBottom: 10,
    },
    titleContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 5,
      height: 40,
      alignItems: "center",
      paddingHorizontal: SIZES.radius,
    },
    title: {
      // ...FONTS.h4,
      color: colors.textColor,
      fontWeight: "600",
    },
    arrow: {
      fontSize: 18,
      color: colors.textColor,
    },
    content: {
      padding: 10,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.cardBackground,
      color: colors.textColor,
      borderRadius: 10,
    },
  });

  return (
    <View style={styles.accordion}>
      <Pressable onPress={toggleAccordion}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.arrow}>
            {expanded ? (
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={Colors.primary}
              />
            ) : (
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={Colors.primary}
              />
            )}
          </Text>
        </View>
      </Pressable>
      {expanded && <Text style={styles.content}>{content}</Text>}
    </View>
  );
};

export default Accordion;
