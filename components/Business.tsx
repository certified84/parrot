import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SIZES, TYPOGRAPHY, COLORS } from "../theme";
import VerifiedIcon from "../assets/svg/Verified";
import RatingBar from "./RatingBar";
import { useState } from "react";

type Props = {
  item: IBusiness;
  width: number;
  canRate: boolean;
};

const BusinessComponent: React.FC<Props> = ({ item, width, canRate }) => {
  const [rating, setRating] = useState(item.rating);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{ borderRadius: SIZES.xs }}
        width={width * 0.8}
        height={170}
      />

      <View style={styles.nameContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={TYPOGRAPHY.h3}>{item.name}</Text>
          {item.verified && <VerifiedIcon style={{ marginTop: SIZES.xxs }} />}
        </View>
        <Text style={TYPOGRAPHY.h5}>{item.businessType}</Text>
      </View>

      <View style={styles.ratingContainer}>
        <RatingBar canRate={canRate} rating={rating} onRate={setRating} />
        <Text style={{ ...TYPOGRAPHY.h3, marginHorizontal: SIZES.xs }}>
          {item.rating}
        </Text>
        <Text
          style={{ ...TYPOGRAPHY.h5 }}
        >{`(${item.reviewCount} reviews)`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessComponent;

const styles = StyleSheet.create({
  container: {
    borderRadius: SIZES.xxs,
    overflow: "hidden",
    marginEnd: SIZES.xs,
    padding: SIZES.md,
    backgroundColor: "#F8F8F8",
    marginBottom: SIZES.sm,
    justifyContent: "center",
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
