import { StackNavigationProp } from "@react-navigation/stack";

export {};

declare global {
  interface NavigationProps {
    navigation: NavigationProp<any, any>;
  }

  export type StackParamList = {
    HomeScreen;
    BookmarksScreen: { bookmarks: string[] };
    NotificationsScreen;
    ServicesScreen: { category?: Category; bookmarks?: string[] };
    CategoryiesScreen: { bookmarks: string[] };
    BookingsScreen;
    MessagesScreen;
    ProfileScreen;
  };

  interface Category {
    id: string;
    title: string;
    type: string;
  }

  interface Service {
    id: string;
    title: string;
    desc: string;
    images: string[];
    reviewCount: number;
    rating: number;
    price: number;
    type:
      | "cleaning"
      | "repair"
      | "painting"
      | "laundry"
      | "appliance"
      | "plumbing"
      | "movers"
      | "shaving";
  }
}
