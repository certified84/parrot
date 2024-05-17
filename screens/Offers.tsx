import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "OffersScreen">;
type NavProp = NavigationProp<StackParamList, "OffersScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const OffersScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight ?? 0,
      }}
    >
      <Header navigation={navigation} title="Offers" showBack={false} />
      <View style={{ flex: 1, marginHorizontal: SIZES.md }}>
        <EmptyDesign />
      </View>
    </SafeAreaView>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({});
