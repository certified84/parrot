import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

type Props = {
  navigation: any;
  title: string;
  showBack?: boolean;
  showOptions?: boolean;
  headerRight?: ReactNode;
};

const Header: React.FC<Props> = ({
  navigation,
  title,
  showBack = true,
  headerRight,
}) => (
  <View style={styles.container}>
    {showBack && (
      <Ionicons
        size={SIZES.md + 4}
        name={Platform.OS === "android" ? "arrow-back" : "chevron-back"}
        onPress={() => navigation?.goBack()}
      />
    )}
    <Text style={{ ...TYPOGRAPHY.h2, marginEnd: SIZES.md + 4 }}>{title}</Text>
    <View>{headerRight}</View>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: SIZES.md,
    alignItems: "center",
  },
  btnBack: {
    width: 45,
    height: 45,
    borderRadius: SIZES.xs,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },
  btnMore: {
    width: 45,
    height: 45,
    borderRadius: SIZES.xs,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#333333",
  },
});
