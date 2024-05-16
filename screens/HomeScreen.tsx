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
} from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { RouteProp, NavigationProp, useIsFocused } from "@react-navigation/native";
import { categories, services } from "../store/dummy";
import { formatGreeting, getRandomSubset } from "../constants/util";
import { Ionicons } from "@expo/vector-icons";

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
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.xs,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.md,
  },
  bellBookmarkContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  searchContainer: {
    backgroundColor: "#F5F5F5",
    color: COLORS.black,
    marginBottom: SIZES.sm,
    borderColor: "#E7E8EA",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: SIZES.xs,
    overflow: "hidden",
    padding: SIZES.sm,
    paddingHorizontal: SIZES.md,
    margin: SIZES.md,
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
    marginVertical: SIZES.xs,
    flexDirection: "row",
    gap: 4,
  },
});
