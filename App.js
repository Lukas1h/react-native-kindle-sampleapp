import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native-kindle";

export default function App() {
  const [numTimesPressed, setNumTimesPressed] = useState(0);

  return (
    <View style={styles.container}>
      <Text>
        Pressed {numTimesPressed}
        {numTimesPressed == 1 ? "time" : "times"}.
      </Text>
      <Button
        onPress={() => {
          setNumTimesPressed(numTimesPressed + 1);
        }}
        title="Press Me!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:"center",
    alignItems:"center"
  },
});
