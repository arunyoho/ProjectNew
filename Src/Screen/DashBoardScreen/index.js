// import from react
import React from "react";
// import from react native
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// imports from constants
import { SIZES } from "../../constants/Index";
// imports from context
import { useStateContext } from "../../context/StateContext/StateContext";
// import from expo vector icons
import {
  Entypo,
  FontAwesome,
  Ionicons
} from "@expo/vector-icons";
// import from constants
import Colors from "../../constants/Colors";

// import from components
import MyCalendar from "../../components/Calender";




  const DashBoardScreen = ({navigation}) => {
  
   const {top} = useSafeAreaInsets();

// for colors
const { colors,isDarkMode} = useStateContext();

// styles
const styles = StyleSheet.create({
  grandParent: {
    flex: 1,
    backgroundColor:isDarkMode ? Colors.greenAlpha : colors.background,
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
  backgroundColor: isDarkMode ? Colors.greenAlpha : colors.cardBackground,
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
  backgroundColor: isDarkMode ? Colors.purpleAlpha : colors.cardBackground,
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
  fontSize:SIZES.h2,
  color:colors.textColor
},
coursetext:{
  fontSize:SIZES.h3,
  color:colors.textColor
},
examtext:{
  fontSize:SIZES.h3,
  color:colors.textColor
},
videos:{
  backgroundColor: isDarkMode ? Colors.primaryAlpha : colors.cardBackground,
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
  backgroundColor: isDarkMode ? Colors.redAlpha : colors.cardBackground,
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
  backgroundColor: isDarkMode ? Colors.redAlpha : colors.cardBackground,
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
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Entypo name="menu" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <View>
          <Text style={styles.heading}>Sasvanth</Text>
          <Text  style={styles.heading1}>Arun@gmail.com</Text>
        </View>
       
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications" size={24} color={Colors.primary} />
        </TouchableOpacity>
        </View>

<View style={{flexDirection:"row"}}>
       <TouchableOpacity style={styles.courses}
       onPress={()=> navigation.navigate("CourseDetailedScreen")}>
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
  <Text style={{fontSize:SIZES.h3,color:colors.textColor}}>
    App Development
  </Text>
  <View style={{flexDirection:"row",alignItems:"center",marginTop:SIZES.base}} >
  <FontAwesome name="play-circle-o" size={24} color={colors.primary} />
  <Text style={{marginLeft:5,color:colors.textColor}}>
 24 Lessons
  </Text>
  </View>

  <View style={{flexDirection:"row",alignItems:"center",marginTop:SIZES.base}} >
  <Ionicons name="time" size={24} color={colors.primary} />
  <Text style={{marginLeft:5,color:colors.textColor}}>
   15 hrs
  </Text>
  </View>
  

</TouchableOpacity>
    <View>
      <Text style={{fontSize:SIZES.h2,fontWeight: 'bold',margin:SIZES.base, color:colors.textColor}}>
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
