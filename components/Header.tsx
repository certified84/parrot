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
  headerRight?: React.JSX.Element;
};

const Header: React.FC<Props> = ({
  navigation,
  title,
  showBack = true,
  headerRight,
}) => (
  <View style={styles.container}>
    <Ionicons
      size={SIZES.md + 4}
      disabled={!showBack}
      style={{ opacity: showBack ? 1 : 0 }}
      name={Platform.OS === "android" ? "arrow-back" : "chevron-back"}
      onPress={() => navigation?.goBack()}
    />
    {/* <View style={{position: 'absolute', left: 0, right: 0}}> */}
    <Text style={TYPOGRAPHY.h2}>{title}</Text>
    {/* </View> */}
    <View style={{}}>{headerRight}</View>
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
