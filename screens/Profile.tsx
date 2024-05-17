import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "ProfileScreen">;
type NavProp = NavigationProp<StackParamList, "ProfileScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ProfileScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight ?? 0,
      }}
    >
      <Header navigation={navigation} title="Profile" showBack={false} />
      <View style={{ flex: 1, marginHorizontal: SIZES.md }}></View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
