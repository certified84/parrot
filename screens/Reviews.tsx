import { RouteProp, NavigationProp } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";

type ScreenRouteProp = RouteProp<StackParamList, "ReviewsScreen">;
type NavProp = NavigationProp<StackParamList, "ReviewsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ReviewsScreen: React.FC<Props> = ({ route, navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: StatusBar.currentHeight ?? 0,
      }}
    >
      <Header navigation={navigation} title="Reviews" showBack={false} />
      <View style={{ flex: 1, marginHorizontal: SIZES.md }}>
        <EmptyDesign />
      </View>
    </SafeAreaView>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({});
