import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOW, assets, SHADOWS } from "../constants";
import { CircleButton } from "./Button";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
  
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
    </View>
  );
};

export default NFTCard;
