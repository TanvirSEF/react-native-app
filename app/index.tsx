import { View, Text } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton
        title={"Continue"}
        onPress={() => {
          router.navigate("./login");
        }}
      />
    </View>
  );
};

export default Home;
