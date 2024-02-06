import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home";
import Location from "./Screen/Location";
import Info from "./Screen/Info";
import { FontAwesome5, FontAwesome6, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#2889eb",
          tabBarInactiveTintColor: "#a8a8aa",
          tabBarStyle: { height: 70 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome6 name="bus-simple" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Location"
          component={Location}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FontAwesome5 name="map-marked-alt" size={25} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="infocirlce" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
