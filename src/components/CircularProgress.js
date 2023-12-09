import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBarWithPercentage = ({ progress, size }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(progress);
  }, [progress]);

  return (
    <View style={styles.progressBarContainer}>
      <View
        style={[
          styles.progressBar,
          { width: `${progress}%`, height: size },
        ]}
      />
      <Text style={styles.percentageText}>{`${percentage}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    backgroundColor: 'blue', // Change color as needed
  },
  percentageText: {
    marginLeft: 8, // Adjust margin as needed
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Change color as needed
  },
});

export default ProgressBarWithPercentage;
