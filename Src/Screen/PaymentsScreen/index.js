import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const PaymentsScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Validate input fields
    if (!cardNumber || !expiryDate || !cvv) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    // TODO: Implement payment logic with a payment gateway (e.g., Stripe, PayPal)

    // For demonstration purposes, show a success message
    Alert.alert('Success', 'Payment successful!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiryDate}
        onChangeText={(text) => setExpiryDate(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={(text) => setCVV(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Make Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentsScreen;
