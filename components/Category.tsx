import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import { COLORS, SIZES, TYPOGRAPHY } from "../theme";
import { ReactNode } from "react";
import { Badge } from "react-native-paper";

type Props = {
  text: string;
  icon: ReactNode;
  onPress: () => void;
  badge?: string;
  style?: StyleProp<ViewStyle>;
};
const Category: React.FC<Props> = ({ style, text, icon, onPress, badge }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[style, styles.iconCol]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text numberOfLines={1} style={styles.iconText}>
        {text}
      </Text>
      {badge && (
        <Badge size={15} style={styles.iconBadge}>
          {badge}
        </Badge>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconCol: {
    flex: 0.3,
    alignItems: "center",
    borderRadius: SIZES.xxs,
    paddingVertical: SIZES.xl,
    paddingHorizontal: SIZES.xxs,
    backgroundColor: "#FAFAFA",
  },
  iconText: {
    ...TYPOGRAPHY.h5,
    textAlign: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  iconBadge: {
    fontFamily: "outfit-md",
    fontSize: SIZES.xxs,
    position: "absolute",
    top: "10%",
    left: "90%",
  },
});

export default Category;
