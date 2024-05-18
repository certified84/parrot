import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";
import { businesses, reviews } from "../store/dummy";
import ReviewCard from "../components/ReviewCard";
import BusinessIcon from "../assets/svg/Business";
import { Avatar } from "react-native-paper";
import RatingBar from "../components/RatingBar";
import LikeIcon from "../assets/svg/Like";
import DislikeIcon from "../assets/svg/Dislike";
import CommentIcon from "../assets/svg/Comment";
import ShareIcon from "../assets/svg/Share";
import CommentCard from "../components/CommentCard";

type ScreenRouteProp = RouteProp<StackParamList, "ReviewDetailScreen">;
type NavProp = NavigationProp<StackParamList, "ReviewDetailScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ReviewDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const review = route?.params?.review;
  const business = route?.params.business;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        navigation={navigation}
        title="Reviews"
        showBack
        headerRight={
          <TouchableOpacity
            style={{ padding: 4 }}
            activeOpacity={0.5}
            onPress={() =>
              navigation?.navigate("BusinessInfoScreen", {
                business: business ?? businesses[0],
              })
            }
          >
            <BusinessIcon />
          </TouchableOpacity>
        }
      />
      <ScrollView
        style={{ flex: 1, margin: SIZES.md, marginBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            size={45}
            source={{ uri: review?.profileImage ?? "" }}
          />
          <View style={{ marginStart: SIZES.sm, flex: 1 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={TYPOGRAPHY.h3}>{review?.name}</Text>

              <RatingBar
                rating={review?.rating ?? 0}
                canRate={false}
                onRate={() => {}}
              />
            </View>
            <Text
              style={{
                ...TYPOGRAPHY.p,
                fontSize: SIZES.xs,
                marginTop: 4,
                color: "#158D30",
              }}
            >
              For {business?.name ?? ""}{" "}
              <Text style={{ color: "black" }}>({review?.time ?? ""})</Text>
            </Text>
          </View>
        </View>

        <Text
          style={{
            ...TYPOGRAPHY.p,
            fontSize: SIZES.sm,
            marginVertical: SIZES.sm,
          }}
        >
          {review?.review ?? ""}
        </Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={review?.images}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.reviewImage} activeOpacity={0.8}>
              <Image
                source={{
                  uri: item,
                }}
                width={width * 0.55}
                height={140}
              />
            </TouchableOpacity>
          )}
        />

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <LikeIcon />
            <Text style={TYPOGRAPHY.p}>{review?.likes ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <DislikeIcon />
            <Text style={TYPOGRAPHY.p}>{review?.dislikes ?? 0}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <CommentIcon />
            <Text style={TYPOGRAPHY.p}>{review?.comments ?? ""}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() =>
              navigation?.navigate("BusinessInfoScreen", {
                business: business ?? businesses[0],
              })
            }
          >
            <BusinessIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <ShareIcon />
          </TouchableOpacity>
        </View>

        <View style={{ height: 1, backgroundColor: "black", opacity: 0.2 }} />

        <Text
          style={{
            ...TYPOGRAPHY.h3,
            marginTop: SIZES.sm,
            marginBottom: SIZES.xxs,
          }}
        >
          Comments
        </Text>

        <CommentCard />

        <CommentCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  reviewImage: {
    borderRadius: SIZES.xxs,
    overflow: "hidden",
    marginEnd: SIZES.xs,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.md,
  },
});
