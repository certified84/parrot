import { StyleSheet, View, Text } from "react-native";
import { SIZES } from "../theme";
import { ReactNode } from "react";

type NavigationIconProps = {
  text: string;
  color: string;
  focused: boolean;
  icon: ReactNode;
};

const NavigationIcon: React.FC<NavigationIconProps> = ({
  color,
  text,
  focused,
  icon,
}) => (
  <View style={styles.container}>
    {icon}
    <Text
      style={{
        fontSize: SIZES.xs,
        fontFamily: focused ? "inter-md" : "inter-xxs",
        textAlign: "center",
      }}
    >
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    minWidth: 55,
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicator: {
    width: SIZES.xxs,
    height: SIZES.xxs,
    borderRadius: SIZES.xxs,
    marginVertical: 4,
  },
});

export default NavigationIcon;
