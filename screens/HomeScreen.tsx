import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  Dimensions,
  SafeAreaView,
  Image,
} from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import {
  RouteProp,
  NavigationProp,
  useIsFocused,
} from "@react-navigation/native";
import { categories, services } from "../store/dummy";
import { formatGreeting, getRandomSubset } from "../constants/util";
import { Ionicons } from "@expo/vector-icons";
import Bell from "../assets/svg/Bell";
import Category from "../components/Category";
import ResturantIcon from "../assets/svg/categories/Resturant";
import FashionIcon from "../assets/svg/categories/Fashion";
import CarIcon from "../assets/svg/categories/Car";
import TechnologyIcon from "../assets/svg/categories/Technology";
import TravelIcon from "../assets/svg/categories/Travel";
import EntertainmentIcon from "../assets/svg/categories/Entertainment";

type ScreenRouteProp = RouteProp<StackParamList, "HomeScreen">;
type NavProp = NavigationProp<StackParamList, "HomeScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

interface IValueProps {
  searchText: string;
  search: boolean;
  specialOffers: number[];
  currentSpecialOffer: number;
  categories: Category[];
  selected: string;
  bookmarks: string[];
  recommendedServices: Service[];
}

const HomeScreen: React.FC<Props> = ({ route, navigation }) => {
  const [values, setValues] = useState<IValueProps>({
    searchText: "",
    search: false,
    specialOffers: [1, 2, 3, 4, 5],
    currentSpecialOffer: 0,
    categories: [
      {
        id: "-1",
        title: "All",
        type: "all",
      },
      ...categories,
    ],
    selected: "all",
    bookmarks: [],
    recommendedServices: [],
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000462" }}>
      <View style={{ padding: SIZES.md }}>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation?.navigate("ProfileScreen")}
              style={styles.profileImage}
            >
              <Image
                source={{
                  uri: "https://source.unsplash.com/random/?man,porshe",
                }}
                width={50}
                height={50}
              />
            </TouchableOpacity>

            <View style={{ marginStart: SIZES.xs }}>
              <Text
                style={{ ...TYPOGRAPHY.p, color: "white", marginBottom: 4 }}
              >
                {formatGreeting()}
              </Text>
              <Text style={{ ...TYPOGRAPHY.h2, color: "white" }}>
                Samson Achiaga
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.5}
            onPress={() => navigation?.navigate("NotificationsScreen")}
          >
            <Bell />
            <View style={styles.notificationCount}>
              <Text style={{ ...TYPOGRAPHY.h5, color: "white" }}>4</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchContainer} activeOpacity={0.9}>
          <Text style={{ ...TYPOGRAPHY.p, color: "#B0B0B0" }}>
            e.g. Amala Skot, Restaurant, Hotels
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingHorizontal: SIZES.md,
        }}
      >
        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h2}>Categories</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ padding: 4 }}>
            <Text style={TYPOGRAPHY.h5}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconsRow}>
          <Category
            style={{
              borderBottomEndRadius: 0,
              borderBottomStartRadius: 0,
            }}
            text="Restaurant"
            icon={<ResturantIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />

          <Category
            style={{
              borderBottomEndRadius: 0,
              borderBottomStartRadius: 0,
            }}
            text="Fashion"
            icon={<FashionIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />

          <Category
            style={{
              borderBottomEndRadius: 0,
              borderBottomStartRadius: 0,
            }}
            text="Auto"
            icon={<CarIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />
        </View>

        <View style={styles.iconsRow}>
          <Category
            style={{
              borderTopEndRadius: 0,
              borderTopStartRadius: 0,
            }}
            text="Technology"
            icon={<TechnologyIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />

          <Category
            style={{
              borderTopEndRadius: 0,
              borderTopStartRadius: 0,
            }}
            text="Travel"
            icon={<TravelIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />

          <Category
            style={{
              borderTopEndRadius: 0,
              borderTopStartRadius: 0,
            }}
            text="Entertainment"
            icon={<EntertainmentIcon />}
            onPress={() =>
              navigation?.navigate("ServicesScreen", {
                bookmarks: values.bookmarks,
                category: categories.find((item) => item.type === "cleaning"),
              })
            }
          />
        </View>

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h2}>Offers for you</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ padding: 4 }}>
            <Text style={TYPOGRAPHY.h5}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.seeAllContainer}>
          <Text style={TYPOGRAPHY.h2}>Businesses from your location</Text>
          <TouchableOpacity activeOpacity={0.5} style={{ padding: 4 }}>
            <Text style={TYPOGRAPHY.h5}>View All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileImage: {
    borderRadius: SIZES.xs,
    backgroundColor: "#F0F0F0",
    overflow: "hidden",
  },
  notificationCount: {
    position: "absolute",
    right: 0,
    top: 0,
    width: SIZES.sm,
    height: SIZES.sm,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.md,
    backgroundColor: "#FF6B1E",
  },
  searchContainer: {
    marginBottom: SIZES.sm,
    justifyContent: "center",
    overflow: "hidden",
    padding: SIZES.sm,
    backgroundColor: "white",
    borderRadius: SIZES.xs,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    height: 45,
    marginTop: 38,
  },
  locationContainer: {
    flex: 0.82,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: SIZES.xs,
    borderColor: "#E7E8EA",
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    paddingHorizontal: SIZES.xxs,
  },
  locatorContainer: {
    flex: 0.16,
    flexDirection: "row",
    backgroundColor: "#FAFAFA",
    borderRadius: SIZES.xs,
    borderColor: "#E7E8EA",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.xxs,
    borderWidth: 1,
  },
  seeAllContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.md,
  },
  specialOfferContainer: {
    borderRadius: 30,
    backgroundColor: "black",
    overflow: "hidden",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: SIZES.sm,
    left: 0,
    right: 0,
  },
  textInputField: {
    backgroundColor: "#F5F5F5",
    color: COLORS.black,
    marginBottom: SIZES.sm,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
