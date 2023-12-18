// import from react
import React , { useState }  from "react";
// import from react native
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../../constants/Colors";

const HelpCenterScreen = ({navigation}) => {
  // for colors
  const { colors, isDarkMode } = useStateContext();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const data = [
    { id: 1, title: "Reports", backgroundColor: "#9bcefc" },
    { id: 2, title: "Payments", backgroundColor: "#ffe1C7" },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCards(filteredData);
  };

  // styles
  const styles = StyleSheet.create({
    grandParent: {
      flex: 1,
      backgroundColor: isDarkMode ?Colors.greenAlpha:colors.background,
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
    dashedLine: {
      marginTop: 10,
      // height: 1,
      borderWidth: 0.5,
      borderStyle: "dotted",
      borderColor: "grey",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      // borderWidth: 1,
      // borderColor: "#ccc",
      borderRadius: SIZES.radius,
      marginBottom: 10,
      marginTop: 10,
      paddingHorizontal: 10,
      backgroundColor: "white",
      elevation:5,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
    },
    clearButton: {
      padding: 8,
    },
    paperlist: {
      flexDirection: "row",
      paddingHorizontal: SIZES.base,
      justifyContent: "space-between",
      marginTop: SIZES.radius,
    },
    paperlist: {
      flexDirection: "row",
      paddingHorizontal: SIZES.base,
      justifyContent: "space-between",
      marginTop: SIZES.radius,
    },
    card: {
      paddingHorizontal: SIZES.padding * 2,
      paddingVertical: SIZES.padding * 2,
      borderRadius: 10,
      marginVertical: SIZES.base,
    },
    cardText: {
      fontWeight: "bold",
    },


  });


  
  return (
    <SafeAreaView style={styles.grandParent}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}
        >
          <Ionicons name="ios-arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}> Help center</Text>
        </View>
      </View>

      <View style={styles.dashedLine} />


      <View style={{margin:SIZES.padding}}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:SIZES.h2}}>
          Hi, How can we help you ?
        </Text>
      </View>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />

        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => setSearchQuery("")}
        >
          <Icon name="clear" size={20} color="gray" />
        </TouchableOpacity>
      </View>
         {/* Display filtered cards */}
         {searchQuery !== "" && (
        <View>
          {filteredCards.map((card) => (
            <View
              key={card.id}
              style={[styles.card, { backgroundColor: card.backgroundColor }]}
            >
              <Text style={styles.cardText}>{card.title}</Text>
            </View>
          ))}
        </View>
      )}





      {/* <View style={styles.paperlist}>
            <View
              style={{
                backgroundColor: isDarkMode ? "#9bcefc" : colors.cardBackground,
                paddingHorizontal: SIZES.padding*2,
                paddingVertical: SIZES.padding*2,
                borderRadius: 10,
              }}
            >
               <Text>Reports</Text>
            </View>

            <View
              style={{
                backgroundColor: isDarkMode ? "#ffe1C7" : colors.cardBackground,
                paddingHorizontal: SIZES.padding*2,
                paddingVertical: SIZES.padding*2,
                borderRadius: 10,
              }}
            >
               <Text>Payments</Text>
            </View>
          </View> */}










    </SafeAreaView>
  );
};

export default HelpCenterScreen;