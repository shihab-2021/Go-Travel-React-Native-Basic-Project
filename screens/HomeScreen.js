import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First section start */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* First section end */}

      {/* Second section start */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px font-bold]">
          Good Moments
        </Text>
        <Text className=" text-[#3C6072] text-base">
          We provide the best traveling facilities. GoTravel is the highly rated
          travel agent and the most secure travel agency.
        </Text>
      </View>
      {/* Second section start */}

      {/* circle section start */}
      <View className="w-[320px] h-[320px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[320px] h-[320px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
      {/* circle section start */}

      {/* Hero Image and Go btn section start */}
      <View className="flex-1 relative items-center justify-center overflow-visible">
        <Animatable.Image
          animation={"fadeIn"}
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-[600px] mt-20"
        />
        {/* main go button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] justify-center items-center "
          style={{ borderRadius: 50 }}
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9] "
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
      {/* Hero Image and Go btn section end */}
    </SafeAreaView>
  );
};

export default HomeScreen;
