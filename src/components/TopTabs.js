import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { COLORS, SIZES } from "../constants/theme";
import Accordion from "./Accordian";
import  {dummyData}  from "./dummyData";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useStateContext } from "../context/StateContext/StateContext";

const TopTabs = () => {
  const { colors,isDarkMode } = useStateContext();
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const styles = StyleSheet.create({
    accordion: {
      borderColor: "#ccc",
      marginBottom: 10,
    },
    logos:{
       fontSize:SIZES.body3,
       fontWeight:"bold",
       marginHorizontal:SIZES.radius,
       color: colors.textColor,
    },
  });

  return (
    <View style={{ flex: 1, paddingHorizontal: SIZES.base }}>
      {/* Custom Tab Buttons */}

      <View
        style={{
            backgroundColor: isDarkMode ? Colors.greenAlpha : colors.cardBackground,
        //   elevation: 4,
          padding: SIZES.base,
          borderRadius: 26,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button
            mode={activeTab === "Tab1" ? "contained" : "text"}
            onPress={() => handleTabChange("Tab1")}
            style={{
              width: "40%",
              color:colors.textcolor,
              backgroundColor:
                activeTab === "Tab1" ?  COLORS.violet : "transparent",
              elevation: activeTab === "Tab1" ? 4 : 0,
            }}
          >
            FAQ
          </Button>
          <Button
            mode={activeTab === "Tab2" ? "contained" : "text"}
            onPress={() => handleTabChange("Tab2")}
            style={{
              width: "40%",
              backgroundColor:
                activeTab === "Tab2" ?  COLORS.violet : "transparent",
              elevation: activeTab === "Tab2" ? 4 : 0,
            }}
          >
            Contact
          </Button>
        </View>
      </View>
      {/* Content for each tab */}
      <View style={{ flex: 1 }}>
        {activeTab === "Tab1" && (
          <View style={{ marginTop: 20 }}>
            {dummyData?.accordian.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </View>
        )}
        {activeTab === "Tab2" && (
          <View style={{ marginTop: 20 }}>
            <View style={{ marginVertical: SIZES.radius}}>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.base,
                    borderRadius: 25,
                    justifyContent:"space-between"
                    
                  }}
                >
                     <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                     }} >
                  <MaterialIcons name="headset-mic" size={24} color={ isDarkMode ? Colors.primary:colors.textColor} />
                  <Text style={styles.logos}>Customer Service</Text>
                  </View>
                  <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.primary}/>
                </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: SIZES.radius}}>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.base,
                    borderRadius: 25,
                    justifyContent:"space-between"
                    
                  }}
                >
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                     }} >
                  <MaterialCommunityIcons name="web" size={24} color={ isDarkMode ? Colors.primary:colors.textColor} />
                  <Text style={styles.logos}>Website</Text>
                  </View>
                <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.primary}/>
                </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginVertical: SIZES.radius}}>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.base ,
                    borderRadius: 25,
                    justifyContent:"space-between"
                  }}
                >
                     <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                     }} >
                  <FontAwesome name="whatsapp" size={24}  color={ isDarkMode ? Colors.primary:colors.textColor} />
                  <Text style={styles.logos}>whatsapp</Text>
                  </View>
                  <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.primary} />
                </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: SIZES.radius }}>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.base ,
                    borderRadius: 25,
                    justifyContent:"space-between",
                  }}
                >
                      <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                     }} >

                  <Entypo name="facebook" size={24} color={ isDarkMode ? Colors.primary:colors.textColor} />
                  <Text style={styles.logos}>facebook </Text>
                  </View>
                  <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.primary} />
                </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginVertical: SIZES.radius }}>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    padding: SIZES.base*1 ,
                    borderRadius: 25,
                    justifyContent:"space-between"
                   
                  }}
                >
                    <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                     }} >
                  <AntDesign name="instagram" size={24} color={ isDarkMode ? Colors.primary:colors.textColor} />
                  <Text style={styles.logos}>instagram </Text>
                  </View>
                  <View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.primary}/>
                </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default TopTabs;