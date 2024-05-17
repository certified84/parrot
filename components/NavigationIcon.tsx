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
        color: color,
        textAlign: "center",
        fontFamily: focused ? "inter-md" : "inter-xs",
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
});

export default NavigationIcon;
