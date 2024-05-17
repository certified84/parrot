import { TouchableOpacity, View } from "react-native";
import Star from "../assets/svg/Star";
import { useState } from "react";

type Props = {
  rating: number;
  canRate: boolean;
  onRate: (value: number) => void;
};

const RatingBar: React.FC<Props> = ({ rating, onRate, canRate }) => {
  let fill = "";
  if (Math.round(rating) === 3) fill = "#FFC700";
  else if (Math.round(rating) < 3) fill = "#D20000";
  else fill = "#158D30";

  return (
    <View style={{ flexDirection: "row", rowGap: 4 }}>
      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!canRate}
        onPress={() => onRate(1)}
      >
        <Star fill={Math.round(rating) >= 1 ? fill : "#C8C8C8"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!canRate}
        onPress={() => onRate(2)}
      >
        <Star fill={Math.round(rating) >= 2 ? fill : "#C8C8C8"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!canRate}
        onPress={() => onRate(3)}
      >
        <Star fill={Math.round(rating) >= 3 ? fill : "#C8C8C8"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!canRate}
        onPress={() => onRate(4)}
      >
        <Star fill={Math.round(rating) >= 4 ? fill : "#C8C8C8"} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        disabled={!canRate}
        onPress={() => onRate(5)}
      >
        <Star fill={Math.round(rating) >= 5 ? fill : "#C8C8C8"} />
      </TouchableOpacity>
    </View>
  );
};

export default RatingBar;
