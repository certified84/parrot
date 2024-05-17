import { StackNavigationProp } from "@react-navigation/stack";

export {};

declare global {
  interface NavigationProps {
    navigation: NavigationProp<any, any>;
  }

  export type StackParamList = {
    HomeScreen;
    SearchScreen;
    NotificationsScreen;
    ProfileScreen;
    ReviewsScreen;
    OffersScreen;

    BookmarksScreen: { bookmarks: string[] };
    ServicesScreen: { category?: Category; bookmarks?: string[] };
    CategoryiesScreen: { bookmarks: string[] };
    BookingsScreen;
    MessagesScreen;
  };

  interface Category {
    id: string;
    title: string;
    type: string;
  }

  interface IBusiness {
    id: string;
    name: string;
    verified: boolean;
    rating: number;
    reviewCount: number;
    businessType: string;
    image: string;
  }
}
