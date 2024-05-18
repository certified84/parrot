import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../theme";
import {
  BusinessInfoScreen,
  Dashboard,
  NotificationsScreen,
  OffersScreen,
  SearchScreen,
} from "../screens";
import ReviewDetailScreen from "../screens/ReviewDetail";

const Stack = createStackNavigator();

const index = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Dashboard"}
      screenOptions={{
        headerBackTitle: " ",
        headerTintColor: COLORS.primary,
        headerShown: false,
        headerStyle: {
          backgroundColor: COLORS.lightGray,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="BusinessInfoScreen" component={BusinessInfoScreen} />
      <Stack.Screen name="OffersScreen" component={OffersScreen} />
      <Stack.Screen name="ReviewDetailScreen" component={ReviewDetailScreen} />
    </Stack.Navigator>
  );
};

export default index;
