import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

export default function GetStartedButton() {
  return (
    <Animated.View entering={FadeInDown.delay(200).springify()}>
      <TouchableOpacity
        style={{ height: hp(7), width: wp(80) }}
        className="bg-rose-500 items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200 mt-5"
      >
        <Text
          style={{ fontSize: hp(3) }}
          className="text-white font-bold tracking-widest"
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
