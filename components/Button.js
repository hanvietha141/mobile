import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SHADOWS, SIZES } from "../constants";

const CircleButton = ({ imgUrl, handlerPress, ...props }) => {
  return ( 
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9,
        ...SHADOWS.light,
        ...props,
      }}
      // onPress={handlerPress}
    >
      {/* <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      /> */}
      <Text>button</Text>
    </TouchableOpacity>
  );
};

const RectButton = () => {
  return (
    <View>
      <Text>RectButton</Text>
    </View>
  );
};

export { CircleButton, RectButton };
