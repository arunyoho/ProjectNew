// import from expo vector
import { FontAwesome } from "@expo/vector-icons";
// import from expo store
import * as SecureStore from "expo-secure-store";
// import from react
import React, { useEffect, useRef, useState } from "react";
// import from react native
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import from constants
import Colors from "../../constants/Colors";
import { COLORS, FONTS, SIZES } from "../../constants/Index";
// import from context
import { useStateContext } from "../../context/StateContext/StateContext";

const STORAGE_KEY = "Messages";

const CommunityScreen = ({ navigation }) => {

  const flatListRef = useRef(null);
  // states for message
  const [messages, setMessages] = useState([]);
  // states for newmessage
  const [newMessage, setNewMessage] = useState("");

  // function for clear storage
  const clearStorage = async () => {
    try {
      await SecureStore.deleteItemAsync(STORAGE_KEY);
      console.log("Storage cleared.");
    } catch (error) {
      console.error("Error clearing storage:", error);
    }
  };

  // clearStorage();

  useEffect(() => {
    // Load chat messages from SecureStore
    async function loadMessages() {
      try {
        const messages = await SecureStore.getItemAsync(STORAGE_KEY);
        if (messages) {
          setMessages(JSON.parse(messages));
        }
      } catch (error) {
        console.error("Error loading messages:", error);
      }
    }
    loadMessages();
  }, []);

  const saveMessages = async (messages) => {
    try {
      await SecureStore.setItemAsync(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Error saving messages:", error);
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  // function for send
  const handleSend = () => {
    if (newMessage) {
      const newMsg = {
        text: newMessage,
        user: "user",
        id: messages.length,
        time: getCurrentTime(), // Include the current time
      };
      const updatedMessages = [...messages, newMsg];
      setMessages(updatedMessages);
      setNewMessage("");
      saveMessages(updatedMessages);
      // Scroll to the end of the FlatList
      if (flatListRef.current) {
        flatListRef.current.scrollToEnd({ animated: true });
      }

      setTimeout(() => {
        const botMsg = {
          text: "Welcome to my message",
          user: "bot",
          id: updatedMessages.length,
          time: getCurrentTime(),
          image: "https://wallpapercave.com/dwp1x/wp11551183.jpg",
        };
        const updatedMessagesWithBot = [...updatedMessages, botMsg];
        setMessages(updatedMessagesWithBot);
        saveMessages(updatedMessagesWithBot);

        // Scroll to the end of the FlatList after the bot's reply
        if (flatListRef.current) {
          flatListRef.current.scrollToEnd({ animated: true });
        }
      }, 1000);
    }
  };
  // for colors and darkmode
  const { colors, isDarkMode } = useStateContext();

  // for styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: isDarkMode ? Colors.greenAlpha : colors.background,
    },
    userMessage: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      marginHorizontal: SIZES.radius,
    },
    botMessage: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginHorizontal: SIZES.radius,
    },
    messageContainer: {
      marginHorizontal: SIZES.base,
      marginVertical: SIZES.radius,
      alignSelf: "flex-start",
    },
    botProfilePicture: {
      width: 40,
      height: 40,
      // marginRight: SIZES.base,
      borderRadius: 25,
    },
    messageText: {
      fontSize: 16,
      color: colors.textColor,
      ...FONTS.h4,
      backgroundColor: colors.cardBackground,
      padding: 15,
      borderRadius: 15,
      elevation: 3,
      shadowColor: COLORS.black,
    },
    messageTime: {
      fontSize: 12,
      color: COLORS.gray30,
      ...FONTS.h5,
      marginHorizontal: 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.green,
      height: 100,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
    },
    profileContainer: {
      shadowColor: COLORS.black,
      elevation: 5,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.cardBackground,
      height: 100,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 10,
    },
    input: {
      flex: 1,
      fontSize: 16,
      backgroundColor: "#F5F5F5",
      borderRadius: 20,
      height: 50,
      paddingHorizontal: SIZES.radius,
      marginRight: SIZES.base,
      ...FONTS.h3,
    },
    sendButton: {
      color: "blue",
      marginLeft: 8,
    },
    Notification: {
      marginHorizontal: 3,
      color: colors.textColor,
      fontSize: SIZES.h3,
      fontWeight: "bold",
      marginLeft: 10,
    },
    Notification1: {
      marginHorizontal: 3,
      color: colors.textColor,
      fontSize: SIZES.h3,
      fontWeight: "bold",
      marginLeft: 10,
    },
    arrowContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    TextContaine: {
      display: "flex",
      flexDirection: "row",
    },
    profilepic: {
      // display:"flex",
      // flexDirection:"row",
      // alignItems:"center"
      flex: 1,
    },
  });
  
  return (
    <View style={styles.container}>
      {/* profile details */}
      <SafeAreaView style={styles.profileContainer}>
        <TouchableOpacity style={styles.arrowContainer}
         onPress={() => {
          navigation.navigate("CommunityProfileScreen");
        }}>
          <TouchableOpacity>
            <Image
              src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"
              resizeMode="contain"
              style={{
                width: 60,
                height: 60,
                borderRadius: 60,
                // tintColor: colors.iconBackground,
                // tintColor: colors.textColor,
              }}
            />
          </TouchableOpacity>
          <View style={styles.profilepic}>
            {/* <Image source={{uri:"https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600"}} style={{borderRadius:100,height:40,width:40,marginHorizontal:SIZES.base}}/> */}
            <Text style={styles.Notification}>2024 Batch</Text>
            <Text style={styles.Notification1} numberOfLines={1}>
              ArunBalaji,Sanjay,Rajesh,Aravindh,Balaji
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: COLORS.cardBackground, flex: 1 }}>
            <View
              style={
                item.user === "user" ? styles.userMessage : styles.botMessage
              }
            >
              {item.user === "bot" && item.image && (
                <Image
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  style={styles.botProfilePicture}
                />
              )}
              <View style={styles.messageContainer}>
                <Text style={styles.messageText}>{item.text}</Text>
                <View>
                  <Text style={styles.messageTime}>{item.time} hrs</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={setNewMessage}
          placeholder="Type a message..."
          placeholderTextColor={COLORS.gray}
          place
        />
        <TouchableOpacity onPress={handleSend}>
          <FontAwesome
            name="send-o"
            size={26}
            color={COLORS.white}
            style={{ paddingLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommunityScreen;
