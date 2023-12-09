// import from react navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import from react
import React from "react";
import BottomTabs from "../screen/BottomTabs";

// import from screen
import AccountScreen from "../screen/AccountScreen";
import AnswerPaperScreen from "../screen/AnswerPaperScreen";
import ForgetPasswordScreen from "../screen/AuthenticationScreen/ForgetPasswordScreen";
import LoginScreen from "../screen/AuthenticationScreen/LoginScreen";
import OTPVerificationScreen from "../screen/AuthenticationScreen/OTPVerificationScreen";
import SetNewPasswordScreen from "../screen/AuthenticationScreen/SetNewPasswordScreen";
import CalenderScreen from "../screen/CalenderScreen";
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

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="BottomTabs"  component={BottomTabs} />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
      />
      <Stack.Screen
        name="OTPVerificationScreen"
        component={OTPVerificationScreen}
      />


      <Stack.Screen
        name="SetNewPasswordScreen"
        component={SetNewPasswordScreen}
      />

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

      <Stack.Screen
        name="CertificatesModelScreen"
        component={CertificatesModelScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
