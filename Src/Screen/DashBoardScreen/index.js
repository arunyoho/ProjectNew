// import from react
import React, { useState,useEffect } from "react";
// import from react native
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// imports from constants
import { COLORS, FONTS, SIZES, icons, images } from "../../constants/Index";
// imports from context
import useStateContext from "../../context/StateContext/StateContext"
// import from expo vector icons
import {
  MaterialIcons,
  Ionicons,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import CalendarPicker from 'react-native-calendar-picker';
import MyCalendar from "../../components/Calender";




  const DashBoardScreen = ({navigation}) => {
  
   

// for colors
const { colors, isDarkMode } = useStateContext();

// styles

const styles = StyleSheet.create({
  grandParent: {
    flex: 1,
    backgroundColor:Colors.greenAlpha,
    paddingHorizontal: SIZES.radius,
    paddingVertical: SIZES.radius,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between"
  },

  heading: {
    fontSize: SIZES.h4,
    fontWeight: "bold",
    marginLeft: SIZES.radius,
    color: colors.textColor,
  },
  heading1: {
    fontSize: SIZES.h5,
    fontWeight: "bold",
    marginLeft: SIZES.radius,
    color: colors.textColor,
  },
  back: {
    marginRight: SIZES.radius,
    backgroundColor: colors.iconBackground,
    padding: SIZES.base,
    borderRadius: 10,
  },
courses:{
  backgroundColor:Colors.greenAlpha,
  borderRadius:10,
  padding:SIZES.padding,
  marginTop:SIZES.padding,
  flex:1,
  height:150,
  alignItems:"center",
  justifyContent:"center",
  margin:SIZES.base,
 

},
Exams:{
  backgroundColor:Colors.purpleAlpha,
  borderRadius:10,
  padding:SIZES.padding,
  marginTop:SIZES.padding,
  flex:1,
  height:150,
  alignItems:"center",
  justifyContent:"center",
  margin:SIZES.base,
},
coursenumber:{
  fontSize:SIZES.h2
},
coursetext:{
  fontSize:SIZES.h3
},
examtext:{
  fontSize:SIZES.h3,
},
videos:{
  backgroundColor:Colors.primaryAlpha,
  borderRadius:10,
  padding:SIZES.padding,
  marginTop:SIZES.radius,
  flex:1,
  height:150,
  alignItems:"center",
  justifyContent:"center",
  margin:SIZES.base,
},
class:{
  backgroundColor:Colors.redAlpha,
  borderRadius:10,
  padding:SIZES.padding,
  marginTop:SIZES.radius,
  flex:1,
  height:150,
  alignItems:"center",
  justifyContent:"center",
  margin:SIZES.base,
},
lesson:{
  backgroundColor:"red",
  padding:30,
  margin:SIZES.base,
  borderRadius:10
},
container: {
  flex: 1,
  marginTop: 50,
  padding: 16,
},
addButton: {
  marginTop: 16,
  padding: 10,
  backgroundColor: '#3498db',
  borderRadius: 5,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
},
eventsContainer: {
  marginTop: 20,
},
eventsHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
 
});
  return (
    <SafeAreaView style={styles.grandParent}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      
      <View  style={styles.name}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color="black" />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Sasvanth</Text>
          <Text  style={styles.heading1}>Arun@gmail.com</Text>
        </View>
       
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        </View>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={styles.courses}>
        <Text style={styles.coursenumber}>
          20
        </Text>
        <Text style={styles.coursetext}>
          Courses
        </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.Exams}>
        <Text style={styles.coursenumber}>
           10
        </Text>
        <Text style={styles.examtext}>
       Exams Completed
        </Text>
       </TouchableOpacity>
       </View>


<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={styles.videos}>
        <Text style={styles.coursenumber}>
          30
        </Text>
        <Text style={styles.coursetext}>
          Videos Watched
        </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.class}>
        <Text style={styles.coursenumber}>
           10
        </Text>
        <Text style={styles.examtext}>
       Classes Attended
        </Text>
       </TouchableOpacity>
       </View>

<TouchableOpacity style={styles.lesson}>
  <Text style={{fontSize:SIZES.h3}}>
    App Development
  </Text>
  <View style={{flexDirection:"row",alignItems:"center",marginTop:SIZES.base}} >
  <FontAwesome name="play-circle-o" size={24} color="black" />
  <Text style={{marginLeft:5}}>
 24 Lessons
  </Text>
  </View>

  <View style={{flexDirection:"row",alignItems:"center",marginTop:SIZES.base}} >
  <Ionicons name="time" size={24} color="black" />
  <Text>
   15 hrs
  </Text>
  </View>
  

</TouchableOpacity>
    <View>
      <Text style={{fontSize:SIZES.h2,fontWeight: 'bold',margin:SIZES.base,}}>
        Events
      </Text>
    </View>

    <MyCalendar/>

    <View style={{flexDirection:"row"}}>
       <TouchableOpacity style={styles.videos}>
        <Text style={styles.coursenumber}>
          30
        </Text>
        <Text style={styles.coursetext}>
          Videos Watched
        </Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.class}>
        <Text style={styles.coursenumber}>
           10
        </Text>
        <Text style={styles.examtext}>
       Classes Attended
        </Text>
       </TouchableOpacity>
       </View>


      
    </KeyboardAwareScrollView>
    </ScrollView>
  </SafeAreaView>
  );
}

export default DashBoardScreen;
