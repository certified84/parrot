import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from "../theme";
import { Dashboard, NotificationsScreen } from "../screens";

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
    </Stack.Navigator>
  );
};

export default index;