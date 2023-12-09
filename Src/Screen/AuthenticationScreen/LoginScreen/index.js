// import from react
import React, { useState } from "react";
//import from react native
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
// import from expo vector
import { Ionicons, Feather } from "@expo/vector-icons";
// import from context
import { useStateContext } from "../../../context/StateContext/StateContext";
//import from constants
import { COLORS, SIZES } from "../../../constants/Index";
//import from screen
import ForgetPasswordScreen from "../ForgetPasswordScreen";

const LogInScreen = ({ navigation }) => {
   // use for colors
   const { colors } = useStateContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');
  
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Invalid email address');
    }
  
    // Validate password
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    }
  
    // Check if any errors exist
    if (emailError || passwordError) {
      // Handle the case where there are validation errors
      console.log('Validation failed. Please check the form.');
      return;
    }
  
    // Your login logic here (e.g., API call, authentication)
    console.log('Logging in with:', { email, password });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // paddingHorizontal: 20,
      backgroundColor:colors.background
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderColor: "gray",
      borderRadius: 25,
      padding: 10,
      height: 55,
      marginTop: 10,
      backgroundColor: COLORS.lightGray2,
      color:colors.textColor,
      marginHorizontal:15
      
    },
    input: {
      flex: 1,
      marginLeft: 10,
      color:colors.textColor
    },
    icon: {
      marginRight: 10,
    },
    errorText: {
      color: "red",
      marginBottom: 10,
      textAlign:"right"
    },
    forgot:{
      marginTop:SIZES.radius,
      alignItems:"flex-end",
      marginHorizontal:15
    },
    login:{
      alignItems:"center",
      marginBottom:10
    },
    logintext:{
      fontSize:SIZES.h2,
      fontWeight:"bold",
      color:colors.textColor
    },
    forgottext:{
      color:colors.textColor
    }
  });

  return (
    <View style={styles.container}>
       <Image
        src="https://st3.depositphotos.com/3591429/13204/i/450/depositphotos_132044380-stock-photo-graphic-text-and-learning-concept.jpg"
        style={{ width:"100%",height:"40%", alignSelf: 'center', marginBottom: 20 }}
      />
      
      <View style={styles.login}>
        <Text style={styles.logintext}>
             Login
        </Text>
      </View>
      
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color={COLORS.blue} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError(''); 
          }}
        />
      </View>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="key" size={24} color={COLORS.blue} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setPasswordError(''); 
          }}
        />
        <TouchableOpacity  onPress={() => setShowPassword(!showPassword)}>
          <Ionicons  name={showPassword ? "eye" : "eye-off"} size={24} color={COLORS.blue} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

     
     <TouchableOpacity 
     onPress={()=>navigation.navigate(ForgetPasswordScreen)}
     style={styles.forgot}>
      <Text style={styles.forgottext}>
        Forgot Password?
      </Text>
     </TouchableOpacity>

      {/* Login Button */}
      <View style={{ alignItems: "center", marginTop: 30 }}>
      <TouchableOpacity
  style={{
    backgroundColor: COLORS.violet,
    height: 57,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 26,
    paddingHorizontal: 20,
    marginHorizontal:15
  }}
  onPress={handleLogin}
>
  <Text
    style={{
      color: "white",
      fontWeight: "bold",
      flex: 1,
      textAlign: "center",
    }}
  >
    Log In
  </Text>
  
</TouchableOpacity>
      </View>
    </View>
  );
};



export default LogInScreen;
