import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function bus() {
  return (
    <View>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.text1}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
