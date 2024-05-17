import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "NotificationsScreen">;
type NavProp = NavigationProp<StackParamList, "NotificationsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const NotificationsScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight ?? 0,
      }}
    >
      <Header navigation={navigation} title="Notifications" showBack />
      <View style={{ flex: 1, marginHorizontal: SIZES.md }}>
        <EmptyDesign />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    paddingHorizontal: SIZES.md,
    marginVertical: SIZES.md,
  },
});
