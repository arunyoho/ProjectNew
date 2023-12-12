// import from react
import React from "react";
// import from expo vector
import { AntDesign } from "@expo/vector-icons";
// import from react navigation
import {
  DrawerContentScrollView,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import from react native
import { Image, StyleSheet, Text, View } from "react-native";
// import from screens
import BottomTabs from "../screen/BottomTabs";

// import from screen
import { LoadingScreen } from "../screen";
import AccountScreen from "../screen/AccountScreen";
import AnswerPaperScreen from "../screen/AnswerPaperScreen";
import ForgetPasswordScreen from "../screen/AuthenticationScreen/ForgetPasswordScreen";
import LoginScreen from "../screen/AuthenticationScreen/LoginScreen";
import OTPVerificationScreen from "../screen/AuthenticationScreen/OTPVerificationScreen";
import SetNewPasswordScreen from "../screen/AuthenticationScreen/SetNewPasswordScreen";
import CertificatesModelScreen from "../screen/CertificatesModelScreen";
import ClassDetailedScreen from "../screen/ClassDetailedScreen";
import ClassHistoryScreen from "../screen/ClassHistoryScreen";
import ClassesScreen from "../screen/ClassesScreen";
import CommunityProfileScreen from "../screen/CommunityProfileScreen";
import CommunityScreen from "../screen/CommunityScreen";
import CompletedClassScreen from "../screen/CompletedClassScreen";
import CompletedExamScreen from "../screen/CompletedExamScreen";
import CompletedTicketsScreen from "../screen/CompletedTicketsScreen";
import DashBoardScreen from "../screen/DashBoardScreen";
import EditProfileScreen from "../screen/EditProfileScreen";
import EvenDetailedScreen from "../screen/EventDetailedScreen";
import EventsScreen from "../screen/EventsScreen";
import ExamDetailedScreen from "../screen/ExamDetailedScreen";
import ExamHistoryScreen from "../screen/ExamHistoryScreen";
import ExamsScreen from "../screen/ExamsScreen";
import HelpCenterScreen from "../screen/HelpCenterScreen";
import HelpDetailsScreen from "../screen/HelpDetailsScreen";
import IdCardModelScreen from "../screen/IdCardModelScreen";
import LibraryDetailedScreen from "../screen/LibraryDetailedScreen";
import LibraryScreen from "../screen/LibraryScreen";
import NotificationScreen from "../screen/NotificationScreen";
import PaymentDetailedScreen from "../screen/PaymentDetailedScreen";
import PaymentsScreen from "../screen/PaymentsScreen";
import PendingTicketsScreen from "../screen/PendingTicketsScreen";
import PrivacyPolicyScreen from "../screen/PrivacyPolicyScreen";
import ResultDetailedScreen from "../screen/ResultDetailedScreen";
import ResultScreen from "../screen/ResultScreen";
import TermsAndConditionScreen from "../screen/TermsAndConditionScreen";
import TicketsScreen from "../screen/TicketsScreen";
import UpcomingClassScreen from "../screen/UpcomingClassScreen";
import UpcomingExamScreen from "../screen/UpcomingExamScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ExamDetailedScreen" component={ExamDetailedScreen} />
      <Stack.Screen name="ExamsScreen" component={ExamsScreen} />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
      <Stack.Screen
        name="CommunityProfileScreen"
        component={CommunityProfileScreen}
      />
      <Stack.Screen name="UpcomingExamScreen" component={UpcomingExamScreen} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

      <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name="SetNewPasswordScreen"
        component={SetNewPasswordScreen}
      />
      <Stack.Screen
        name="OTPVerificationScreen"
        component={OTPVerificationScreen}
      />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />

      <Stack.Screen
        name="CompletedExamScreen"
        component={CompletedExamScreen}
      />
      <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />

      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="ClassesScreen" component={ClassesScreen} />
      <Stack.Screen
        name="UpcomingClassScreen"
        component={UpcomingClassScreen}
      />
      <Stack.Screen
        name="CompletedClassScreen"
        component={CompletedClassScreen}
      />
      <Stack.Screen name="ClassHistoryScreen" component={ClassHistoryScreen} />
      <Stack.Screen
        name="ClassDetailedScreen"
        component={ClassDetailedScreen}
      />

      <Stack.Screen name="HelpDetailsScreen" component={HelpDetailsScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="TermsAndConditionScreen"
        component={TermsAndConditionScreen}
      />
      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
      <Stack.Screen
        name="LibraryDetailedScreen"
        component={LibraryDetailedScreen}
      />
      <Stack.Screen name="EventsScreen" component={EventsScreen} />
      <Stack.Screen name="EvenDetailedScreen" component={EvenDetailedScreen} />
      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />
      <Stack.Screen
        name="PaymentDetailedScreen"
        component={PaymentDetailedScreen}
      />
      <Stack.Screen
        name="CertificatesModelScreen"
        component={CertificatesModelScreen}
      />
      <Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />
      {/* <Stack.Screen name="CalendarScreen" component={CalendarScreen} /> */}
      <Stack.Screen name="AnswerPaperScreen" component={AnswerPaperScreen} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen
        name="ResultDetailedScreen"
        component={ResultDetailedScreen}
      />
      <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
      <Stack.Screen
        name="PendingTicketsScreen"
        component={PendingTicketsScreen}
      />
      <Stack.Screen
        name="CompletedTicketsScreen"
        component={CompletedTicketsScreen}
      />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = (props) => {
  const user = {
    name: "Arun",
    email: "Arun@example.com",
    image:
      "https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_640.jpg", // Replace with the actual URL of the user's image
  };

  const styles = StyleSheet.create({
    drawerHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    userName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    userEmail: {
      fontSize: 14,
      color: "gray",
    },
  });
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Image source={{ uri: user.image }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      <DrawerItem
        label="Profile"
        icon={({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Profile")}
      />
      <DrawerItem
        label="Dashboard"
        icon={({ color, size }) => (
          <AntDesign name="dashboard" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Dashboard")}
      />
      <DrawerItem
        label="Classes"
        icon={({ color, size }) => (
          <AntDesign name="book" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Classes")}
      />
      <DrawerItem
        label="Exams"
        icon={({ color, size }) => (
          <AntDesign name="filetext1" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Exams")}
      />
      <DrawerItem
        label="Community"
        icon={({ color, size }) => (
          <AntDesign name="team" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Community")}
      />
      <DrawerItem
        label="Account"
        icon={({ color, size }) => (
          <AntDesign name="setting" size={size} color={color} />
        )}
        onPress={() => props.navigation.navigate("Account")}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        labelStyle: { color: "black" },
      }}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { color: "black" },
      }}
    >
      {/* <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}
    /> */}

      <Drawer.Screen
        name="Dashboard"
        component={StackNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="dashboard" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Classes"
        component={ClassesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="book" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Exams"
        component={ExamsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="filetext1" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="team" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={AccountScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  return <DrawerNavigator />;
};

export default Navigation;
