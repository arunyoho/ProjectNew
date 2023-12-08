//  import from React
import React from 'react'
// import from react native
import { Text, View } from 'react-native'


function DashBoardScreen({ navigation }) {
  return (
    <View>
      <Text>Aviation Counseling App</Text>
      <Button
        title="Go to Counseling"
      />
    </View>
  );
}

export default DashBoardScreen;
