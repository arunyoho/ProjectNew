// HistoryExamScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useStateContext } from '../../context/StateContext/StateContext'; 
import { dummyData } from '../../components/dummyData';

const ExamHistoryScreen = () => {
  // Sample exam history data, replace with your actual data
  
  const { colors } = useStateContext();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    card: {
      width: '100%',
      padding: 20,
      borderRadius: 10,
      marginBottom: 15,
      backgroundColor:colors.cardBackground,
      borderRadius:10
      // elevation: 5, // Add elevation for a card-like shadow
    },
    cardText: {
      fontSize: 18,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exam History</Text>

      <FlatList
        data={dummyData.examHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>Course Name: {item.courseName}</Text>
            <Text style={styles.cardText}>Timing: {item.timing}</Text>
            <Text style={styles.cardText}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};



export default ExamHistoryScreen;
