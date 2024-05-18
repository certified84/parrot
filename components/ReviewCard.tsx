import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  useWindowDimensions,
  FlatList,
  TextInput,
} from "react-native";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import React, { useState, useRef } from "react";
import { Avatar } from "react-native-paper";
import {
  MaterialIcons,
  FontAwesome,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import RNAnimated from "react-native-animated-component";
import LikeIcon from "../assets/svg/Like";
import DislikeIcon from "../assets/svg/Dislike";
import CommentIcon from "../assets/svg/Comment";
import ShareIcon from "../assets/svg/Share";

type NavProp = NavigationProp<StackParamList>;

interface Props {
  navigation?: NavProp;
  review: IReview;
  width: number;
}

const ReviewCard: React.FC<Props> = ({ review, navigation, width }) => {
  const scale = useRef(new Animated.Value(1)).current;
  return (
    <RNAnimated appearFrom="top" animationDuration={700}>
      <TouchableOpacity style={styles.wrapper} activeOpacity={0.9}>
        <View style={styles.newsletterContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Avatar.Image size={55} source={{ uri: review.profileImage }} />
          </TouchableOpacity>

          <View style={{ marginLeft: SIZES.xxs }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={TYPOGRAPHY.h2}>{review.name}</Text>
              <MaterialIcons
                name="verified"
                size={15}
                color={"#0082CB"}
                style={{ alignSelf: "center" }}
              />
            </View>
            <Text style={styles.dateSection}>{review.time}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={{ padding: 4, alignSelf: "center", marginLeft: "auto" }}
          >
            <Feather name="more-vertical" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={review.images}
          renderItem={({ item: image, index }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                // setImageIndex(index);
                // setShowImageDialog(true);
              }}
              style={{
                ...styles.photoContainer,
                marginEnd: index === review.images.length - 1 ? SIZES.sm : 0,
                width: width * 0.8,
              }}
            >
              <Image
                source={{
                  uri: image,
                }}
                style={{ width: "100%", height: 300 }}
              />
            </TouchableOpacity>
          )}
        />

        <View style={{ margin: SIZES.sm }}>
          <Text style={TYPOGRAPHY.p}>{review.review}</Text>
        </View>

        <View style={styles.bottomSection}>
          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <LikeIcon />
            <Text style={TYPOGRAPHY.p}>{review.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <DislikeIcon />
            <Text style={TYPOGRAPHY.p}>{review.dislikes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <CommentIcon />
            <Text style={TYPOGRAPHY.p}>{review.comments}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
            <ShareIcon />
          </TouchableOpacity>
        </View>

        {/* <View style={{ ...styles.bottomSection }}>
          <View style={{ flex: 0.6 }}>
            <TextInput
              autoCapitalize="none"
              placeholder="leave a comment..."
              style={styles.inputField}
              placeholderTextColor={COLORS.darkGray}
            ></TextInput>
          </View>
          <View style={styles.likeContainer}>
            <TouchableOpacity></TouchableOpacity>

            <TouchableOpacity>
              <Animated.View style={{ transform: [{ scale }] }}>
                <AntDesign name="hearto" size={25} />
              </Animated.View>
            </TouchableOpacity>
            <Text style={styles.likeSection}>{review.likes}</Text>
            <FontAwesome name="comment-o" size={20} color={COLORS.black} />
            <Text style={styles.commentSection}>{review.comments}</Text>
          </View>
        </View> */}
      </TouchableOpacity>
    </RNAnimated>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.white,
    marginBottom: SIZES.sm,
    overflow: "hidden",
  },
  newsletterContainer: {
    padding: SIZES.xs,
    flexDirection: "row",
    alignItems: "center",
  },
  photoContainer: {
    marginStart: SIZES.sm,
    borderRadius: SIZES.md,
    height: 300,
    backgroundColor: COLORS.lightGray,
    overflow: "hidden",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.md,
    paddingBottom: SIZES.md,
  },
  likeContainer: {
    flexDirection: "row",
    flex: 0.4,
    justifyContent: "flex-end",
    paddingTop: 4,
  },
  commentSection: {
    ...TYPOGRAPHY.h2,
    fontSize: SIZES.md,
    marginHorizontal: SIZES.xs,
  },
  likeSection: {
    ...TYPOGRAPHY.h2,
    fontSize: SIZES.md,
    marginHorizontal: SIZES.xs,
  },
  dateSection: {
    ...TYPOGRAPHY.p,
    color: "#6F6F6F",
  },

  inputField: {
    backgroundColor: COLORS.white,
    color: COLORS.black,
    height: 38,
    borderWidth: 1.5,
    borderColor: COLORS.lightGray,
    borderRadius: 10,
    padding: 5,
  },
});
