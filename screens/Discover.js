import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

const data = [
  {
    key: 101,
    name: "Beautiful sea beach in Dhaka",
    photo:
      "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_960_720.jpg",
    price_level: "$$$$",
    price: "$10 - $150",
    location: "Dhaka",
    rating: "5.0",
    bearing: "East",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    cuisine: [
      { key: 1, name: "Safe Food" },
      { key: 2, name: "International" },
      { key: 3, name: "Vegetarian Friendly" },
      { key: 4, name: "Vegan Options" },
      { key: 5, name: "Halal" },
      { key: 6, name: "Good Environment" },
      { key: 7, name: "Safe Water" },
    ],
    phone: "+3901948538931",
    email: "seaRest@gmail.com",
    address: "Mohakahli, Dhaka, Bangladesh",
  },
  {
    key: 102,
    name: "Luxury Resort in Bali",
    photo:
      "https://cdn.pixabay.com/photo/2020/03/21/20/04/real-estate-4955093_960_720.jpg",
    price_level: "$$$$",
    price: "$300 - $1000",
    location: "Bali, Indonesia",
    rating: "4.8",
    bearing: "South",
    description:
      "Experience the ultimate luxury at our resort in Bali, located in the heart of the island's most popular tourist area. Our spacious suites offer stunning views of the ocean, while our world-class amenities and services ensure a truly unforgettable stay.",
    cuisine: [
      { key: 1, name: "International" },
      { key: 2, name: "Fine Dining" },
      { key: 3, name: "Vegetarian Options" },
      { key: 4, name: "Halal" },
      { key: 5, name: "Romantic Ambience" },
      { key: 6, name: "Good Environment" },
      { key: 7, name: "Safe Water" },
    ],
    phone: "+62361478210",
    email: "reservations@luxurybaliresort.com",
    address: "Jl. Raya Seminyak No. 46, Seminyak, Bali, Indonesia",
  },
  {
    key: 103,
    name: "Traditional Restaurant in Rome",
    photo:
      "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_960_720.jpg",
    price_level: "$$",
    price: "$20 - $50",
    location: "Rome, Italy",
    rating: "4.5",
    bearing: "North",
    description:
      "Indulge in the best Italian cuisine at our traditional restaurant in Rome, where we serve classic dishes made from fresh, locally-sourced ingredients. Our cozy atmosphere and attentive service ensure a truly authentic dining experience. Our spacious suites offer stunning views of the ocean, while our world-class amenities and services ensure a truly unforgettable stay.",
    cuisine: [
      { key: 1, name: "Italian" },
      { key: 2, name: "Vegetarian Friendly" },
      { key: 3, name: "Gluten-Free Options" },
      { key: 4, name: "Outdoor Seating" },
      { key: 5, name: "Romantic Ambience" },
      { key: 6, name: "Good Environment" },
      { key: 7, name: "Safe Water" },
    ],
    phone: "+39066782543",
    email: "info@traditionalromanrestaurant.com",
    address: "Via del Corso, 123, Rome, Italy",
  },
  {
    key: 104,
    name: "Safari Lodge in Serengeti",
    photo:
      "https://cdn.pixabay.com/photo/2012/02/25/19/13/spa-16985_960_720.jpg",
    price_level: "$$$",
    price: "$150 - $500",
    location: "Serengeti, Tanzania",
    rating: "4.9",
    bearing: "West",
    description:
      "Embark on a once-in-a-lifetime adventure at our safari lodge in Serengeti, where you can experience the incredible wildlife and natural beauty of Tanzania up close. Our comfortable lodges and expert guides ensure an unforgettable safari experience.",
    cuisine: [
      { key: 1, name: "African" },
      { key: 2, name: "Vegetarian Options" },
      { key: 3, name: "Outdoor Seating" },
      { key: 4, name: "Family Friendly" },
      { key: 5, name: "Romantic Ambience" },
      { key: 6, name: "Good Environment" },
      { key: 7, name: "Safe Water" },
    ],
    phone: "+255783456789",
    email: "info@serengetisafarilodge.com",
    address: "Serengeti National Park, Tanzania",
  },
];

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* First section start */}
      <View className="flex-row items-center justify-between px-8 mt-4">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold ">
            Discover
          </Text>
          <Text className="text-[#527283] text-[36px] ">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      {/* First section end */}

      {/* Second section start */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg ">
        <GooglePlacesAutocomplete
          placeholder="Search"
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details?.geometry?.viewport);
          }}
          query={{
            // key: "AIzaSyAqWYYciARw87_JztSZcL5rTsZ7CbbriYI",
            key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
            language: "en",
          }}
        />
      </View>
      {/* Second section end */}

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={"large"} color={"#0B646B"} />
        </View>
      ) : (
        <ScrollView>
          {/* Menu section start */}
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotel"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          {/* Menu section start */}

          {/* Top tips section start */}
          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2c7379] text-[28px] font-bold ">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2 ">
                <Text className="text-[#A0C4C7] text-[20px] font-bold ">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color={"#A0C4C7"}
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap ">
              {data?.map((d) => (
                <ItemCardContainer
                  key={d?.key}
                  imageSrc={d?.photo}
                  title={d?.name}
                  location={d?.address}
                  data={d}
                />
              ))}
            </View>
          </View>
          {/* Top tips section end */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
