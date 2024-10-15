import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GetStartedButton from "./GetStartedButton";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";

export default React.memo(function Homepage() {
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/welcome.png")}
        resizeMode="cover" // Optimized image scaling
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={styles.gradient} // Moved width/height styles here
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()} //The text enters in an animated view
          className="flex items-center"
        >
          <Text
            style={styles.titleText}
            className="text-white font-bold tracking-wide"
          >
            SFT <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={styles.titleText}
            className="text-white font-bold tracking-wide"
          >
            For You
          </Text>
        </Animated.View>
        <GetStartedButton />
      </LinearGradient>
    </View>
  );
});

const styles = StyleSheet.create({
  gradient: {
    width: wp(100),
    height: hp(70),
  },
  titleText: {
    fontSize: hp(5), // Responsive font size moved here for better performance
  },
});
