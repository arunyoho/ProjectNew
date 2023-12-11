import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

import DashBoardScreen from "../DashBoardScreen";
import HelpCenterScreen from "../HelpCenterScreen";
import CommunityProfileScreen from "../CommunityProfileScreen";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { useStateContext } from "../../context/StateContext/StateContext";
import Icon, { Icons } from "../../components/Icons";

import * as Animatable from "react-native-animatable";

import React, { useEffect, useRef } from "react";

const TabArr = [
  {
    route: "DashBoard",
    label: "DashBoard",
    type: Icons.Feather,
    icon: "home",
    component: DashBoardScreen,
    color: Colors.darkOverlayColor,
    alphaClr: Colors.primaryAlpha,
  },
    // {
    //   route: "Search",
    //   label: "Search",
    //   type: Icons.Feather,
    //   icon: "search",
    //   component: SearchScreen,
    //   color: Colors.darkOverlayColor,
    //   alphaClr: Colors.primaryAlpha,
    // },
    {
      route: "HelpCenter",
      label: "Help",
      type: Icons.Feather,
      icon: "help-circle",
      component: HelpCenterScreen,
      color: Colors.darkOverlayColor,
      alphaClr: Colors.primaryAlpha,
    },
    {
      route: "CommunityProfileScreen",
      label: "Profile",
      type: Icons.FontAwesome5,
      icon: "user-graduate",
      component: CommunityProfileScreen,
      color: Colors.darkOverlayColor,
      alphaClr: Colors.primaryAlpha,
    },
//   { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: AccountScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View
          style={[
            styles.btn,
            { backgroundColor: focused ? null : item.alphaClr },
          ]}
        >
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  color: Colors.white,
                  paddingHorizontal: 2,
                }}
              >
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 16,
  },
});

const BottomTabs = ({ navigation }) => {
    // use for colors
    const { colors } = useStateContext();

  const screenOptions1 = {
    tabBarStyle: {
      // backgroundColor:colors.background,
    },
    tabBarItemStyle: {
      borderRadius: 10,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          padding: 6,
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
export default BottomTabs;
