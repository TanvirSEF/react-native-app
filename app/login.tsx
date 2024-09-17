import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        resizeMode="cover"
        source={require("@/assets/images/login.png")}
        style={{
          height: 350,
          width: "100%",
        }}
      />
      <View
        style={{
          padding: 20,
          gap: 20,
        }}
      >
        <TextInput
          placeholder="Enter Your Email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        />
        <MyButton
          title={"Login"}
          onPress={() => {
            router.navigate("/home");
          }}
        />
      </View>
    </View>
  );
};

export default Login;
