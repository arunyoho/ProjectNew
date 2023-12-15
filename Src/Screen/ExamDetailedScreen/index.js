// import from react
import React, { useState } from "react";
// import from react native
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
// imports from constants
import { COLORS, SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import {
  Ionicons
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const ExamDetailedScreen = () => {
   // for colors
   const { colors, isDarkMode } = useStateContext();

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
      marginLeft: SIZES.base,
      color: colors.textColor,
    },
    back: {
      marginRight: SIZES.radius,
      backgroundColor: colors.iconBackground,
      padding: SIZES.base,
      borderRadius: 10,
    },
 title:{
  fontSize:SIZES.h3,
  fontWeight:"bold",
 },
 titlehead:{
  marginTop:SIZES.radius,
  backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
  padding:SIZES.padding,
  borderRadius:20
 },
 time:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop:SIZES.base
 },
 timetext:{
  fontWeight:"bold",
  fontSize:SIZES.h3,
  textAlign:"center"
 },
 timetext1:{
  fontWeight:"bold",
  fontSize:SIZES.h3,
  marginRight:35
 },
 image:{
  width:60,
  height:60,
  borderRadius:60
 },
 imageview:{
  marginTop:SIZES.padding,
  flexDirection:"row",
  
 },
 notify:{
  // borderWidth:1,
  backgroundColor:Colors.lightRed,
  padding:SIZES.base,
  borderRadius:10,
  alignItems:"center"
  
  // padding:SIZES.radius
 },
 bottom:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  

  padding:10
 },
 enroll:{
  backgroundColor: COLORS.violet,
  height: 50,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 26,
  marginHorizontal: 20,
  // marginHorizontal:15
  marginTop:SIZES.padding
 },
 bottomsheet:{
  backgroundColor: colors.cardBackground,
  borderTopEndRadius:25,
  borderTopStartRadius:25,
  flex:1,
  marginTop:SIZES.padding
 },
 exam:{
  color:colors.textColor,
  fontSize:SIZES.h2,
 },
 examoverview:{
  marginTop:SIZES.radius
 },
 exam1:{
  fontSize:SIZES.h3,
  color:colors.textColor,
 }
   
   
  
   
   

   
  });

  return (
    <SafeAreaView style={styles.grandParent}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.back}
          >
            <Ionicons name="ios-arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <View>
            <Text style={styles.heading}> Exam Details</Text>
          </View>
        </View>

        <View style={styles.titlehead}>
          <Text style={styles.title}>
            App Development Exams
          </Text>
          <View style={styles.time}>
            <View>
            <Text style={styles.timetext}>
              Time
            </Text>
            <Text>
              2 hrs
            </Text>
            </View>
            <View>
            <Text  style={styles.timetext}>
              Duration
            </Text>
            <Text>
              10.00AM to 12.00AM
            </Text>
            </View>
          </View>

          <View style={styles.time}>
            <View>
            <Text style={styles.timetext}>
              Marks
            </Text>
            <Text>
              50
            </Text>
            </View>
            <View  style={styles.timetext1}>
            <Text style={styles.timetext} >
              Online
            </Text>
            
            </View>
          </View>
          
        </View>

        <View style={styles.bottomsheet}>
        <View style={styles.bottom}>

        <View style={styles.imageview}>
          <Image
          src="https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=600"
          style={styles.image}
          />
        <View style={{marginLeft:10,marginTop:10}}>
          <Text style={{color:colors.textColor,fontWeight:"bold",fontSize:SIZES.h3}}>
            Sanjay Yoho
          </Text>
        </View>
        </View>

        <View>
      
        <View>
        <TouchableOpacity style={styles.notify}>
          <Text>
            Notify
          </Text>
        </TouchableOpacity>
        </View>
        </View>

        </View>
        <View style={styles.examoverview}>
          <Text style={styles.exam}>
            Exam Overview:
          </Text>
          <View style={styles.examoverview} >
          <Text style={styles.exam1} numberOfLines={4}>
          Figurative description relies on creating likenesses between objects,
           often through simile (e.g. like a snowflake...or fragile as a snowflake...)
            or metaphor.
           Such likenesses allow the reader to perceive the object more precisely.
          </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.enroll}>
          <Text style={{color:"white"}}>
            Enroll Now
          </Text>
        </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ExamDetailedScreen;
