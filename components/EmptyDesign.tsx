import { Text, View } from "react-native";
import { SIZES, TYPOGRAPHY } from "../theme";

type Props = {
  title?: string;
  message?: string;
};

const EmptyDesign: React.FC<Props> = ({ title, message }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={TYPOGRAPHY.h2}>
        {title ?? "There's nothing here yet..."}
      </Text>
      <Text
        style={{ ...TYPOGRAPHY.p, textAlign: "center", marginTop: SIZES.xxs }}
      >
        {message ?? "Your data will be displayed here when they are available"}
      </Text>
    </View>
  );
};

export default EmptyDesign;
