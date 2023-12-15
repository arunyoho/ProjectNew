//  import from React
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
import { Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
// import from expo-vector-icons
import { Ionicons } from "@expo/vector-icons";
//import from constants
import { COLORS, SIZES } from "../../constants/Index";
import Colors from "../../constants/Colors";

//import from context
import { useStateContext } from "../../context/StateContext/StateContext";



const CommunityProfileScreen = ({navigation}) => {
  // use for colors
  const { colors, isDarkMode } = useStateContext();

  // for dummydata
  const dummyData = {
    student: {
      name: "John wick",
      course: "Computer Science",
      batch: "Batch A",
      image: "https://placekitten.com/200/200", // Replace with actual image URL
    },
    batchMembers: [
      {
        name: "Alice Smith",
        designation: "Student",
        image: "https://placekitten.com/150/150", // Replace with actual image URL
      },
      {
        name: "little Johnson",
        designation: "Instructor",
        image: "https://placekitten.com/160/160", // Replace with actual image URL
      },
      {
        name: "Rajinikanth",
        designation: "Instructor",
        image: "https://placekitten.com/160/160", // Replace with actual image URL
      },
      {
        name: "Ajithkumar",
        designation: "Instructor",
        image: "https://placekitten.com/160/160", // Replace with actual image URL
      },
      // Add more members as needed
    ],
  };

  // for styles
  const styles = StyleSheet.create({
    grandparent: {
      flex: 1,
      paddingHorizontal: SIZES.radius,
      paddingVertical: SIZES.radius,
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
    },
    cardContainer: {
      flexDirection: "row",
      marginBottom: 16,
      borderRadius: 10,
      backgroundColor: colors.cardBackground,
      overflow: "hidden", // Clip the rounded corners
      alignItems: "center",
      padding: 8, // Adjust the padding as needed
    },
    memberInfo: {
      marginLeft: 8,
      color: colors.textColor,
    },
    memberName: {
      fontWeight: "bold",
      fontSize: 16,
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
    container: {
      paddingVertical: 16,
    },
    profileContainer: {
      alignItems: "center",
      marginBottom: 16,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 8,
    },
    name: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.textColor,
    },
    course: {
      fontSize: 16,

      color: colors.textColor,
    },
    batch: {
      fontSize: 16,
      color: "gray",
      color: colors.textColor,
    },
    membersTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: colors.textColor,
    },

    cardContent: {
      padding: SIZES.radius, // Adjust the padding as needed
    },
    listContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    memberName: {
      fontWeight: "bold",
      fontSize: 16,
      color: colors.textColor,
    },
    designation: {
      color: colors.textColor,
    },
  });
  // for dummy
  const { name, course, batch, image } = dummyData.student;
  return (
    <SafeAreaView style={styles.grandparent}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
             <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Community</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://static8.depositphotos.com/1008303/880/i/450/depositphotos_8803246-stock-photo-asian-college-student.jpg",
              }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.batch}>{batch}</Text>
            <Text style={styles.course}>{course}</Text>
          </View>

          <Text style={styles.membersTitle}>Batch Members</Text>
          {dummyData.batchMembers.map((member, index) => (
            <View
              key={index}
              style={[styles.cardContainer, styles.cardContent]}
            >
              <Image  source={{ uri: member.image }} style={{width:50,height:50,borderRadius:50}} />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.designation}>{member.designation}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CommunityProfileScreen;
