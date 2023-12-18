import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { SIZES,COLORS } from "../../constants/Index";
import { useStateContext } from "../../context/StateContext/StateContext";


const CourseDetailedScreen = ({ navigation }) => {
  // for colors and isdarkmode
  const { colors, isDarkMode } = useStateContext();

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
    back: {
      backgroundColor: Colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
    heading: {
      fontSize: SIZES.h2,
      fontWeight: "bold",
      marginLeft: SIZES.radius,
      color: Colors.textColor,
    },
    videoContainer: {
      marginTop: SIZES.radius,
      height: 200,
    },
    container: {
      // flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
    },
    video: {
      alignSelf: "center",
      width: "100%",
      height: 200,
    },
    buttons: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    courseheading: {
      marginTop: SIZES.radius,
    },
    lessonheading: {
      marginTop: SIZES.radius,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: SIZES.base,
    },
    lesson: {
      flexDirection: "row",
      alignItems: "center",
    },
    coursetext: {
      fontWeight: "bold",
      fontSize: SIZES.padding,
    },
    introtext: {
      fontWeight: "bold",
      fontSize: SIZES.body3,
      color: "grey",
    },
    desctext: {
      fontWeight: "bold",
      fontSize: SIZES.h3,
    },
    classheading: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      borderRadius: 15,
      padding: SIZES.radius,
      alignItems: "center",
      marginTop:SIZES.radius,
      marginHorizontal:SIZES.base
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
            <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <View>
            <Text style={styles.heading}>Course Details</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
        <View style={styles.courseheading}>
          <Text style={styles.coursetext}>Mobile Development Courses App</Text>
        </View>
        <View style={styles.courseheading}>
          <Text style={styles.desctext}>Description</Text>
          <Text numberOfLines={4}>
            Much of Video and Audio have common APIs that are documented in AV
            documentation. This page covers video-specific props and APIs. We
            encourage you to skim through this document to get basic video
            working, and then move on to AV documentation for more advanced
            functionality. The audio experience of video (such as whether to
            interrupt music already playing in another app, or whether to play
            sound while the phone is on silent mode) can be customized using the
            Audio API.
          </Text>
        </View>
        <View style={styles.courseheading}>
          <Text style={styles.desctext}>Classes</Text>
        </View>

        <View style={styles.lessonheading}>
          <Text style={styles.introtext}>Lesson-1 Introduction</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: SIZES.body3,
            }}
          >
            30 Min
          </Text>
        </View>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>1</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Effective Business</Text>
              <Text>20 min</Text>
            </View>
          </View>
          <View>
            <AntDesign name="play" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>2</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Financial Planning</Text>
              <Text>10 min</Text>
            </View>
          </View>
          <View>
            <AntDesign name="play" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>3</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Project Management</Text>
              <Text>30 min</Text>
            </View>
          </View>
          <View>
            <AntDesign name="play" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <View style={styles.lessonheading}>
          <Text style={styles.introtext}>Lesson-2 Basics</Text>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: SIZES.body3,
            }}
          >
            60 Min
          </Text>
        </View>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>1</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Effective Business</Text>
              <Text>20 min</Text>
            </View>
          </View>
          <View>
          <FontAwesome5 name="lock" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>2</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Financial Planning</Text>
              <Text>10 min</Text>
            </View>
          </View>
          <View>
          <FontAwesome5 name="lock" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.classheading}>
          <View style={styles.lesson}>
            <Text>3</Text>
            <View style={{ marginLeft: SIZES.padding }}>
              <Text>Project Management</Text>
              <Text>30 min</Text>
            </View>
          </View>
          <View>
          <FontAwesome5 name="lock" size={24} color="black" />
          </View>
        </TouchableOpacity>
        </ScrollView>
        <View style={{ alignItems: "center", marginTop:10}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.violet,
              height: 57,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 26,
              paddingHorizontal: 20,
              marginHorizontal: 15,
            }}
           onPress={()=>navigation.navigate("PaymentsScreen")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                flex: 1,
                textAlign: "center",
              }}
            >
              Enroll Now
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default CourseDetailedScreen;

// import * as React from 'react';
// import { View, StyleSheet, Button } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';

// export default function App() {
//   const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   return (
//     <View style={styles.container}>
//       <Video
//         ref={video}
//         style={styles.video}
//         source={{
//           uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
//         }}
//         useNativeControls
//         resizeMode={ResizeMode.CONTAIN}
//         isLooping
//         onPlaybackStatusUpdate={status => setStatus(() => status)}
//       />
//       <View style={styles.buttons}>
//         <Button
//           title={status.isPlaying ? 'Pause' : 'Play'}
//           onPress={() =>
//             status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
//           }
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//   },
//   video: {
//     alignSelf: 'center',
//     width: 320,
//     height: 200,
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
