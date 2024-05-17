import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { COLORS, SIZES } from "../theme";
import { useTheme } from "react-native-paper";
import HomeScreen from "./HomeScreen";
import NavigationIcon from "../components/NavigationIcon";
import HomeIcon from "../assets/svg/navigation/Home";
import SearchIcon from "../assets/svg/navigation/Search";
import ReviewIcon from "../assets/svg/navigation/Review";
import OfferIcon from "../assets/svg/navigation/Offer";
import ProfileIcon from "../assets/svg/navigation/Profile";

const Tab = createMaterialBottomTabNavigator();

const Dashboard = () => {
  // REMOVE WEIRD TAB NAVIGATION COLOR
  const theme = useTheme();
  // theme.colors.secondaryContainer = "transparent";

  return (
    <View style={styles.container}>
      <Tab.Navigator
        // initialRouteName="HomeScreen"
        activeColor={COLORS.primary}
        inactiveColor={COLORS.gray}
        barStyle={styles.navigatorTabBar}
        shifting={false}
        screenListeners={{
          tabPress: (e) => {},
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Home"
                color={color}
                focused={focused}
                icon={<HomeIcon fill={color} />}
              />
            ),
          }}
        />

        <Tab.Screen
          name="SearchScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Search"
                color={color}
                focused={focused}
                icon={<SearchIcon fill={color} />}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ReviewsScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Reviews"
                color={color}
                focused={focused}
                icon={<ReviewIcon fill={color} />}
              />
            ),
          }}
        />

        <Tab.Screen
          name="OffersScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Offers"
                color={color}
                focused={focused}
                icon={<OfferIcon fill={color} />}
              />
            ),
          }}
        />

        <Tab.Screen
          name="ProfileScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <NavigationIcon
                text="Profile"
                color={color}
                focused={focused}
                icon={<ProfileIcon fill={color} />}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight ?? 0,
  },
  navigatorTabBar: {
    backgroundColor: COLORS.white,
    paddingBottom: StatusBar.currentHeight ?? SIZES.md
  },
  tabBarIcon: {
    minWidth: 55,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
