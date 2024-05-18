import { RouteProp, NavigationProp } from "@react-navigation/native";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { SIZES } from "../theme";
import EmptyDesign from "../components/EmptyDesign";
import Header from "../components/Header";
import { reviews } from "../store/dummy";
import ReviewCard from "../components/ReviewCard";

type ScreenRouteProp = RouteProp<StackParamList, "ReviewsScreen">;
type NavProp = NavigationProp<StackParamList, "ReviewsScreen">;

type Props = {
  route?: ScreenRouteProp;
  navigation?: NavProp;
};

const ReviewsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Reviews" showBack={false} />
      <View style={{ flex: 1, marginHorizontal: SIZES.md }}>
        <FlatList
          data={reviews}
          renderItem={({ item: review }) => (
            <ReviewCard navigation={navigation} review={review} width={width} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight ?? 0,
  },
});
