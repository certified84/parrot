import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";
import { Avatar } from "react-native-paper";
import LikeIcon from "../assets/svg/Like";
import DislikeIcon from "../assets/svg/Dislike";
import CommentIcon from "../assets/svg/Comment";
import ShareIcon from "../assets/svg/Share";

type Props = {};

const CommentCard: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <Avatar.Image
        size={35}
        source={{ uri: "https://source.unsplash.com/random/?man,bmw" }}
      />
      <View style={{flex: 1, marginStart: SIZES.xxs }}>
        <Text style={TYPOGRAPHY.h4}>Grace</Text>
        <Text style={{ ...TYPOGRAPHY.p, marginTop: 4 }}>@Omolope (2h ago)</Text>
        <Text style={{ ...TYPOGRAPHY.p, flex: 1, marginVertical: SIZES.xxs }}>
          {`Thank you so much for choosing to dine with us and for taking the time to share your positive experience! We're delighted to hear that you and your family had a wonderful dinner at our restaurant.`}
        </Text>

        <View style={styles.bottomSection}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <LikeIcon />
            <Text style={TYPOGRAPHY.p}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <DislikeIcon />
            <Text style={TYPOGRAPHY.p}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <CommentIcon />
            <Text style={TYPOGRAPHY.p}>12</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <ShareIcon />
          </TouchableOpacity>
        </View>

        <SubComment />
      </View>
    </View>
  );
};

export default CommentCard;

const SubComment: React.FC<Props> = ({}) => {
  return (
    <View style={styles.subCommentContainer}>
      <View style={{ flexDirection: "row" }}>
        <Avatar.Image
          size={35}
          source={{ uri: "https://source.unsplash.com/random/?man,bmw" }}
        />
        <View style={{ marginStart: SIZES.xxs }}>
          <Text style={TYPOGRAPHY.h4}>Grace</Text>
          <Text style={{ ...TYPOGRAPHY.p, marginTop: 4 }}>
            @Omolope (2h ago)
          </Text>
        </View>
      </View>
      <View style={{ marginStart: SIZES.xxs }}>
        <Text style={{ ...TYPOGRAPHY.p, flex: 1, marginVertical: SIZES.xxs }}>
          {`Thank you so much for choosing to dine with us and for taking the time to share your positive experience! We're delighted to hear that you and your family had a wonderful dinner at our restaurant.`}
        </Text>

        <View style={{ ...styles.bottomSection, marginBottom: 0 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <LikeIcon />
            <Text style={TYPOGRAPHY.p}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <DislikeIcon />
            <Text style={TYPOGRAPHY.p}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <CommentIcon />
            <Text style={TYPOGRAPHY.p}>12</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#E9E9E9",
    paddingVertical: SIZES.sm,
    marginBottom: SIZES.xs,
  },
  subCommentContainer: {
    borderTopWidth: 1,
    borderTopColor: "#E9E9E9",
    paddingTop: SIZES.sm,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.sm,
  },
});
