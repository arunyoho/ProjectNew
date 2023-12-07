import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import BottomTabs from "../Screens/BottomTabs";

import DashBoardScreen from "../Screen/DashBoardScreen";
import AccountScreen from "../Screen/AccountScreen";
import AnswerPaperScreen from "../Screen/AnswerPaperScreen";
import CalenderScreen from "../Screen/CalenderScreen";
import CertificatesModelScreen from "../Screen/CertificatesModelScreen";
import ClassDetailedScreen from "../Screen/ClassDetailedScreen";
import ClassesScreen from "../Screen/ClassesScreen";
import ClassHistoryScreen from "../Screen/ClassHistoryScreen";
import CommunityProfileScreen from "../Screen/CommunityProfileScreen";
import CommunityScreen from "../Screen/CommunityScreen";
import CompletedClassScreen from "../Screen/CompletedClassScreen";
import CompletedExamScreen from "../Screen/CompletedExamScreen";
import CompletedTicketsScreen from "../Screen/CompletedTicketsScreen";
import EditProfileScreen from "../Screen/EditProfileScreen";
import EvenDetailedScreen from "../Screen/EventDetailedScreen";
import EventsScreen from "../Screen/EventsScreen";
import ExamDetailedScreen from "../Screen/ExamDetailedScreen";
import ExamHistoryScreen from "../Screen/ExamHistoryScreen";
import ExamsScreen from "../Screen/ExamsScreen";
import HelpCenterScreen from "../Screen/HelpCenterScreen";
import HelpDetailsScreen from "../Screen/HelpDetailsScreen";
import IdCardModelScreen from "../Screen/IdCardModelScreen";
import LibraryDetailedScreen from "../Screen/LibraryDetailedScreen";
import LibraryScreen from "../Screen/LibraryScreen";
import NotificationScreen from "../Screen/NotificationScreen";
import PaymentDetailedScreen from "../Screen/PaymentDetailedScreen";
import PaymentsScreen from "../Screen/PaymentsScreen";
import PendingTicketsScreen from "../Screen/PendingTicketsScreen";
import PrivacyPolicyScreen from "../Screen/PrivacyPolicyScreen";
import ResultDetailedScreen from "../Screen/ResultDetailedScreen";
import ResultScreen from "../Screen/ResultScreen";
import TermsAndConditionScreen from "../Screen/TermsAndConditionScreen";
import TicketsScreen from "../Screen/TicketsScreen";
import UpcomingClassScreen from "../Screen/UpcomingClassScreen";
import UpcomingExamScreen from "../Screen/UpcomingExamScreen";
import LoginScreen  from "../Screen/AuthenticationScreen/LoginScreen";
import ForgetPasswordScreen from "../Screen/AuthenticationScreen/ForgetPasswordScreen";
import OTPVerificationScreen from "../Screen/AuthenticationScreen/OTPVerificationScreen";
import SetNewPasswordScreen from "../Screen/AuthenticationScreen/SetNewPasswordScreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="BottomTabs"  component={BottomTabs} /> */}
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />

      <Stack.Screen name="AccountScreen" component={AccountScreen} />

      <Stack.Screen name="AnswerPaperScreen" component={AnswerPaperScreen} />
      <Stack.Screen name="CalenderScreen" component={CalenderScreen} />

      <Stack.Screen
        name="ClassDetailedScreen"
        component={ClassDetailedScreen}
      />

      <Stack.Screen name="ClassesScreen" component={ClassesScreen} />

      <Stack.Screen name="ClassHistoryScreen" component={ClassHistoryScreen} />
      <Stack.Screen
        name="CommunityProfileScreen"
        component={CommunityProfileScreen}
      />
      <Stack.Screen name="CommunityScreen" component={CommunityScreen} />

      <Stack.Screen
        name="CompletedClassScreen"
        component={CompletedClassScreen}
      />

      <Stack.Screen
        name="CompletedExamScreen"
        component={CompletedExamScreen}
      />

      <Stack.Screen
        name="CompletedTicketsScreen"
        component={CompletedTicketsScreen}
      />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />

      <Stack.Screen name="EvenDetailedScreen" component={EvenDetailedScreen} />

      <Stack.Screen name="EventsScreen" component={EventsScreen} />

      <Stack.Screen name="ExamDetailedScreen" component={ExamDetailedScreen} />
      <Stack.Screen name="ExamHistoryScreen" component={ExamHistoryScreen} />

      <Stack.Screen name="ExamsScreen" component={ExamsScreen} />

      <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />

      <Stack.Screen name="HelpDetailsScreen" component={HelpDetailsScreen} />
      <Stack.Screen name="IdCardModelScreen" component={IdCardModelScreen} />

      <Stack.Screen
        name="LibraryDetailedScreen"
        component={LibraryDetailedScreen}
      />

      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />

      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="PaymentDetailedScreen"
        component={PaymentDetailedScreen}
      />

      <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} />

      <Stack.Screen
        name="PendingTicketsScreen"
        component={PendingTicketsScreen}
      />

      <Stack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="ResultDetailedScreen"
        component={ResultDetailedScreen}
      />

      <Stack.Screen name="ResultScreen" component={ResultScreen} />

      <Stack.Screen
        name="TermsAndConditionScreen"
        component={TermsAndConditionScreen}
      />

      <Stack.Screen name="TicketsScreen" component={TicketsScreen} />
      <Stack.Screen
        name="UpcomingClassScreen"
        component={UpcomingClassScreen}
      />

      <Stack.Screen name="UpcomingExamScreen" component={UpcomingExamScreen} />

      <Stack.Screen name="CertificatesModelScreen" component={CertificatesModelScreen} />
  
  
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

<Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
<Stack.Screen name="OTPVerificationScreen" component={OTPVerificationScreen} />

<Stack.Screen name="SetNewPasswordScreen" component={SetNewPasswordScreen} />
  
  
   </Stack.Navigator>
  );
};

export default Navigation;
