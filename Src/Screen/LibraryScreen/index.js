// import from react
import React from "react";
// import from react native
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from constants
import { SIZES, COLORS } from "../../constants/Index";
// import from expo
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
// import from react native paper
import { Button } from "react-native-paper";
import Colors from "../../constants/Colors";

const LibraryScreen = () => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  // State for the selected tab
  const [selectedTab, setSelectedTab] = React.useState("coding");

  // Placeholder course data (replace with your actual data)
  const courses = {
    coding: [
      {
        title: "React Native Fundamentals",
        instructor: "John Doe",
        description: "Learn the basics of React Native development.",
      },
      {
        title: "Advanced Web Development",
        instructor: "Jane Smith",
        description: "Explore advanced concepts in web development and design.",
      },
      // Add more coding courses
    ],
    maths: [
      {
        title: "Linear Algebra Basics",
        instructor: "Alice Johnson",
        description: "Understand the fundamental principles of linear algebra.",
      },
      {
        title: "Calculus Mastery",
        instructor: "Bob Williams",
        description: "Master the basics of calculus and its applications.",
      },
      // Add more maths courses
    ],
    science: [
      {
        title: "Quantum Physics Explained",
        instructor: "Eve Davis",
        description:
          "Explore the fascinating world of quantum physics and its real-world applications.",
      },
      {
        title: "Genetics and Evolution",
        instructor: "Charlie Brown",
        description:
          "Dive into the essential concepts of genetics and evolutionary biology.",
      },
      // Add more science courses
    ],
  };
  const selectedCourses = courses[selectedTab];

  // State for search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // Function to filter courses based on search query
  const filteredCourses = selectedCourses.filter((course) => {
    const { title, description, instructor } = course;
    const lowerSearchQuery = searchQuery.toLowerCase();
    return (
      title.toLowerCase().includes(lowerSearchQuery) ||
      description.toLowerCase().includes(lowerSearchQuery) ||
      instructor.toLowerCase().includes(lowerSearchQuery)
    );
  });

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
      color: COLORS.darkBlue,
    },
    dashedLine: {
      marginTop: 10,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: SIZES.radius,
      marginBottom: 5,
      // marginTop: 10,W3SE
      paddingHorizontal: 10,
      backgroundColor: "white",
      elevation: 5,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
    },
    clearButton: {
      padding: 8,
    },

    tabContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingTop: SIZES.radius,
      paddingBottom: SIZES.radius,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      
    },
    tabButton: {
      flex: 1,
      
    },
    activeTab: {
      backgroundColor: COLORS.violet,
    },
    tabButtonText: {
      fontWeight: "bold",
    },
    activeTabText: {
      color: "white",
    },
    card: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: SIZES.padding,
      backgroundColor: isDarkMode ? Colors.greenAlpha :colors.cardBackground,
      borderRadius: SIZES.radius,
      marginBottom: SIZES.base,
      marginTop: SIZES.radius,
    },
    cardContent: {
      flex: 1,
      marginRight: 10, 
    },
    cardText: {
      color: colors.textColor,
      fontSize: SIZES.body3,
    },
    cardDescription: {
      color:colors.textColor,
      color: "gray",
      fontSize: SIZES.body4,
      marginTop: 5,
    },
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}>Library</Text>
          </View>
        </View>

        <View style={styles.dashedLine} />

        <View style={{ marginTop: SIZES.padding }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />

            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setSearchQuery("")}
            >
              <Icon name="clear" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <Button
            mode="contained"
            style={[
              styles.tabButton,
              selectedTab === "coding" && styles.activeTab,
            ]}
            labelStyle={[
              styles.tabButtonText,
              selectedTab === "coding" && styles.activeTabText,
            ]}
            onPress={() => setSelectedTab("coding")}
          >
            Coding
          </Button>
          <Button
            mode="contained"
            style={[
              styles.tabButton,
              selectedTab === "maths" && styles.activeTab,
            ]}
            labelStyle={[
              styles.tabButtonText,
              selectedTab === "maths" && styles.activeTabText,
            ]}
            onPress={() => setSelectedTab("maths")}
          >
            Maths
          </Button>
          <Button
            mode="contained"
            style={[
              styles.tabButton,
              selectedTab === "science" && styles.activeTab,
            ]}
            labelStyle={[
              styles.tabButtonText,
              selectedTab === "science" && styles.activeTabText,
            ]}
            onPress={() => setSelectedTab("science")}
          >
            Science
          </Button>
        </View>

        <ScrollView>
          {/* Display filtered course details based on the selected tab and search query */}
          {filteredCourses.map((course, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{course.title}</Text>
                <Text style={styles.cardDescription}>{course.description}</Text>
              </View>
              <Text style={styles.cardText}>{course.instructor}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;
