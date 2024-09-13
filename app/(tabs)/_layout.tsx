import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen name="contact" options={{ title: "Contact",tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="phone-square" color={color} />
          ), }} />
          <Tabs.Screen name="account" options={{ title: "Account",tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="phone-square" color={color} />
          ), }} />

    </Tabs>
    
  );
};

export default TabRoot;
