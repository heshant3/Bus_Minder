import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Location() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.view1}>
        <Text style={styles.head}> Location</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view2_1}>
          <View style={styles.Route}>
            <View style={styles.RouteBox}>
              <Text style={styles.RouteNumText}>EX 1-2</Text>
              <Text style={styles.RouteText}>Colombo - Matara</Text>
            </View>
          </View>
          <View style={styles.BookInfo}>
            <View style={styles.ReservedView}>
              <View style={styles.ReservedBox}>
                <Ionicons name="speedometer" size={24} color="#2889eb" />
              </View>
              <Text style={styles.BookInfoText}>200 km/h</Text>
            </View>
          </View>
        </View>
        <View style={styles.view2_2}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EEF1",
    flex: 1,
  },

  view1: {
    flex: 1,
    justifyContent: "center",
  },

  view2: {
    flex: 6,
  },

  head: {
    marginTop: 50,
    fontSize: 29,
    color: "#252525",
    alignSelf: "flex-start",
    fontFamily: "Poppins_500Medium",
  },

  view2_1: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },

  view2_2: {
    flex: 5,
    flexDirection: "row",
  },

  Route: {
    justifyContent: "center",
    flex: 1.5,
  },

  RouteBox: {
    backgroundColor: "#3F86FA",
    width: "100%",
    height: 70,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,

    justifyContent: "center",
  },

  BookInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  BookInfoText: {
    marginLeft: 20,
    color: "#252525",
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },

  ReservedView: {
    marginVertical: 3,
    flexDirection: "row",
    alignItems: "center",
  },

  ReservedBox: {
    marginLeft: 10,
  },

  RouteNumText: {
    marginLeft: 20,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: 30,
    marginVertical: -5,
  },

  RouteText: {
    marginLeft: 20,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_300Light",
    fontSize: 16,
    marginVertical: -5,
  },
});
