import { View, Text, SafeAreaView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React from "react";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function Home() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Function to generate Left seat Row
  const renderLeftSeats = () => {
    let seats = [];
    let seatNumber = 1; // Initialize seat number
    for (let i = 0; i < 7; i++) {
      let column = [];
      for (let j = 0; j < 2; j++) {
        let seatBackgroundColor = "#FFFFFF"; // default background color
        // Check if it's the first or fourth seat in a row, set background color to blue
        if ((i === 0 && j === 0) || (i === 3 && j === 0)) {
          seatBackgroundColor = "#ABCBFF";
        }
        column.push(
          <View
            key={`${i}-${j}`}
            style={[styles.Seat, { backgroundColor: seatBackgroundColor }]}
          >
            <Text style={styles.SeatText}>{seatNumber++}</Text>
          </View>
        );
      }
      seats.push(
        <View key={i} style={{ flexDirection: "row" }}>
          {column}
        </View>
      );
    }
    return seats;
  };

  // Function to generate Right seat Row
  const renderRightSeats = () => {
    let seats = [];
    let seatNumber = 15; // Initialize seat number
    for (let i = 0; i < 7; i++) {
      let column = [];
      for (let j = 0; j < 2; j++) {
        let seatBackgroundColor = "#FFFFFF"; // default background color
        // Check if it's the first or fourth seat in a row, set background color to blue
        if (i === 0 && j === 0) {
          seatBackgroundColor = "#ABCBFF";
        }
        column.push(
          <View
            key={`${i}-${j}`}
            style={[styles.Seat, { backgroundColor: seatBackgroundColor }]}
          >
            <Text style={styles.SeatText}>{seatNumber++}</Text>
          </View>
        );
      }
      seats.push(
        <View key={i} style={{ flexDirection: "row" }}>
          {column}
        </View>
      );
    }
    return seats;
  };

  return (
    <SafeAreaView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* 
     Head viewport
    */}
      <View style={styles.view1}>
        <Text style={styles.head}> Select your route</Text>
      </View>
      {/* 
     Bottom viewport
    */}
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
              <Text style={styles.BookInfoText}>Reserved</Text>
              <View style={styles.ReservedBox}></View>
            </View>
            <View style={styles.ReservedView}>
              <Text style={styles.BookInfoText}>Available</Text>
              <View style={styles.AvailableBox}></View>
            </View>
          </View>
        </View>
        <View style={styles.view2_2}>
          <View style={styles.LeftBusViewPort}>
            {/* Rendering seats dynamically */}
            {renderLeftSeats()}
          </View>
          <View style={styles.RightBusViewPort}>{renderRightSeats()}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
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
    marginTop: "50@s",
    fontSize: "25@s",
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
    height: "70@s",
    borderTopRightRadius: "10@s",
    borderBottomRightRadius: "10@s",

    justifyContent: "center",
  },

  BookInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  BookInfoText: {
    marginLeft: "20@s",
    color: "black",
    fontFamily: "Poppins_300Light",
    fontSize: "18@s",
  },

  ReservedView: {
    marginVertical: "3@s",
    flexDirection: "row",
    alignItems: "center",
  },

  ReservedBox: {
    marginLeft: "10@s",
    backgroundColor: "#ABCBFF",
    width: "15@s",
    height: "15@s",
    borderRadius: "2@s",
  },

  AvailableBox: {
    marginLeft: "10@s",
    backgroundColor: "#FFFFFF",
    width: "15@s",
    height: "15@s",
    borderRadius: "2@s",
  },

  RouteNumText: {
    marginLeft: "20@s",
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
    fontSize: "30@s",
    marginVertical: "-5@s",
  },

  RouteText: {
    marginLeft: "20@s",
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Poppins_300Light",
    fontSize: "16@s",
    marginVertical: "-5@s",
  },

  LeftBusViewPort: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  Seat: {
    justifyContent: "center",
    margin: "10@s",
    width: "35@s",
    height: "35@s",
    backgroundColor: "#FFFFFF",
    borderRadius: "5@s",
  },

  RightBusViewPort: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },

  SeatText: {
    alignItems: "center",
    alignSelf: "center",
    fontFamily: "Poppins_400Regular",
    fontSize: "16@s",
    color: "#000000",
  },
});
