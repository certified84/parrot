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
  ImageBackground,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import { Avatar, FAB, TextInput } from "react-native-paper";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import {
  RouteProp,
  NavigationProp,
  useIsFocused,
} from "@react-navigation/native";
import { formatGreeting, getRandomSubset } from "../constants/util";
import { Ionicons } from "@expo/vector-icons";
import Bell from "../assets/svg/Bell";
import Category from "../components/Category";
import RestaurantIcon from "../assets/svg/categories/Restaurant";
import FashionIcon from "../assets/svg/categories/Fashion";
import CarIcon from "../assets/svg/categories/Car";
import TechnologyIcon from "../assets/svg/categories/Technology";
import TravelIcon from "../assets/svg/categories/Travel";
import EntertainmentIcon from "../assets/svg/categories/Entertainment";
import EditIcon from "../assets/svg/Edit";
import VerifiedIcon from "../assets/svg/Verified";
import RatingBar from "../components/RatingBar";
import { businesses, reviews } from "../store/dummy";
import BusinessComponent from "../components/Business";
import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";

type ScreenRouteProp = RouteProp<StackParamList, "BusinessInfoScreen">;
type NavProp = NavigationProp<StackParamList, "BusinessInfoScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const BusinessInfoScreen: React.FC<Props> = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const business = route?.params?.business;
  const [rating, setRating] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={"Business Info"} showBack />

      <Image
        source={{
          uri: business?.image ?? "",
        }}
        style={{ marginTop: SIZES.md }}
        width={width}
        height={250}
      />

      <ScrollView
        style={{ flex: 1, marginHorizontal: SIZES.md }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.nameContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={TYPOGRAPHY.h3}>{business?.name ?? ""}</Text>
            {business?.verified && (
              <VerifiedIcon style={{ marginTop: SIZES.xxs }} />
            )}
          </View>
          <Text style={TYPOGRAPHY.h5}>{business?.businessType}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <RatingBar
            canRate={false}
            rating={business?.rating ?? 0}
            onRate={() => {}}
          />
          <Text style={{ ...TYPOGRAPHY.h3, marginHorizontal: SIZES.xs }}>
            {business?.rating ?? 0}
          </Text>
          <Text style={{ ...TYPOGRAPHY.h5 }}>{`(${
            business?.reviewCount ?? 0
          } reviews)`}</Text>
        </View>

        <Text style={{ ...TYPOGRAPHY.p, marginVertical: SIZES.xs }}>
          {business?.info}
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: SIZES.sm,
          }}
        >
          <Text style={TYPOGRAPHY.h3}>{"Rate this bussiness"}</Text>
          <Text
            style={{
              ...TYPOGRAPHY.p,
              textAlign: "center",
              marginVertical: SIZES.xs,
            }}
          >
            {"Have you visited this business before? How was your experience"}
          </Text>
          <RatingBar rating={rating} canRate onRate={setRating} />
        </View>

        <Text style={TYPOGRAPHY.h3}>{"Reviews"}</Text>

        <View style={{ marginVertical: SIZES.sm }}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              navigation={navigation}
              review={review}
              business={business}
              width={width}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.sm,
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: SIZES.xs,
    alignItems: "center",
  },
});
